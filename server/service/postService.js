console.log("[postService] initialized")

let Post = require('../model/post');

const {Pool, Client} = require ( 'pg' );

const pool = new Pool({
    user: 's22',
    host: 'localhost',
    database: 's22',
    password: 's22',
    port: 5432,
});

//pool.query('SELECT NOW()', (err,res) =>{
//   console.log(err,res);
//   pool.end();
//})

exports.getAllPosts = async function () {
    let sqlText = "SELECT * FROM posts;";
    let res = await pool.query(sqlText);
    let posts = [];
    for(let i = 0; i<res.rows.length;i++){
        posts.push(Post.createPost(res.rows[i].title,res.rows[i].postbody));
    }
    console.log("posts");
    return posts;
}

exports.savePost = async (posts) =>{
    let sqlText = "INSERT INTO posts (title, postbody) VALUES ('" + posts.title + "', '" + posts.postBody + "');";
    console.log(sqlText);
    let res = await pool.query( sqlText );
    return true;
}

exports.getPostById = async (postId) => {
    let sqlText = "SELECT * FROM posts WHERE id = " + postId + ";";

    let res = await pool.query(sqlText);
    if(res.rowCount > 0){
        return new Post.createPost(res.title, res.postBody);
    }
}