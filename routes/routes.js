module.exports = (() => {
    'use strict';
    const router = require('express').Router();

    router.get('/', function(req, res) {
       res.render("registration.ejs"); 
    });

    router.post('/login', function(req, res) {
       const name = req.body.name;
       const password = req.body.password;

       if ( name === 'John' && password === '1234')
       res.redirect('/profile')
       else res.redirect('/')
    });   

    router.get('/profile', function(req, res) {
       res.render("profile.ejs"); 
    });

    return router;
})();