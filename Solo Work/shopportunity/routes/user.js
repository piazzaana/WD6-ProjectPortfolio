const express = require('express');
const router = express.Router();
const csrf = require('csurf');
const passport = require('passport');

let csrfProtection = csrf();
router.use(csrfProtection);

router.get('/profile', isLoggedIn, function (req, res, next) {
    res.render('profile');
});

router.get('/logout', isLoggedIn, function (req, res, next) {
    req.logout();
    res.redirect('/');
});

router.use('/', function (req, res, next) {
    next();
});

router.get('/signup', function (req, res, next) {
    let messages = req.flash('error');
    res.render('signup', {csrfToken:req.csrfToken(), messages:messages, hasErrors: messages.length > 0});
});

router.post('/signup', passport.authenticate('local.signup', {
    successRedirect: '/user/profile',
    failureRedirect: '/user/signup',
    failureFlash: true
}));

router.get('/signin',function (req, res, next) {
    let messages = req.flash('error');
    res.render('signin', {csrfToken:req.csrfToken(), messages:messages, hasErrors: messages.length > 0});
});

router.post('/signin', passport.authenticate('local.signin', {
     successRedirect: '/user/profile',
     failureRedirect: '/user/signin',
     failureFlash: true,
}));

module.exports = router;

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()){
        next();
    }
    res.redirect('/');
}

// function notLoggedIn(req, res, next) {
//     if(!req.isAuthenticated()){
//         next();
//     }
//     res.redirect('/');
// }