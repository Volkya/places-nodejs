const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');

// import database
require('./database');

// settings
app.set('port', process.env.PORT || 3700);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // or
app.engine('html', require('ejs').renderFile);

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false})); // entiende los metodos del form

// import and set router
const indexRoutes = require('./routes/places');
app.use('/', indexRoutes);

// starting server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
