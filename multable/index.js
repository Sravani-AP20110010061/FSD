
document.getElementById("find").onclick=function()
{
    let number=Number(document.getElementById("num").value);
    let limit=Number(document.getElementById("limit").value);

    var out = "";
        for (var i = 1; i < limit; i++) {
            out = out + i + " * " + number + " = " + i * number + "<br/>";
        }
        document.getElementById("res").innerHTML = out;
}
