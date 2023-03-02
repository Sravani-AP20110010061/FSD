const num=Math.floor(Math.random() * 10 + 1);
document.getElementById("submit").onclick=function()
{
    let a=document.getElementById("number").value;
    if(num==a)
    {
    document.getElementById("output").innerHTML="Your Guess is coreect!!!";
    }
    else
    {
        if(num>a)
        {
            document.getElementById("output").innerHTML="Try Again with a bigger value";
        }
        if(num<a)
        {
            document.getElementById("output").innerHTML="Try Again with a smaller value";
        }
        
    }
}

