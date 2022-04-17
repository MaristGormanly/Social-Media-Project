console.log("[userRoutes] initialized");
let userController = require('../controller/userController');

//require express library
var express = require('express');
//create route handlers for a path by using app.route()
var router = express.Router();

router.route('/')
    .get( (req,res) =>{
        userController.getAllUsers(req,res);
    }) 
    .post( (req,res) =>{
        userController.saveUser(req,res);
    })

router.route('/:index')
    .get( (req,res) =>{
        userController.getUser(req,res);
    }) 
    .delete( (req,res) =>{
        userController.deleteUser(req,res);
    })
    .patch( (req,res) =>{
        userController.updateUser(req,res);
    })

//adds routes we create within this file
module.exports = router;