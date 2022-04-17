console.log("[user] initilized");
//User Prototype
class User{
    constructor(firstName, lastName, email, userName, password){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.userName = userName;
        this.password = password;
    }
}

//call to create and return a new user
exports.createUser = function(firstName, lastName, email, userName, password){
    return new User(firstName, lastName, email, userName, password);
}
