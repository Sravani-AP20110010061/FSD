let num1=Number(window.prompt("Enter the first number"));
let num2=Number(window.prompt("Enter the second number"));
let op=window.prompt("Enter the operator");

if(op=='+')
{
    document.getElementById("res").innerHTML=num1+num2;
}
else if(op=='-')
{
    document.getElementById("res").innerHTML=num1-num2;
}
else if(op=='*')
{
    document.getElementById("res").innerHTML=num1*num2;
}
else if(op=='/')
{
    document.getElementById("res").innerHTML=num1/num2;
}
else if(op=='%')
{
    document.getElementById("res").innerHTML=num1%num2;
}
else
{
    document.getElementById("res").innerHTML="Enter a valid operator";
}
