const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/contact', function(req, res, next) {
  res.render('contact.ejs', { title: 'Contact' });
});

module.exports = router;
