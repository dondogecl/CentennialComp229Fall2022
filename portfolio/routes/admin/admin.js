/**
 * @author: I. Alejandro Acevedo
 * @studentID: 301222234
 * @course: COMP229-F2022
 * @description: A portfolio website project
 * @filename: routers/contact.js
 * @utility: router for contact
 */

 const express = require('express');
 const router = express.Router();
 
 /* GET home page. */
 router.get('/', function(req, res, next) {
   console.log("/");
   res.redirect('/admin/login');
 });

 router.get('/login', (req, res, next)=>{
    console.log("login");
    res.render('admin/login.ejs', { title: 'Login' });
 });

 router.get('/admin', (req, res, next)=>{
    console.log("admin");
    res.render('admin/admin.ejs', { title: 'Login' });
 });

 
 module.exports = router;
 