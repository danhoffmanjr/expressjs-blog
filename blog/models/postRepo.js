const fs = require('fs'),
    path = require('path'),
    filePath = path.join(__dirname, "data"),
    fileName = path.join(filePath, "posts.json");

let posts = [
    {
        title : "Express Js",
        author : "Dan Hoffman",
        permalink : "express-js",
        postContent : "<p>Lorum Ispum text...</p>"
    },
    {
        title : "POSTCSS",
        author : "Mike Williams",
        permalink : "POSTcss",
        postContent : "<p>Lorum Ispum text...</p>"
    }
];

let loadPosts = () => {
    fs.readFile(fileName, "utf8", (err, data) => {
        if (err) {
            console.error("Error loading data file: " + err.message);
            throw err;
        } else {
            let newPostsArr = JSON.parse(data);
            if (newPostsArr.length > 0) {
                posts = newPostsArr;
            }
        }
    });
};

let savePosts = () => {
    fs.writeFile(fileName, JSON.stringify(posts), (err) => {
        if (err) {
            console.error("Error writing the file." + err.message);
            throw err;
        }
        console.log("The file has been saved.");
    });
};

loadPosts();

let repo = {
    dataSource : "Filesystem",
    postCount: () => {
        return posts.length;
    },
    getPosts: () => {
        return posts;
    },
    getPostByPermalink: (permalink) => {
        return posts.find((post) => {
            return post.permalink === permalink;
        });
    },
    getPostIndex: (permalink) => {
        return posts.findIndex((post) => {
            return post.permalink === permalink;
        });
    },
    addPost: (newPost) => {
        posts.push(newPost);
        savePosts();
    },
    deletePost: (index) => {
        posts.splice(index, 1);
        savePosts();
    }
};

module.exports = repo;

