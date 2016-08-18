CarLot = (function(carlot) { //arguments inside get returned inside.  outside get returned outside
  carlot.activateEvents = function() {
    var cards = document.querySelectorAll('.carCard')
    console.log(cards)
  cards.forEach(function(card){
    card.addEventListener('click', function(){

//holding card changing functions
    var userInput = document.querySelector('#userInput')
      //clear input
      userInput.value = ''
      //after click focus to text input
      userInput.focus()
      //reset everything when other card is clicked
      CarLot.resetCards(cards)
     //change border width and add background color (own IIFE)
      CarLot.styleCard(card, "pink")
      //be able to change description field w/ what is typed in input
      CarLot.mirrorText(card, userInput)
      })
    })
  }
  return carlot

})(CarLot);


