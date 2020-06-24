let game = {
  playerChoice: 'rock',
  computerChoice: 'rock',
}

function play() {
  computerRandom()
  game.playerChoice = `${game.playerChoice}`;
  game.computerChoice = `${game.computerChoice}`;
  playLogic();
}

function rock() {
  game.playerChoice = "rock";
  play();
}

function scissors() {
  game.playerChoice = "scissors";
  play();
}

function paper() {
  game.playerChoice = "paper";
  play();
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
let userImg = document.getElementById("user-img");
let compImg = document.getElementById("computer-img");

  if(game.playerChoice == "rock" && game.computerChoice == "scissors"){
     winnerElem.innerText= "Player has won!";
     userImg.src = "icons8-rock-80.png";
     compImg.src = "icons8-barber-scissors-80.png";

  } else if(game.playerChoice == "paper" && game.computerChoice == "rock"){
    winnerElem.innerText= "Player has won!";
    userImg.src = "icons8-paper-plane-64.png";
    compImg.src = "icons8-rock-80.png";
    userImg.classList.add('winner-glow');
  } else if(game.playerChoice == "scissors" && game.computerChoice == "paper"){
    winnerElem.innerText= "Player has won!";
    userImg.src = "icons8-barber-scissors-80.png";
    compImg.src = "icons8-paper-plane-64.png";
    userImg.classList.add('winner-glow');
  } else if(game.playerChoice == "scissors" && game.computerChoice == "rock"){
    winnerElem.innerText= "Computer has won!";
    userImg.src = "icons8-barber-scissors-80.png";
    compImg.src = "icons8-rock-80.png";
  } else if(game.playerChoice == "rock" && game.computerChoice == "paper"){
    winnerElem.innerText= "Computer has won!";
    userImg.src = "icons8-rock-80.png";
    compImg.src = "icons8-paper-plane-64.png";
  } else if(game.playerChoice == "paper" && game.computerChoice == "scissors"){
    winnerElem.innerText= "Computer has won!";
    userImg.src = "icons8-paper-plane-64.png";
    compImg.src = "icons8-barber-scissors-80.png";
  } else if (game.playerChoice == "paper" && game.computerChoice == "paper"){
    winnerElem.innerText= "Tie!";
    userImg.src = "icons8-paper-plane-64.png";
    compImg.src = "icons8-paper-plane-64.png";
  } else if (game.playerChoice == "rock" && game.computerChoice == "rock"){
    winnerElem.innerText= "Tie!";
    userImg.src = "icons8-rock-80.png";
    compImg.src = "icons8-rock-80.png";
  } else if (game.playerChoice == "scissors" && game.computerChoice == "scissors"){
    winnerElem.innerText= "Tie!";
    userImg.src = "icons8-barber-scissors-80.png";
    compImg.src = "icons8-barber-scissors-80.png";
  }
}