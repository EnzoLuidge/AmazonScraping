document.getElementById('searchButton').addEventListener('click', fetchData);

function fetchData() {
    const keyword = document.getElementById('keyword').value;
    if (!keyword.trim()) {
        alert('Please enter a keyword');
        return;
    }

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '<p>Loading...</p>';

    fetch(`/api/scrape?keyword=${encodeURIComponent(keyword)}`)
        .then(response => response.json())
        .then(data => {
            resultsDiv.innerHTML = '';
            if (data.length === 0) {
                resultsDiv.innerHTML = '<p>No products found. Try another keyword!</p>';
            } else {
                data.forEach(product => {
                    const productDiv = document.createElement('div');
                    productDiv.className = 'product';
                    productDiv.innerHTML = `
                        <img src="${product.imageUrl}" alt="${product.title}">
                        <h3>${product.title}</h3>
                        <p>Rating: ${product.rating}</p>
                        <p>Reviews: ${product.numReviews}</p>
                    `;
                    resultsDiv.appendChild(productDiv);
                });
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            resultsDiv.innerHTML = '<p>Error loading products. Please try again later.</p>';
        });
}

