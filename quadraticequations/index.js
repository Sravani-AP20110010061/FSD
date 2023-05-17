document.getElementById("find").onclick=function()
{
    let a=document.getElementById("a").value;
    let b=document.getElementById("b").value;
    let c=document.getElementById("c").value;
    let det;
    det=(b**2)-4*a*c;
    if(det>=0)
    {
        let root1=((-b)+det)/(2*a);
        let root2=((-b)-det)/(2*a);
        document.getElementById("root1").innerHTML="Root1: "+root1;    
        document.getElementById("root2").innerHTML="Root1: "+root2;  
    }
    else
    {
        document.getElementById("noroots").innerHTML="No roots";
    }
}