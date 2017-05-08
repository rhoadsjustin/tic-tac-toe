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

var moveCount = 0;

var bx1 = $('#box1');
var bx2 = $('#box2');
var bx3 = $('#box3');
var bx4 = $('#box4');
var bx5 = $('#box5');
var bx6 = $('#box6');
var bx7 = $('#box7');
var bx8 = $('#box8');
var bx9 = $('#box9');

//displays a winner or if there is a draw prompting the players to play again.
function playerOneWins() {
  $('.jumbotron').removeClass('hidden').prepend('<h1 id="p1wins">Player One wins!</h1>');
  $('#winimage').removeClass('hidden');
}

function playerTwoWins() {
  $('.jumbotron').removeClass('hidden').prepend('<h1 id="p2wins">Player Two wins!</h1>');
  $('#winimage').removeClass('hidden');
}

function draw() {
  if(moveCount >= 9) {
  $('.jumbotron').removeClass('hidden').prepend('<h1 id="draw">Its a draw!</h1>');
  $('#drawimage').removeClass('hidden');
  }
}

// all 16 different win conditions
  function winConditions() {
    if((bx1.hasClass('x') && bx2.hasClass('x')) && bx3.hasClass('x')){
          playerOneWins();
          resetBoard();
    } else if((bx1.hasClass('o') && bx2.hasClass('o')) && bx3.hasClass('o')){
      playerTwoWins();
      resetBoard();
    } else if((bx4.hasClass('x') && bx5.hasClass('x')) && bx6.hasClass('x')){
      playerOneWins();
      resetBoard();
    } else if((bx4.hasClass('o') && bx5.hasClass('o')) && bx6.hasClass('o')){
      playerTwoWins();
      resetBoard();
    } else if((bx7.hasClass('x') && bx8.hasClass('x')) && bx9.hasClass('x')){
      playerOneWins();
      resetBoard();
    } else if((bx7.hasClass('o') && bx8.hasClass('o')) && bx9.hasClass('o')){
      playerTwoWins();
      resetBoard();
    } else if((bx1.hasClass('x') && bx4.hasClass('x')) && bx7.hasClass('x')){
      playerOneWins();
      resetBoard();
    } else if((bx1.hasClass('o') && bx4.hasClass('o')) && bx7.hasClass('o')){
      playerTwoWins();
      resetBoard();
    } else if((bx2.hasClass('x') && bx5.hasClass('x')) && bx8.hasClass('x')){
      playerOneWins();
      resetBoard();
    } else if((bx2.hasClass('o') && bx5.hasClass('o')) && bx8.hasClass('o')){
      playerTwoWins();
      resetBoard();
    } else if((bx3.hasClass('x') && bx6.hasClass('x')) && bx9.hasClass('x')){
      playerOneWins();
      resetBoard();
    } else if((bx3.hasClass('o') && bx6.hasClass('o')) && bx9.hasClass('o')){
      playerTwoWins();
      resetBoard();
    } else if((bx1.hasClass('x') && bx5.hasClass('x')) && bx9.hasClass('x')){
      playerOneWins();
      resetBoard();
    } else if((bx1.hasClass('o') && bx5.hasClass('o')) && bx9.hasClass('o')){
      playerTwoWins();
      resetBoard();
    } else if((bx3.hasClass('x') && bx5.hasClass('x')) && bx7.hasClass('x')){
      playerOneWins();
      resetBoard();
    } else if((bx3.hasClass('o') && bx5.hasClass('o')) && bx7.hasClass('o')){
      playerTwoWins();
      resetBoard();
    }
  }
//resets the board back to its original state
  function resetBoard() {
    $('.col-md-4').removeClass('o');
    $('.col-md-4').removeClass('x');
    currPlayer = playerOne;
    moveCount = 0;
  }

// changes the player after each click
  function changePlayer(){
  if(currPlayer === playerOne) {
      currPlayer = playerTwo;
    } else {
      currPlayer = playerOne;
    }
  }
// click function that runs the game, checks for a winner, and increases the move count to check for a draw
  $('.col-md-4').click(function play() {
    if( $(this).hasClass('x') || $(this).hasClass('o') ){
      alert("Already clicked!");
    } else {
      moveCount++;
      $(this).addClass(currPlayer, 'clicked').prepend('<h1 class="text-center currLetter">'+currPlayer+'</h1>');
      changePlayer();
      winConditions();
      draw();
      console.log(moveCount);
    }
  });

// click function set on the buttons to make the game run the reset function;
  $('#reset,#reset2').on('click', function() {
  	resetBoard();
    $('.jumbotron').addClass('hidden');
    $('#p1wins').remove();
    $('#p2wins').remove();
    $('#draw').remove();
    $('.currLetter').remove();
  })

});
