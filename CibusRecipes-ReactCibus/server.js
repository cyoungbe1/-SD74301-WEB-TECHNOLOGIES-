
require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const mysql = require('mysql2'); // Use mysql2 library instead of mysql
const cors = require('cors');
const app = express();

// Add middleware for handling JSON data
app.use(express.json());

// Enable CORS to allow requests from your React frontend
app.use(cors());

// Create a MySQL database connection using the environment variables
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    // You can add additional connection options here if needed
});

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Connected to the database');
    }
});

// Import your route files
const recipeRoutes = require('./routes/recipeRoutes'); // Update with your actual route file paths
const ingredientRoutes = require('./routes/ingredientRoutes');
const userRoutes = require('./routes/userRoutes');

// Use the route files with their base URLs
app.use('/recipes', recipeRoutes);
app.use('/ingredients', ingredientRoutes);
app.use('/users', userRoutes);

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
