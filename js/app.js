// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function

//TODO: create a global variable that tracks if current player is x or o
//TODO: make one click listener that will place either x or o depending on current player

// TODO: Player O has a specific class that matches their player name ( O )
// TODO: Player X has a specific class that matches their player name ( X )
var playerOne = 'x';
var playerTwo = 'o';
var currPlayer = playerOne;

  // function validatePlay(squareplayed) {
  //   if ( $(squareplayed).hasClass('free') ) {
  //         playValid = true;
  //       } else {
  //         playValid = false;
  //         return false;
  //       }
  //   }


  function changePlayer(){
  if(currPlayer === playerOne) {
      currPlayer = playerTwo;
    } else {
      currPlayer = playerOne;
    }
  }

  $('.col-md-4').click(function () {
    $(this).addClass(currPlayer);
    changePlayer();
    });


});
