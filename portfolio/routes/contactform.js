/**
 * @author: I. Alejandro Acevedo
 * @studentID: 301222234
 * @course: COMP229-F2022
 * @description: A portfolio website project
 * @filename: routers/services.js
 * @utility: router for services
 */

 const express = require('express');
 const router = express.Router();
 
 /* GET home page. */
 router.post('/services', function(req, res, next) {
   console.log("post request contact form");
   res.send("post request contact form");
   res.redirect('/services');
 });
 
 module.exports = router;
 