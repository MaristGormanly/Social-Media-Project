console.log("[post] initilized");
//User Prototype
class Post{
    constructor(caption, likes, postBody){
        this.caption = caption;
        this.likes = likes;
        this.postBody = postBody;
    }
}

//call to create and return a new user
exports.createPost = function(caption, likes, postBody){
    return new Post(caption, likes, postBody);
}
