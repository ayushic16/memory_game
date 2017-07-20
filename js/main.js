

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
];

var cardsInPlay = [];
var cardNum;
var cardElement;

var checkForMatch = function(){

  if(cardsInPlay.length===2){
    if(cardsInPlay[0]===cardsInPlay[1])
      alert("You found a match!");
    else
      alert("Sorry, try again");
  }
}

var flipCard = function(){
  var cardNum = this.getAttribute("data-id")
  this.setAttribute("src",cards[cardNum].cardImage);

  console.log("User flipped " + cards[cardNum].rank);
  console.log(cards[cardNum].cardImage);
  console.log(cards[cardNum].suit);
  cardsInPlay.push(cards[cardNum].rank);

  setTimeout(checkForMatch, 100);
}

var createBoard = function(){
  for(var i=0; i<cards.length; i++){
    cardElement = document.createElement('img');
    cardElement.setAttribute("src", "images/back.png");
    cardElement.setAttribute("data-id", i);

    cardElement.addEventListener("click", flipCard);
    document.getElementById("gameboard").appendChild(cardElement);
  }
}

createBoard();
