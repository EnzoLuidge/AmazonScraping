const express = require('express');
const axios = require('axios');
const { JSDOM } = require('jsdom');
const path = require('path');
const app = express();
const PORT = 3000;
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/scrape', async (req, res) => {
    try {
        const { keyword } = req.query;
        if (!keyword) {
            return res.status(400).json({ error: 'Keyword is required' });
        }

        const url = `https://www.amazon.com/s?k=${encodeURIComponent(keyword)}`;
        const response = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
            }
        });

        const dom = new JSDOM(response.data);
        const document = dom.window.document;
        const products = [];

        document.querySelectorAll('.s-result-item').forEach(item => {
            const title = item.querySelector('h2 a span')?.textContent;
            const rating = item.querySelector('.a-icon-alt')?.textContent;
            const numReviews = item.querySelector('.a-size-small .a-size-base')?.textContent;
            const imageUrl = item.querySelector('.s-image')?.src;

            if (title && rating && numReviews && imageUrl) {
                products.push({
                    title,
                    rating,
                    numReviews,
                    imageUrl
                });
            }
        });

        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
