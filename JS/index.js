var values = [1,0,1,0,1,0,0,1,0];
var flag = true;
var player1 ,player2; 
var player1Count =player2Count = 0;
document.querySelector(".container-fluid").addEventListener('click',function(e){
    index = e.target.id;
    if(values[index]==1 || values[index]==0 )
    {
        if(flag){
            e.target.innerText = "X";
            values[index] = 'X';
        }
        else{
            e.target.innerText = "O";
            values[index] = 'O';
        }
        flag = !flag ;
        getWinner();
    }
    
})


function getWinner()
{
    winnerIndexes = [
        [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
    ]

    for(let i=0;i<winnerIndexes.length;i++)
    {
        let [a,b,c]=winnerIndexes[i];
        if(values[a]==values[b] && values[b]==values[c])
        {
            getScore(a,b,c);
            break;
        }
    }
}



function getScore(x,y,z)
{

    if(flag)
    {
        console.log(" Winner is ",player2);
        document.querySelector("#score2").innerHTML ="<div><strong>"+player2+"is the winner!!</strong></div>";
        document.querySelector("#gameOver").innerHTML ="<strong>Winner is "+player2+"</strong>";
        player2Count++;

    }
    else if(!flag)
    {
        console.log(player1 , " Winner");
        document.querySelector("#score1").innerHTML ="<div><strong>"+player1+"</strong></div>";
        document.querySelector("#gameOver").innerHTML ="<strong>Winner is "+player1+"</strong>";
        player1Count++;
    }

    document.querySelector("#score1").innerHTML ="<strong>"+player1Count+"</strong>";
    document.querySelector("#score2").innerHTML ="<strong>"+player2Count+"</strong>";
    document.querySelector("#gameOver").style.display = 'inline-block';
    document.getElementById(x).style.color='red';
    document.getElementById(y).style.color='red';
    document.getElementById(z).style.color='red';
    values = [null,null,null,null,null,null,null,null,null];
}


//Start Game Function
document.querySelector('#start').addEventListener('click',function()
{
    player1 = document.querySelector("#user1").value;
    player2 = document.querySelector("#user2").value;

    if(player1 == "" || player2 == "")
    {
        alert("Please enter the Players Name");
    }
    else
    {
        document.querySelector(".gameDiv").style.visibility = 'visible';
        document.querySelector(".form").style.visibility = 'hidden';
        document.querySelector("body").style.backgroundImage= "url('https://static.vecteezy.com/system/resources/previews/006/327/095/original/dark-blue-gradient-colors-abstract-blurred-background-for-landing-page-free-vector.jpg')"
        document.querySelector("#name1").innerHTML ="<strong>"+player1+"</strong>";
        document.querySelector("#name2").innerHTML ="<strong>"+player2+"</strong>";
    }
})



document.querySelector("#reset").addEventListener('click' ,function()
{
    var divs = document.querySelectorAll(".div");//[div0, div1,div2]
    for(let i=0;i<divs.length;i++)
    {
        divs[i].innerHTML ="";
        divs[i].style.color ="aliceblue";
    }
    document.querySelector("#gameOver").style.display = 'none';
    values = [1,0,1,0,1,0,0,1,0];
    flag = true;
})

function restart(){
    confirm("Are you sure you want to restart this game!");
    location.reload()
}