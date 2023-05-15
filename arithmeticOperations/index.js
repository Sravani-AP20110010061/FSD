document.getElementById("add").onclick=function()
{
    let num1=document.querySelector("#num1").value;
    let num2=document.querySelector("#num2").value;
    num1=Number(num1);
    num2=Number(num2);
    document.getElementById("res").innerHTML=Number(num1)+Number(num2);
    console.log(num1+num2);
};

document.getElementById("sub").onclick=function()
{
    let num1=document.querySelector("#num1").value;
    let num2=document.querySelector("#num2").value;
    num1=Number(num1);
    num2=Number(num2);
    document.getElementById("res").innerHTML=num1-num2;
};

document.getElementById("mul").onclick=function()
{
    let num1=document.querySelector("#num1").value;
    let num2=document.querySelector("#num2").value;
    num1=Number(num1);
    num2=Number(num2);
    document.getElementById("res").innerHTML=num1*num2;
};

document.getElementById("div").onclick=function()
{
    let num1=document.querySelector("#num1").value;
    let num2=document.querySelector("#num2").value;
    num1=Number(num1);
    num2=Number(num2);
    document.getElementById("res").innerHTML=num1/num2;
};

document.getElementById("mod").onclick=function()
{
    let num1=document.querySelector("#num1").value;
    let num2=document.querySelector("#num2").value;
    num1=Number(num1);
    num2=Number(num2);
    document.getElementById("res").innerHTML=num1%num2;
};
