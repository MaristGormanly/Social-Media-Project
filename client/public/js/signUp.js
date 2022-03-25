//JS for the Sign Up Page
window.addEventListener("load",() =>{
    //Checks sign up fields and sends displays a warning 
    document.getElementById('signUpBtn').addEventListener("click",() => {
        if(document.getElementById("firstName").value === '' || document.getElementById("lastName").value === '' || document.getElementById("email").value === '' || document.getElementById("password").value === ''){
            document.getElementById("warning").style.display = "inline-block";
            return false;
        }
        else{
            alert("This works as intended!");
        }
    })
    //Shows the password for users
    let pass = document.getElementById("password")
    document.getElementById('showPassword').addEventListener("click",() =>{
        if(pass.type === "password"){
            pass.type = "text";
        }
        else{
            pass.type === "password";
        }
    })
})