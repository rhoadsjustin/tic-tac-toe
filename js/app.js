// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function

//my global variables.
var playerOne = 'x';
var playerTwo = 'o';
var currPlayer = playerOne;
var isAIActive = false;

var playerOneWinTotal = 0;
var playerTwoWinTotal = 0;
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

var coinSound = $('#mysoundclip')[0];


//displays a winner or if there is a draw prompting the players to play again.
function playerOneWins() {
  $('.jumbotron').removeClass('hidden').prepend('<h1 id="p1wins">Player One wins!</h1>');
  $('#winimage').removeClass('hidden');
  $('html, body').animate({ scrollTop: 0 }, 'fast');
  playerOneWinTotal++;
  // $('#playerOneScoreBoard').append('<h4 class="wintotal">' + playerOneWinTotal + '</h4>');
  if (playerOneWinTotal === 1) {
    $('#p1Score').html(playerOneWinTotal);
  } else {
    $('#p1Score').html(playerOneWinTotal);
  }
}

function playerTwoWins() {
  $('.jumbotron').removeClass('hidden').prepend('<h1 id="p2wins">Player Two wins!</h1>');
  $('#winimage').removeClass('hidden');
  // $('#playerTwoScoreBoard').remove('<h4 class="wintotal">' + playerTwoWinTotal + '</h4>');
  $('html, body').animate({ scrollTop: 0 }, 'fast');
  playerTwoWinTotal++;
  if (playerTwoWinTotal === 1) {
    $('#p2Score').html(playerTwoWinTotal);
  } else {
    $('#p2Score').html(playerTwoWinTotal);
  }
}

function draw() {
  if(moveCount >= 9) {
  $('.jumbotron').removeClass('hidden').prepend('<h1 id="draw">Its a draw!</h1>');
  $('#winimage').addClass('hidden');
  $('#drawimage').removeClass('hidden');
  $('html, body').animate({ scrollTop: 0 }, 'fast');
  resetBoard();
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
    $('.box').empty();
    $('.box').removeClass('x');
    $('.box').removeClass('o');
    currPlayer = playerOne;
    moveCount = 0;
    $('.box').addClass('hidden');

  }

// changes the player after each click
  function changePlayer(){
  if(currPlayer === playerOne) {
      currPlayer = playerTwo;
      $('#displayPlayer').empty();
      $('#displayPlayer').append(`<h2 class="text-center">It's ${currPlayer}'s turn!</h2>`);
      activeAI();
    } else {
      currPlayer = playerOne;
      $('#displayPlayer').empty();
      $('#displayPlayer').append(`<h2 class="text-center">It's ${currPlayer}'s turn!</h2>`);
      activeAI();
    }
  }

  // playing against AI
$('#playComp').on('click', function selectAI(){
    if(isAIActive === false) {
      isAIActive = true;
      activeAI();
    } else {
      isAIActive = false;
    }
    console.log(isAIActive);
});

// AI playing function
function activeAI() {
  if(isAIActive === true) {
    var boxToBeChecked = Math.floor(Math.random()*9+1);
    console.log(boxToBeChecked);
  }
};

// click function that runs the game, checks for a winner, and increases the move count to check for a draw
  $('.box').click(function play() {
    if( $(this).hasClass('x') || $(this).hasClass('o') ){
      alert("Already clicked!");
    } else {
      if(moveCount === 0) {
        startSong();
      }
      coinSound.play();
      moveCount++;
      $(this).addClass(currPlayer).prepend('<h1 class="text-center currLetter">'+currPlayer+'</h1>');
      changePlayer();
      winConditions();
      draw();
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
    $('.box').removeClass('hidden');
    $('#drawimage').addClass('hidden');
    $('#displayPlayer').empty();
  })
//background music function
 function startSong() {
   $('body').append('<audio autoplay loop> <source src="supermario.mp3" type="audio/mp3"></audio>');
 }
});
