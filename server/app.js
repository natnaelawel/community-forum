var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


const { notFound, errorHandler} = require('./middlewares');



var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// our routes goes here

app.get('/', (req, res) =>{
    res.json({
        message: 'welcome to community api 🌈 💚',
    });
});


app.use(notFound);
app.use(errorHandler);

module.exports = app;
