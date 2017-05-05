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

var bx1 = $('#box1');
var bx2 = $('#box2');
var bx3 = $('#box3');
var bx4 = $('#box4');
var bx5 = $('#box5');
var bx6 = $('#box6');
var bx7 = $('#box7');
var bx8 = $('#box8');
var bx9 = $('#box9');

  function winConditions() {
    if((bx1.hasClass('x') && bx2.hasClass('x')) && bx3.hasClass('x')){
        $('.jumbotron').removeClass('hidden').prepend('<h1>Player One wins!</h1>');
        resetBoard();
    } else if((bx1.hasClass('o') && bx2.hasClass('o')) && bx3.hasClass('o')){
      $('.jumbotron').removeClass('hidden').prepend('<h1>Player Two wins!</h1>');
      resetBoard();
    } else if((bx4.hasClass('x') && bx5.hasClass('x')) && bx6.hasClass('x')){
      $('.jumbotron').removeClass('hidden').prepend('<h1>Player One wins!</h1>');
      resetBoard();
    } else if((bx4.hasClass('o') && bx5.hasClass('o')) && bx6.hasClass('o')){
      $('.jumbotron').removeClass('hidden').prepend('<h1>Player Two wins!</h1>');
      resetBoard();
    } else if((bx7.hasClass('x') && bx8.hasClass('x')) && bx9.hasClass('x')){
      $('.jumbotron').removeClass('hidden').prepend('<h1>Player One wins!</h1>');
      resetBoard();
    } else if((bx7.hasClass('o') && bx8.hasClass('o')) && bx9.hasClass('o')){
      $('.jumbotron').removeClass('hidden').prepend('<h1>Player Two wins!</h1>');
      resetBoard();
    } else if((bx1.hasClass('x') && bx4.hasClass('x')) && bx7.hasClass('x')){
      $('.jumbotron').removeClass('hidden').prepend('<h1>Player One wins!</h1>');
      resetBoard();
    } else if((bx1.hasClass('o') && bx4.hasClass('o')) && bx7.hasClass('o')){
      $('.jumbotron').removeClass('hidden').prepend('<h1>Player Two wins!</h1>');
      resetBoard();
    } else if((bx2.hasClass('x') && bx5.hasClass('x')) && bx8.hasClass('x')){
      $('.jumbotron').removeClass('hidden').prepend('<h1>Player One wins!</h1>');
      resetBoard();
    } else if((bx2.hasClass('o') && bx5.hasClass('o')) && bx8.hasClass('o')){
      $('.jumbotron').removeClass('hidden').prepend('<h1>Player Two wins!</h1>');
      resetBoard();
    } else if((bx3.hasClass('x') && bx6.hasClass('x')) && bx9.hasClass('x')){
      $('.jumbotron').removeClass('hidden').prepend('<h1>Player One wins!</h1>');
      resetBoard();
    } else if((bx3.hasClass('o') && bx6.hasClass('o')) && bx9.hasClass('o')){
      $('.jumbotron').removeClass('hidden').prepend('<h1>Player Two wins!</h1>');
      resetBoard();
    } else if((bx1.hasClass('x') && bx5.hasClass('x')) && bx9.hasClass('x')){
      $('.jumbotron').removeClass('hidden').prepend('<h1>Player One wins!</h1>');
      resetBoard();
    } else if((bx1.hasClass('o') && bx5.hasClass('o')) && bx9.hasClass('o')){
      $('.jumbotron').removeClass('hidden').prepend('<h1>Player Two wins!</h1>');
      resetBoard();
    } else if((bx3.hasClass('x') && bx5.hasClass('x')) && bx7.hasClass('x')){
      $('.jumbotron').removeClass('hidden').prepend('<h1>Player One wins!</h1>');
      resetBoard();
    } else if((bx3.hasClass('o') && bx5.hasClass('o')) && bx7.hasClass('o')){
      $('.jumbotron').removeClass('hidden').prepend('<h1>Player Two wins!</h1>');
      resetBoard();
    }
    // } else if ($('box').hasClass('x' || 'o')) {
		//     alert("Draw! Try playing again!");
		//     resetBoard();
	  // }
  }

  function resetBoard() {
    $('.col-md-4').removeClass('o');
    $('.col-md-4').removeClass('x');
    currPlayer = playerOne;
  }


  function changePlayer(){
  if(currPlayer === playerOne) {
      currPlayer = playerTwo;
    } else {
      currPlayer = playerOne;
    }
  }

  $('.col-md-4').click(function play() {
    if( $(this).hasClass('x') || $(this).hasClass('o') ){
      alert("Already clicked!");
    } else {
      $(this).addClass(currPlayer);
      changePlayer();
      winConditions();
      }

  });

  $('#reset,#reset2').on('click', function() {
  	resetBoard();
    $('.jumbotron').addClass('hidden');
  })

});
