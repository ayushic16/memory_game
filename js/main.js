

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

var checkForMatch = function(){
  if(cardsInPlay.length===2){
    if(cardsInPlay[0]===cardsInPlay[1])
      console.log("You found a match!");
    else
      console.log("Sorry, try again");
  }
}

var cardNum;
var flipCard = function(cardNum){
  console.log("User flipped " + cards[cardNum].rank);
  console.log(cards[cardNum].cardImage);
  console.log(cards[cardNum].suit);
  cardsInPlay.push(cards[cardNum].rank);

  checkForMatch();
}
flipCard(0);
flipCard(3);
