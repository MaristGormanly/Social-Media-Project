//JS for the Login Page
window.addEventListener("load",() =>{
    //Verify the input of the username and password fields
    //If no input: error, if good input: confirmation msg
    const loginBtn = document.getElementById('loginBut');
    loginBtn.addEventListener("click",() => {
        document.getElementById("resetPass").style.display = "inline-block";
        if(document.getElementById('user').value === ''|| document.getElementById('password').value === ''){
            alert("Please fill all fields before proceeding");
            return false;
        }
        else{
            alert("This works as intended!");
        }
    })
})