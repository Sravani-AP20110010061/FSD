document.getElementById("register").onclick=function()
{
    const inputText = document.getElementById('email');
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat))
    {
        document.getElementById("res").innerHTML = "Your email is valid";
    }
    else{
        document.getElementById("res").innerHTML = "email is invalid";
    }
}
