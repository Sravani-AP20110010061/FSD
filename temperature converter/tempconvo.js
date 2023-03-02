document.getElementById("button").onclick=function()
{
    let c=Number(document.getElementById("inputval").value);
    if(document.getElementById("inputc").checked)
    {
        if(document.getElementById("outputf").checked)
        {
            let ans=(c*1.8)+32;
            document.getElementById("ans").innerHTML=ans;
            alert(ans);
        }
        if(document.getElementById("outputk").checked)
        {
            let ans=c+273.15;
            document.getElementById("ans").innerHTML=ans;
            alert(ans);
        }

    }
    if(document.getElementById("inputf").checked)
    {
        if(document.getElementById("outputc").checked)
        {
            let ans=(5/9)*(c-32);
            document.getElementById("ans").innerHTML=ans;
            alert(ans);
        }
        if(document.getElementById("outputk").checked)
        {
            let ans=(5/9)*(c-32)+273.15;
            document.getElementById("ans").innerHTML=ans;
            alert(ans);
        }

    }
    if(document.getElementById("inputk").checked)
    {
        if(document.getElementById("outputc").checked)
        {
            let ans=c-273.15;
            document.getElementById("ans").innerHTML=ans;
            alert(ans);
        }
        if(document.getElementById("outputf").checked)
        {
            let ans=(c-273.15)*(9/5)+32;
            document.getElementById("ans").innerHTML=ans;
            alert(ans);
        }
    }
}