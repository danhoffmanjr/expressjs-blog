var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('booking', { title : 'Booking' });
});

module.exports = router;