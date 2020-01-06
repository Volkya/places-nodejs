const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');
// import database
require('./database');
// import routes
const indexRoutes = require('./routes/places');

// settings
app.set('port', process.env.PORT || 3600);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // or
app.engine('html', require('ejs').renderFile);

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

// set router
app.use('/', indexRoutes);

// starting server
app.listen(app.get('port'), () =>{
    console.log(`Server on port ${app.get('port')}`);
});
