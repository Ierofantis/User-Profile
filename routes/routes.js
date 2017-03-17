module.exports = (() => {
    'use strict';

    const router = require('express').Router();
     
    router.get('/', (req, res) => {
       res.render("registration.ejs"); 
    });

    router.post('/login', (req, res) => {

       const name = req.body.name;
       const password = req.body.password;

       if ( name === 'John' && password === '1234')
       res.redirect('/profile');
       else        	
         res.redirect('/');
    });   

    router.get('/profile', (req, res) => {
       res.render("profile.ejs"); 
    });

    router.get('/address', (req, res) => {
       res.render("address.ejs"); 
    });

    return router;
})();