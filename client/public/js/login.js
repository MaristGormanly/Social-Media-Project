//JS for the Login Page
window.addEventListener("load",() =>{
    //Verify the input of the username and password fields
    //If no input: error, if good input: confirmation msg
    /*const loginBtn = document.getElementById('loginBut');
    loginBtn.addEventListener("click",() => {
        if(document.getElementById('user').value === ''|| document.getElementById('password').value === ''){
            document.getElementById("resetPass").style.display = "inline-block";
            return false;
        }
        else{
            fetch('/api/user').then(
                function(){
                    loadPromise();
                },
                function(){
                    console.log('Failure of api call!');
                });
        }
    })*/

    function getAllUsers(){
        console.log("This works");
        console.log("1");
        fetch('/api/user').then(function(response){

            response.json().then(function(data) {  
                var userHtml ="";
                userHtml += "<h2>Log In</h2>";
                for(i in data) {
                    userHtml += "<button id = fetch>" + "Name: " + data[i].firstName + " "+ data[i].lastName + "</br>" +" Username: " + data[i].userName + "</button>";
                    userHtml += "</br>";
                    console.log(userHtml);
                }  
                document.getElementById('login').innerHTML = userHtml;
            });
        });
    }
    getAllUsers();

    /*function updateDiv(){
        var loginHtml = "";
        loginHtml += "<h3> Hello this works </h3>";
        document.getElementById('loginConfirm').innerHTML = loginHtml;
    }
    //updateDiv();
    var greeting = document.getElementById("fetch");
    greeting.addEventListener('click', () =>{
        console.log("Click works");
        updateDiv();
    })*/
    let pass = document.getElementById("password");
    let showPass = document.getElementById("showPassword");
    showPass.addEventListener("click",() =>{
        const type = pass.getAttribute("type") === "password" ? "text" : "password";
        pass.setAttribute("type", type);
    })
})