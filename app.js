function validate() {
    var emailArea = document.getElementById("text").value;
    var errorImg = document.getElementById("error");
    var errorText = document.getElementById("whenError");
    console.log(errorText)
    var pattern = (/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
    if (emailArea.match(pattern)) {
        errorText.innerHTML=" Registration success.";
        errorText.style.color="green"
        errorImg.classList.add("hidden");
        return true;

    }
    else {
        errorText.innerHTML="Please provide a vaild email.";
        errorText.style.color="hsl(0, 93%, 68%)"
        errorImg.classList.remove("hidden");
        return false;
    }
}