const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const dotenv = require('dotenv');
const connectToDB = require('./config/db');
const path = require('path');
const cors = require('cors');

app.use(cors());
app.use(express.urlencoded({ extended: true }))

// Body Parser
app.use(express.json());

// Load dotenv variables into server.js
dotenv.config({path: './config/config.env'});

// Establish connection to Database
connectToDB();

// Routes
const fragrances = require('./routes/fragrances');

// Set static folder and view engine
app.use(express.static('public'));
app.set('view engine', 'ejs');

// EJS render
app.get('/', (req, res) => {
    res.render('index.ejs');
});

// Mount Routes
app.use('/api/v1/fragrances', fragrances);

// Establish connection to port
app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
})