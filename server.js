const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const dotenv = require('dotenv');
const connectToDB = require('./config/db');
const path = require('path');
const cors = require('cors');
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const { mongo } = require('mongoose');

// Body Parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

// Load dotenv variables into server.js
dotenv.config({path: './config/config.env'});

// Passport config
require('./config/passport')(passport)

// Establish connection to Database
connectToDB();

// Logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// Handlebars
app.engine('.hbs', exphbs.engine({defaultLayout: 'main', extname: '.hbs'}));

// Sessions
app.use(session({
    secret: 'keyboard dog',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({mongoUrl: process.env.MONGO_URI,})
}));

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Set static folder and view engine
app.use(express.static('public'));
app.set('view engine', '.hbs');

// Routes
const fragrances = require('./routes/fragrances');

// Mount Routes
app.use('/api/v1/fragrances', fragrances);
app.use('/auth', require('./routes/auth'));

// Establish connection to port
app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
})