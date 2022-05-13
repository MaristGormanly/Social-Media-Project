console.log("[post] initilized");
//User Prototype
class Post{
    constructor(title, postBody){
        this.title = title;
        this.postBody = postBody;
        //this.image = image;
    }
}

//call to create and return a new user
exports.createPost = function(title, postBody){
    console.log("POST API CALLED");
    return new Post(title, postBody);
}
