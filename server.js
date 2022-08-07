const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const dotenv = require('dotenv');
const connectToDB = require('./config/db')

// Body Parser
app.use(express.json());

// Load dotenv variables into server.js
dotenv.config({path: './config/config.env'});

// Establish connection to Database
connectToDB();

// Routes
const fragrances = require('./routes/fragrances');

// Mount Routes
app.use('/api/v1/fragrances', fragrances);

// Establish connection to port
app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
})