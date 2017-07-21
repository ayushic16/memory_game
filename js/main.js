

var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  },
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  },
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  },

];

var dispScore = document.createElement('p');
document.getElementById("scoreDiv").appendChild(dispScore);
var scoreValue = 0;

var cardsInPlay = [];
var cardNum;
var cardElement;

//creating a function to shuffle the cards
var shuffle = function(){
  var j;
  var temp = null;
  for(var i=cards.length-1; i>0; i-=1){
    j = Math.floor(Math.random()*(i+1));
    temp = cards[i];
    cards[i] = cards[j];
    cards[j] = temp;
  }
}
shuffle();

//creating check for match function
var checkForMatch = function(){
  if(cardsInPlay.length===2){
    if(cardsInPlay[0]===cardsInPlay[1]){
      console.log("You found a match!");
      scoreValue = scoreValue + 2;
      console.log(scoreValue);
      dispScore.innerHTML = scoreValue;
      cardsInPlay = [];
    }else
      console.log("Sorry, try again");
      cardsInPlay = [];
  }
}

//creating the flipcard function, and calling checkForMatch function
var flipCard = function(){
  var cardNum = this.getAttribute("data-id")
  this.setAttribute("src",cards[cardNum].cardImage);

  console.log("User flipped " + cards[cardNum].rank);
  console.log(cards[cardNum].cardImage);
  console.log(cards[cardNum].suit);
  cardsInPlay.push(cards[cardNum].rank);

  console.log(cardsInPlay);
  setTimeout(checkForMatch, 200);
}

//creating the gameboard, and setting eventlistener for click to call flipcard function
var createBoard = function(){
  for(var i=0; i<cards.length; i++){
    cardElement = document.createElement('img');
    cardElement.setAttribute("src", "images/back.png");
    cardElement.setAttribute("data-id", i);
    document.getElementById("gameboard").appendChild(cardElement);

    cardElement.addEventListener("click", flipCard);

  }
}
createBoard();

//creating reset button
var resetButton = document.getElementsByTagName('button');
var resetButtonClicked = function(){
  cardsInPlay = [];
  var cardImgs = document.getElementsByTagName('img');
    for(var i=0; i<cardImgs.length; i++){
      cardImgs[i].setAttribute("src","images/back.png");
    }
    scoreValue=0;
    dispScore.innerHTML = 0;
    shuffle();
}
resetButton[0].addEventListener("click",resetButtonClicked);
