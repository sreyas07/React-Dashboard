Welcome to the React Dashboard repository, a comprehensive solution that seamlessly integrates a robust React frontend with a Node.js backend. This project provides a sophisticated dashboard interface with three key components - a table, a pie chart, and a graph - each fetching and displaying data from dedicated API endpoints. The application's design adheres to the provided UI design and assets, ensuring a visually appealing and responsive user interface.

Backend Integration:
The backend leverages Node.js and Express, offering three API endpoints:

/api/table: Provides sample data for the table component.
/api/pie-chart: Supplies sample data for the pie chart component.
/api/graph: Delivers sample data for the graph component.
Utilizing the provided UI design, the React frontend seamlessly communicates with the backend, demonstrating effective data exchange. This integration is facilitated by essential backend dependencies such as cors for cross-origin resource sharing, express for web application development, and nodemon for automatic server restarts during development.

Frontend Dependencies:

axios (^1.6.5): Simplifies asynchronous HTTP requests for fetching data from APIs.
chart.js (^2.9.4): A versatile JavaScript charting library for creating visually appealing charts.
react-chartjs-2 (^5.2.0): A React wrapper for Chart.js, facilitating the integration of charting functionality into React components.
recharts (^2.10.4): A powerful React chart library built with D3, providing customizable and interactive chart components.
