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
router.get('/contact', function(req, res, next) {
  res.render('contact.ejs', { title: 'Contact' });
});

module.exports = router;
