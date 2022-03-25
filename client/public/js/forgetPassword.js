//JS for the Forget Password page
window.addEventListener("load",() =>{
    //Checks email box and sends displays a warning 
    document.getElementById('forPasBtn').addEventListener("click",() => {
        if(document.getElementById("passReset").value === ''){
            document.getElementById("warning").style.display = "inline-block";
            return false;
        }
        else{
            alert("This works as intended!");
        }
    })
})