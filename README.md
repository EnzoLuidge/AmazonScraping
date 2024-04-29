**Amazon Product Scraper**

*Overview*
This project is a simple web application that scrapes product data from Amazon based on user input keywords. It displays the product title, rating, number of reviews, and product image URL.

*Prerequisites*
Before you begin, ensure you have the following installed:

-Node.js
-npm (Node Package Manager)

*Installation*
Follow these steps to set up the project on your local machine:

_Clone the Repository_
1. git clone https://github.com/your-username/amazon-scraper.git
2. cd amazon-scraper

_Install Dependencies_
-Navigate to the project directory and run:
1. npm install

*Running the Application*
1. Start the Server
From the root of your project directory, execute:
- node app.js
This will start the server on http://localhost:3000.
2. Access the Web Interface
Open a web browser and go to http://localhost:3000. This will load the main page where you can start using the product scraper.

*Features*
- Product Search: Users can enter a keyword to search for products on Amazon.
- Display Results: The application displays a list of products including the title, image, rating, and number of reviews.

*File Structure*
- /public - Contains the frontend files: HTML, CSS, and JavaScript.
- app.js - The main server file that handles backend logic including the scraping functionality.
- package.json - Defines the project dependencies and metadata.

*Usage*
1. Enter a Keyword: In the input field on the main page, type a keyword for the products you want to search (e.g., "books", "electronics").
2. Fetch Data: Click the "Search" button to fetch and display the products.

*Error Handling*
The application handles basic errors such as:

- Invalid or empty search queries.
- Network issues or problems connecting to Amazon.
- Empty search results.

*Future Enhancements*
- Improve error handling with more descriptive messages.
- Implement more advanced scraping techniques to handle dynamic content.
- Add pagination or the ability to scrape multiple pages.
