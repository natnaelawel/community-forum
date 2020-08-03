const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require('dotenv');
const passport = require('passport');

const { notFound, errorHandler, checkAuthHeaderSetUser, checkAuthHeaderSetUserUnAuthorized} = require('./middlewares');

dotenv.config();

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.initialize());
app.use(passport.session());

const auth = require('./auth');

// our routes goes here

app.use(checkAuthHeaderSetUser);

app.use('/auth', auth);
app.get('/',checkAuthHeaderSetUserUnAuthorized, (req, res) =>{
    res.json({
        message: 'welcome to community api 🌈 💚',
    });
});


app.use(notFound);
app.use(errorHandler);

module.exports = app;
