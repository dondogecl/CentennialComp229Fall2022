/**
 * @author: I. Alejandro Acevedo
 * @studentID: 301222234
 * @course: COMP229-F2022
 * @description: A portfolio website project
 * @filename: routers/admin/login.js
 * @utility: router for login
 */

 const express = require('express');
 const router = express.Router();
 
 /* GET home page. */
 router.get('/admin/login', function(req, res, next) {
   res.render('admin/login.ejs', { title: 'Login' });
 });
 
 module.exports = router;
 