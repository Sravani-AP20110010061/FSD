
const timedisplay=document.getElementById("timedisplay")
const start =document.getElementById("start").onclick=function()
{
    if(paused)
    {
        paused=false;
        starttime=Date.now()-elapsedtime;
        intervalId=setInterval(updateTime,75)
    }

}
const stop =document.getElementById("stop").onclick=function()
{
    if(!paused)
    {
        paused=true
        elapsedtime=Date.now()-starttime
        clearInterval(intervalId)
    }

}
const reset =document.getElementById("reset").onclick=function()
{
    paused=true;
    clearInterval(intervalId)
    starttime=0
    elapsedtime=0
    currtime=0
    hrs=0
    mins=0;
    secs=0
    timedisplay.textContent="00:00:00"

}

let starttime=0
let elapsedtime=0
let currtime=0
let paused=true;
let intervalId;
let hrs=0
let mins=0; secs=0

function updateTime()
{
    elapsedtime= Date.now()-starttime;
    secs=Math.floor((elapsedtime/1000) % 60)
    mins=Math.floor((elapsedtime/(1000*60)) % 60)
    hrs=Math.floor((elapsedtime/(1000*60*60)) % 60)
    secs=pad(secs)
    mins=pad(mins)
    hrs=pad(hrs)
    timedisplay.textContent=`${hrs}:${mins}:${secs}`;
    function pad(unit)
    {
        return (("0")+unit).length>2 ? unit : "0"+unit;
    }
}
