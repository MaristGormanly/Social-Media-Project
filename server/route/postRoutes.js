console.log("[postRoutes] initialized");
let postController = require('../controller/postController');

//require express library
var express = require('express');
//create route handlers for a path by using app.route()
var router = express.Router();

router.route('/')
    .get( (req,res) =>{
        postController.getAllPosts(req,res);
    }) 
    .post( (req,res) =>{
        postController.savePost(req,res);
    })

router.route('/:index')
    .get( (req,res) =>{
        postController.getPost(req,res);
    }) 
    .delete( (req,res) =>{
        postController.deletePost(req,res);
    })
    .patch( (req,res) =>{
        postController.updatePost(req,res);
    })

//adds routes we create within this file
module.exports = router;