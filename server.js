const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const dotenv = require('dotenv');
const connectToDB = require('./config/db')

// Load dotenv variables into server.js
dotenv.config({path: './config/config.env'});

// Establish connection to Database
connectToDB();

// Establish connection to port
app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
})