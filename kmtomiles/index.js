document.getElementById("convert").onclick=function()
{
    let km=Number(document.getElementById("km").value);
    let miles=km*0.609344;
    document.getElementById("res").innerHTML=miles;
}