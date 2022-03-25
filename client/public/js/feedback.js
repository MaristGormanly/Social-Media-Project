//JS for the Feedback Page
window.addEventListener("load",() =>{
    //Checks feedback box and sends an alert that empty feedback cannot be submitted
    document.getElementById('feedbackBut').addEventListener("click",() => {
        if(document.getElementById("feedTXT").value === ''){
            alert("You cannot submit empty feedback!")
            return false;
        }
        else{
            alert("This works as intended!");
        }
    })
    //Checks feedback box and cuts it off if it hits a certain # of chars
    var feedback = document.getElementById("feedTXT")
    feedback.addEventListener("keyup",(e) => {
        e.preventDefault;
        var count = feedback.value.length;
        document.getElementById("charCount").value = count;
        var max = 800
        if (count > max){
          feedback.value = feedback.value.slice(0,max);
          document.getElementById("charCount").value = count - 1;
        }
        //Supposed to display msg, doesnt work, ask professor
        /*if (feedback.value == max){
            document.getElementById("hiddenWarning").style.display = "inline-block";
        }
        document.getElementById("hiddenWarning").style.display = "none";*/
    })
})


