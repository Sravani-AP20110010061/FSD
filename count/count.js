let a=0;
document.getElementById("value").innerHTML=a;

document.getElementById("increase").onclick=function()
{
    a=a+1;
    document.getElementById("value").innerHTML=a;
}

document.getElementById("decrease").onclick=function()
{
    a=a-1;
    document.getElementById("value").innerHTML=a;
}

document.getElementById("reset").onclick=function()
{
    a=0;
    document.getElementById("value").innerHTML=a;
}


