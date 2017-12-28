let express = require('express'),
router = express.Router(),
repo = require("../models/postRepo");

// GET sends the user the new post page with the form to enter the post
router.get("/", (req,res,next) => {
    res.render('newpost', { title: 'New Post' });
});

// POST receives the data from the user about the new post
router.post("/", (req,res,next) => {
    let newPost = {};
    let index = repo.postCount();
    newPost.id = index++;
    newPost.title = req.body.title;
    newPost.permalink = req.body.permalink;
    newPost.postContent = req.body.postContent;
    newPost.author = req.body.author;

    repo.addPost(newPost);

    res.redirect("/");
});

module.exports = router;