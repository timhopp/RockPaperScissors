let game = {
  playerChoice: 'rock',
  computerChoice: 'rock',
}


function play(playersChosen) {
  computerRandom()
  if(playersChosen == 'rock'){
    game.playerChoice = 'rock';
  } else if (playersChosen == 'paper'){
    game.playerChoice = 'paper'
  } else if (playersChosen == 'scissors'){
    game.playerChoice = 'scissors';
  }
  game.computerChoice = `${game.computerChoice}`;
  playLogic();
}


function computerRandom() {
  let computerhasChose = Math.floor(Math.random() * 4)
  if (computerhasChose == 3){
    game.computerChoice = "paper";
  } else if ( computerhasChose == 2){
    game.computerChoice = "scissors";
  } else if (computerhasChose == 1){
    game.computerChoice = "rock";
   }
}

//*Add the ability for the player and computer choice to change within play 


function playLogic(){
let winnerElem = document.getElementById("winner");
let playerPick = game.playerChoice;
let compPick = game.computerChoice;


  if(playerPick == "rock" && compPick == "scissors" || playerPick == "paper" && compPick == "rock" || playerPick == "scissors" && compPick == "paper"){
     winnerElem.innerText= "Player has won!";

  } else if(playerPick == "scissors" && compPick== "rock" || playerPick == "rock" && compPick == "paper" || playerPick == "paper" && compPick == "scissors"){ 
    winnerElem.innerText= "Computer has won!";

  } else if (playerPick == "paper" && compPick == "paper" || playerPick == "rock" && compPick == "rock" || playerPick == "scissors" && compPick == "scissors"){
    winnerElem.innerText= "Tie!";} 
  draw();
}



function draw(){
let userImg = document.getElementById("user-img");
let compImg = document.getElementById("computer-img")


if(game.playerChoice == 'rock'){
  userImg.src = "icons8-rock-80.png"
} else if (game.playerChoice == 'scissors'){
  userImg.src = "icons8-barber-scissors-80.png"
} else if (game.playerChoice == 'paper'){
  userImg.src = "icons8-paper-plane-64.png";
}

if(game.computerChoice == 'rock'){
  compImg.src = "icons8-rock-80.png"
} else if (game.computerChoice =='scissors'){
  compImg.src= "icons8-barber-scissors-80.png";
} else if (game.computerChoice =='paper'){
  compImg.src = "icons8-paper-plane-64.png";
}
}