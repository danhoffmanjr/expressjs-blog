let express = require('express'),
router = express.Router(),
repo = require("../models/postRepo");

router.get('/:permalink', (req,res,next) => {
    let post = repo.getPostByPermalink(req.params.permalink);
    let index = repo.getPostIndex(req.params.permalink);
    repo.deletePost(index);
    res.redirect('/');
    });

module.exports = router;