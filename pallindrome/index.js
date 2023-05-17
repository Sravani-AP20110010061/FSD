let num=window.prompt("Enter a number");
let flag=1;
let l=num.length;
for(let i=0;i<l;i++)
{
    if(num[i]!=num[l-i-1])
    {
        flag=0;
        break
    }
}
if(flag==0)
{
    document.getElementById("output").innerHTML="Not a Pallindrome";
}
else
{
    document.getElementById("output").innerHTML="Pallindrome";
}