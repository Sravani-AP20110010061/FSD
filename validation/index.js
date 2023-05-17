document.getElementById("submit").onclick=function()
{
    let name=document.getElementById("name").value;
    let pass=document.getElementById("pass").value;
    if(pass!="" && name!="")
    {
        document.getElementById("res").innerHTML="You are registered";
    }
    else
    {
        document.getElementById("res").innerHTML="You are not registered";
    }
    
}