console.log("[postController] initialized");

let Post = require('../model/post');
let postService = require('../service/postService');

//create array for posts
let posts = [];

//calls on model to create a post
let post1 = Post.createPost("Check out my new diet!",0,"Morning: Eggs, Protien Shake; Afternoon: Salad, Fruit, Grilled Chicken; Night: Steak and Rice");
let post2 = Post.createPost("My Arms Day",0,"3 sets of bicep curls, 3 sets of tricep dips and 3 sets of delt raises");

//add a post to the array
posts.push(post1);
posts.push(post2);

//gets the request for this call and then sends a response
exports.getAllPosts = (req,res) => {
    //setting the mime or media time of the package
    res.setHeader('Content-Type','application/json');
    res.send(posts);
}

exports.getPost = (req,res) => {
    res.setHeader('Content-Type','application/json');
    res.send(posts[req.params.index]);
}

exports.savePost = (req,res) => {
    let newPost = Post.createUser (req.body.firstName, req.body.lastName, req.body.email,req.body.userName,req.body.password);
    posts.push(newPost);
    res.setHeader('Content-Type','application/json');
    res.send();
}

exports.deletePost = (req,res) => {
    posts.splice(req.params.index, 1);
    res.setHeader('Content-Type','application/json');
    res.send(posts);
}

exports.updatePost = function(req,res) {
    //get existing post from array
    var updatedPost = posts[req.params.index];

    //check to see what has been passed and update local copy
    console.log(req.body.firstName);
    if(req.body.firstName)
        updatedPost.firstName = req.body.firstName;
    if(req.body.lastName)
        updatedPost.lastName = req.body.lastName;
    if(req.body.email)
        updatedPost.email = req.body.email;
    if(req.body.userName)
        updatedPost.userName = req.body.userName;
    if(req.body.password)
        updatedPost.password = req.body.password;
    
    posts[req.params.index] = updatedPost;

    res.setHeader('Content-Type','application/json');
    res.send(posts[req.params.index]);
}