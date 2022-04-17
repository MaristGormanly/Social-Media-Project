console.log("[userController] initialized");

let User = require('../model/user');
let userService = require('../service/userService');

//create array for users
let users = [];

//calls on model to create user
let james = User.createUser("James", "Thompson", "jwt@gmail.com","jjjones","pass123");
let hamish = User.createUser("Hamish", "Swanson", "HSwan@yahoo.com","SwansHam","Iliketurtles");
let john = User.createUser("John", "Doe","JD@hotmail.com","DoetheDeer","NJ1234!");

//add a user to the array
users.push(james);
users.push(hamish);
users.push(john);

//gets the request for this call and then sends a response
exports.getAllUsers = (req,res) => {
    //setting the mime or media time of the package
    res.setHeader('Content-Type','application/json');
    res.send(users);
}

exports.getUser = (req,res) => {
    res.setHeader('Content-Type','application/json');
    res.send(users[req.params.index]);
}

exports.saveUser = (req,res) => {
    let newUser = User.createUser (req.body.firstName, req.body.lastName, req.body.email,req.body.userName,req.body.password);
    users.push(newUser);
    res.setHeader('Content-Type','application/json');
    res.send();
}

exports.deleteUser = (req,res) => {
    users.splice(req.params.index, 1);
    res.setHeader('Content-Type','application/json');
    res.send(users);
}

exports.updateUser = function(req,res) {
    //get existing user from array
    var updatedUser = users[req.params.index];

    //check to see what has been passed and update local copy
    console.log(req.body.firstName);
    if(req.body.firstName)
        updatedUser.firstName = req.body.firstName;
    if(req.body.lastName)
        updatedUser.lastName = req.body.lastName;
    if(req.body.email)
        updatedUser.email = req.body.email;
    if(req.body.userName)
        updatedUser.userName = req.body.userName;
    if(req.body.password)
        updatedUser.password = req.body.password;
    
    users[req.params.index] = updatedUser;

    res.setHeader('Content-Type','application/json');
    res.send(users[req.params.index]);
}