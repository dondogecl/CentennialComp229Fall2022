const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/services', function(req, res, next) {
  res.render('services.ejs', { title: 'Services' });
});

module.exports = router;
