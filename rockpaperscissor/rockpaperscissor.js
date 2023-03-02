let player_score=0;
let computer_score=0;
document.getElementById("rock").onclick=function()
{
    let c=Math.round(Math.random()*3)+1;
    if(c==1)
    {
        let computer="Rock";
        alert("Tie");
        document.getElementById("computer").innerHTML=computer;
        document.getElementById("player").innerHTML="Rock";
        document.getElementById("winner").innerHTML="Tie";
        document.getElementById("pscore").innerHTML=player_score;
        document.getElementById("cscore").innerHTML=computer_score;
    }
    if(c==2)
    {
        let computer="paper";
        alert("You Win");
        document.getElementById("computer").innerHTML=computer;
        document.getElementById("player").innerHTML="Rock";
        document.getElementById("winner").innerHTML="You Win";
        player_score+=1;
        document.getElementById("pscore").innerHTML=player_score;
        document.getElementById("cscore").innerHTML=computer_score;
    }
    if(c==3)
    {
        let computer="scissor";
        alert("You lose");
        document.getElementById("computer").innerHTML=computer;
        document.getElementById("player").innerHTML="Rock";
        document.getElementById("winner").innerHTML="You lose";
        computer_score+=1;
        document.getElementById("pscore").innerHTML=player_score;
        document.getElementById("cscore").innerHTML=computer_score;
    }
}
document.getElementById("paper").onclick=function()
{
    let c=Math.round(Math.random()*3)+1;
    if(c==1)
    {
        let computer="paper";
        alert("Tie");
        document.getElementById("computer").innerHTML=computer;
        document.getElementById("player").innerHTML="Paper";
        document.getElementById("winner").innerHTML="Tie";
        document.getElementById("pscore").innerHTML=player_score;
        document.getElementById("cscore").innerHTML=computer_score;
    }
    if(c==2)
    {
        let computer="rock";
        alert("You Win");
        document.getElementById("computer").innerHTML=computer;
        document.getElementById("player").innerHTML="Paper";
        document.getElementById("winner").innerHTML="You Win";
        player_score+=1;
        document.getElementById("pscore").innerHTML=player_score;
        document.getElementById("cscore").innerHTML=computer_score;
    }
    if(c==3)
    {
        let computer="scissor";
        alert("You lose");
        document.getElementById("computer").innerHTML=computer;
        document.getElementById("player").innerHTML="Paper";
        document.getElementById("winner").innerHTML="You lose";
        computer_score+=1;
        document.getElementById("pscore").innerHTML=player_score;
        document.getElementById("cscore").innerHTML=computer_score;
    }
}
document.getElementById("scissor").onclick=function()
{
    let c=Math.round(Math.random()*3)+1;
    if(c==1)
    {
        let computer="scissor";
        alert("Tie");
        document.getElementById("computer").innerHTML=computer;
        document.getElementById("player").innerHTML="Scissor";
        document.getElementById("winner").innerHTML="Tie";
        document.getElementById("pscore").innerHTML=player_score;
        document.getElementById("cscore").innerHTML=computer_score;
    }
    if(c==2)
    {
        let computer="paper";
        alert("You Win");
        document.getElementById("computer").innerHTML=computer;
        document.getElementById("player").innerHTML="Scissor";
        document.getElementById("winner").innerHTML="You Win";
        player_score+=1;
        document.getElementById("pscore").innerHTML=player_score;
        document.getElementById("cscore").innerHTML=computer_score;
    }
    if(c==3)
    {
        alert("You lose");
        let computer="rock";
        document.getElementById("computer").innerHTML=computer;
        document.getElementById("player").innerHTML="Scissor";
        document.getElementById("winner").innerHTML="You Lose";
        computer_score+=1;
        document.getElementById("pscore").innerHTML=player_score;
        document.getElementById("cscore").innerHTML=computer_score;
    }
}