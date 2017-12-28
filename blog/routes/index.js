var express = require('express');
var router = express.Router();
var repo = require('../models/postRepo');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title : 'Express JS Blog',
    postCount : repo.postCount(),
    post : repo.getPosts()
  });
});

module.exports = router;
