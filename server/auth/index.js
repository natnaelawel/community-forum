const express = require('express');
const passport = require('passport');
const router = express.Router();

require("../passport/google");

const {create} = require('./utils');

router.get('/google',passport.authenticate('google', {scope: ['profile', 'email']}));

router.get('/google/callback', (req, res, next)=>{
    passport.authenticate('google', async (err, user) =>{
        if(err){
            console.log('error is ', err);
            res.redirect(`${process.env.CLIENT_ERROR_REDIRECT}${err.message}`);
            // return next(err);
        }
        //create JWT token with the user
        try {
            const token = await create(user);
            // res.json({token});
            res.redirect(`${process.env.CLIENT_REDIRECT}${token}`);
            
        } catch (error) {
            res.redirect(`${process.env.CLIENT_ERROR_REDIRECT}${error.message}`);
        }

        // if(!user){
        //     return res.redirect('/login');
        // }
        // req.logIn(user, err=>{
        //     if(err){
        //         return next(err);
        //     }
        //     return res.redirect('/users/'+ user.username);
        // });
    })(req, res, next);
});

// router.get('/google/callback', 
//     passport.authenticate('google', { failureRedirect: '/' }),
//     (err, req, res) => {    
//         if(err){
//             return next(err);
//         }
//         if(!req.user){
//             res.redirect('/login');
//         }    
//         req.logIn(user, err=>{
//             if(err){
//                 return next(err);
//             }else{
//                 return res.redirect()
//             }

//         })
//         // req.logIn();
//         res.redirect('/');
//     });

module.exports = router;
