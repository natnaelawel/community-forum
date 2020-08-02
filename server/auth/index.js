const express = require('express');
const passport = require('passport');
const router = express.Router();

require("../passport/google");

router.get('/google',passport.authenticate('google', {scope: ['profile', 'email']}));

router.get('/google/callback', 
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {        
        // req.logIn();
        res.redirect('/');
    });

module.exports = router;
