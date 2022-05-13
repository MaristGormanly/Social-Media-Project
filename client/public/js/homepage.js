//const { getAllPosts } = require("../../../server/service/postService");

//const { post } = require("../../../server/route/postRoutes");

//JS for Homepage
window.addEventListener("load",() =>{
    console.log("1: Feed loaded");
    getFeed();
})


function getFeed(){
    fetch('/api/post').then(function(response){
       
        response.json().then(function(data) {  
            
            var userHtml ="";
            userHtml += "<h1>Active Feed</h1>";
            for(i in data) {
                console.log(data);
                userHtml += "<h3>" + data[i].title + "</h3>"; 
                userHtml += "<h4>" + data[i].postBody  + "</h4>";
                //userHtml += "<img src = /img/calithenical.jpg>" + data[i].image + "</img>";
            }  
            document.getElementById('feed').innerHTML = userHtml;
            console.log("2: All posts retrieved");
        })
    })
}
/*function getFeed() {
    let title = document.getElementById('titleInput').value;
    let postBody = document.getElementById('postBodyInput').value; 
    // get the users feed
    fetch( '/api/post' ).then( ( res ) => {
        if( res.status >= 400 ) {
            console.log( "there was a problem with the asynch feed call" );
            return;
        }

        res.json().then( ( posts ) => {
            console.log( posts );
            let feedHtml = "<div class='myClass' id='feedContainer'>";
            posts.forEach( post => {
                console.log( post );
                feedHtml += "<hr>";
                feedHtml += "<h4>" + post.title + "</h4>";
                feedHtml += "<p>" + post.postBody + "</p>";
                feedHtml += "<hr />";
            });

            feedHtml += "</div>";

            document.getElementById( 'feed' ).innerHTML = feedHtml;
        })
    })
}*/

function addPost(){
    let title = document.getElementById('titleInput').value;
    let postBody = document.getElementById('postBodyInput').value; 
    fetch('/api/post', {
        method:'post',
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
        body: '{"title": "' + title + '", "postBody": "' + postBody + '"}'
    }).then(function(response) {
        if (response.status !== 200) {
            console.log('problem with ajax call! ' + response.status + " msg: " + response.value);
        }
        getFeed();
        return;
        console.log("title" + title + "saved!");
    });
    console.log("4: Post added");
}

var el = document.getElementById('postSubmit');
el.addEventListener('click', () =>{
    console.log("Click works");
    addPost();

})
