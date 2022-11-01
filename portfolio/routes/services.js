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
router.get('/services', function(req, res, next) {
  res.render('services.ejs', { title: 'Services' });
});

module.exports = router;
