

var cards = ["queen", "queen", "king", "king"];
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
  console.log("User flipped " + cards[cardNum]);
  cardsInPlay.push(cards[cardNum]);

  checkForMatch();
}
flipCard(0);
flipCard(3);
