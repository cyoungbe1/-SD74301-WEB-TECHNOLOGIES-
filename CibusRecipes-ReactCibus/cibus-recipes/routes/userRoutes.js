// JavaScript source code
const express = require('express');
const router = express.Router();
const mysql = require('mysql2'); // Import the mysql2 library

// Create a MySQL database connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'your_username', // Replace with your MySQL username
    password: 'your_password', // Replace with your MySQL password
    database: 'cibus',
    // You can add additional connection options here if needed
});

// Define API routes related to users
router.get('/', (req, res) => {
    // Handle GET request for fetching users
    connection.query('SELECT * FROM users', (err, results) => {
        if (err) {
            console.error('Error fetching users:', err);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.json(results);
        }
    });
});

// Add more routes for creating, updating, and deleting users as needed

module.exports = router;
