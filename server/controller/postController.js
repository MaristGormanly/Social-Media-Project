console.log("[postController] initialized");

let Post = require('../model/post');
let postService = require('../service/postService');


//create array for posts
let posts = [];

//calls on model to create a post
let post1 = Post.createPost("Check out my new diet!","Morning: Eggs, Protien Shake; Afternoon: Salad, Fruit, Grilled Chicken; Night: Steak and Rice");
let post2 = Post.createPost("My Arms Day","3 sets of bicep curls, 3 sets of tricep dips and 3 sets of delt raises");

//add a post to the array
//posts.push(post1);
//posts.push(post2);

postService.savePost(post1);
console.log("First Post saved");
postService.savePost(post2);
console.log("Second post saved");

//gets the request for this call and then sends a response
exports.getAllPosts = async (req,res) => {
    //setting the mime or media time of the package
    console.log("Posts recieved");
    res.setHeader('Content-Type','application/json');
    let posts = await postService.getAllPosts();
    console.log(" 2: " + posts);
    //res.send(JSON.stringify(posts));
    res.send(posts);
}

exports.getPost = async (req,res) => {
    res.setHeader('Content-Type','application/json');
    res.send(posts[req.params.index]);
}

exports.savePost = async (req,res) => {
    console.log("Savepost called");
    res.setHeader('Content-Type','application/json')
    let newPost = Post.createPost(req.body.title, req.body.postBody);
    //posts.push(newPost);
    await postService.savePost(newPost);;
    res.send(posts);
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


//create array for posts
/*let posts = [];

//calls on model to create a post
let post1 = Post.createPost("Check out my new diet!","Morning: Eggs, Protien Shake; Afternoon: Salad, Fruit, Grilled Chicken; Night: Steak and Rice");
let post2 = Post.createPost("My Arms Day","3 sets of bicep curls, 3 sets of tricep dips and 3 sets of delt raises");

//add a post to the array
posts.push(post1);
posts.push(post2);

//postService.savePost(post1);
console.log("First Post saved");
//postService.savePost(post2);
console.log("Second post saved");

//gets the request for this call and then sends a response
exports.getAllPosts = (req,res) => {
    //setting the mime or media time of the package
    console.log("Posts recieved");
    res.setHeader('Content-Type','application/json');
    //let posts = await postService.getAllPosts();
    console.log(" 3: " + posts);
    //res.send(JSON.stringify(posts));
    res.send(posts);
}

exports.getPost =  (req,res) => {
    res.setHeader('Content-Type','application/json');
    res.send(posts[req.params.index]);
}

exports.savePost =  (req,res) => {
    console.log("Savepost called");
    let newPost = Post.createPost(req.body.title, req.body.postBody);
    posts.push(newPost);
    //await postService.savePost(newPost);
    res.setHeader('Content-Type','application/json');
    res.send(posts);
}

exports.deletePost = (req,res) => {
    posts.splice(req.params.index, 1);
    res.setHeader('Content-Type','application/json');
    res.send(posts);
}*/
