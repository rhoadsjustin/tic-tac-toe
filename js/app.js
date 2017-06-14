//my global variables.
var playerOne = 'x';
var playerTwo = 'o';
var currPlayer = playerOne;
var isAIActive = false;

var playerOneWinTotal = 0;
var playerTwoWinTotal = 0;
var moveCount = 0;
var boxToBeChecked;
var full;
var arrayNumbers = [1,2,3,4,5,6,7,8,9]
var board= [ '', '', '',
            '', '', '',
            '' , '', ''];
// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function




  var bx1 = $('#0');
  var bx2 = $('#1');
  var bx3 = $('#2');
  var bx4 = $('#3');
  var bx5 = $('#4');
  var bx6 = $('#5');
  var bx7 = $('#6');
  var bx8 = $('#7');
  var bx9 = $('#8');

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
    isAIActive = false;
    board= [ '', '', '',
               '', '', '',
               '' , '', ''];
  }

// changes the player after each click
  function changePlayer(){
  if(currPlayer === playerOne) {
      if(isAIActive){
        activeAI();
      } else {
        currPlayer = playerTwo;
      }
      $('#displayPlayer').empty();
      $('#displayPlayer').append(`<h2 class="text-center">It's ${currPlayer}'s turn!</h2>`);
    } else {
      currPlayer = playerOne;
      $('#displayPlayer').empty();
      $('#displayPlayer').append(`<h2 class="text-center">It's ${currPlayer}'s turn!</h2>`);
    }
  }

  // playing against AI
$('#playComp').on('click', function selectAI(){
    if(isAIActive === false) {
      isAIActive = true;
      $('#AI').prepend(`<h2 class='text-center' id='compDisplayPlayer'>You are playing against AI</h2>`)
    } else {
      isAIActive = false;
      $('#AI').empty();
    }
    console.log(isAIActive);
});

// AI playing function
function activeAI() {
  var delay = Math.floor(Math.random() * 3000 + 1500);
  window.setTimeout(function() {
    // boxToBeChecked = $('#box' + Math.floor(Math.random()*9+1));
    // full = boxToBeChecked.hasClass('x') || boxToBeChecked.hasClass('o');
    if (moveCount < 9) {
      if (moveCount === 1) {
        firstAIMove();
        currPlayer = playerOne;
        console.log(moveCount);
      } else {
        currPlayer = playerTwo;
        //AI Block Function
          if (board[0] === 'x' && board[1] === 'x' && board[2] != 'o') {
            boxToBeChecked = bx3;
            board[2] = 'o';
          } else if (board[0] === 'x' && board[3] === 'x' && board[6] != 'o') {
            boxToBeChecked = bx7;
            board[6] = 'o';
          } else if (board[0] === 'x' && board[4] === 'x' && board[8] != 'o') {
            boxToBeChecked = bx9;
            board[8] = 'o';
          } else if (board[2] === 'x' && board[4] === 'x' && board[6] != 'o') {
            boxToBeChecked = bx7;
            board[6] = 'o';
          } else if (board[1] === 'x' && board[2] === 'x' && board[0] != 'o') {
            boxToBeChecked = bx1;
            board[0] = 'o';
          } else if (board[3] === 'x' && board[4] === 'x' && board[5] != 'o') {
            boxToBeChecked = bx6;
            board[5] = 'o';
          } else if (board[0] === 'x' && board[2] === 'x' && board[1] != 'o') {
            boxToBeChecked = bx2;
            board[1] = 'o';
          } else if (board[4] === 'x' && board[5] === 'x' && board[3] != 'o') {
            boxToBeChecked = bx4;
            board[3] = 'o';
          } else if (board[5] === 'x' && board[3] === 'x' && board[4] != 'o') {
            boxToBeChecked = bx5;
            board[4] = 'o';
          } else if (board[6] === 'x' && board[7] === 'x' && board[8] != 'o') {
            boxToBeChecked = bx9;
            board[8] = 'o';
          } else if (board[7] === 'x' && board[8] === 'x' && board[6] != 'o') {
            boxToBeChecked = bx7;
            board[6] = 'o';
          } else if (board[6] === 'x' && board[8] === 'x' && board[7] != 'o') {
            boxToBeChecked = bx8;
            board[7] = 'o';
          } else if (board[1] === 'x' && board[4] === 'x' && board[7] != 'o') {
            boxToBeChecked = bx8;
            board[7] = 'o';
          } else if (board[4] === 'x' && board[7] === 'x' && board[1] != 'o') {
            boxToBeChecked = bx2;
            board[1] = 'o';
          } else if (board[4] === 'x' && board[8] === 'x' && board[0] != 'o') {
            boxToBeChecked = bx1;
            board[0] = 'o';
          }
        console.log(boxToBeChecked);
        coinSound.play();
        console.log(board);
        boxToBeChecked.addClass('o');
        boxToBeChecked.addClass(currPlayer).prepend('<h1 class="text-center currLetter">' + currPlayer + '</h1>');
        winConditions();
        currPlayer = playerOne;

      }
    }else {
        winConditions();
      }
  }, delay);
};

//AI examines the board to determine the best moves
function firstAIMove() {
  currPlayer = playerTwo;
  if(bx1.hasClass('x') || bx3.hasClass('x') || bx7.hasClass('x') || bx9.hasClass('x')) {
    bx5.addClass('o');
    bx5.addClass(currPlayer).prepend('<h1 class="text-center currLetter">'+currPlayer+'</h1>');
    board[4] = 'o';
    coinSound.play();
  } else {
    bx7.addClass('o');
    bx7.addClass(currPlayer).prepend('<h1 class="text-center currLetter">'+currPlayer+'</h1>');
    board[6] = 'o';
    coinSound.play();
  }
}

function AIblock(){
  for(var i = 0; i < arrayNumbers.length-1; i++){
  if( board[i] === 'x' && board[i+1] === 'x' && !board[i+2] === 'o') {
       boxToBeChecked = $('#'+ 2);
       console.log(boxToBeChecked);
   } else if(board[i] === 'x' && board[i+3] === 'x' && !board[i+6] === 'o') {
       boxToBeChecked = $('#'+6);
     }
     else if(board[0] === 'x' && board[4] === 'x' && !board[8] === 'o') {

     boxToBeChecked = $('#'+ 8);
   } else if(board[2] === 'x' && board[4] === 'x' && !board[6] === 'o') {

     boxToBeChecked = $('#'+ 6);
     }
   }
  // arrayNumbers is global at top of app.js
  // for (var i = 1; i < arrayNumbers.length+1; i++) {
  //   if( `bx${arrayNumbers[i]}`.hasClass('x')  && `bx${arrayNumbers[i+1]}`.hasClass('x') && !`bx${arrayNumbers[i+2]}`.hasClass('o')) {
  //     if(full = bx[i].hasClass('x') || bx[i+1].hasClass('o')) {
  //       boxToBeChecked = bx[i+5];
  //       console.log(boxToBeChecked);
  //     } else {
  //       boxToBeChecked = `bx${arrayNumbers[i+2]}`;
  //       console.log(boxToBeChecked);
  //     }
  //   } else if(`bx${arrayNumbers[i]}`.hasClass('x') && `bx${arrayNumbers[i+3]}`.hasClass('x') && !`bx${arrayNumbers[i+6]}`.hasClass('o')) {
  //     if(full = `bx${arrayNumbers[i]}`.hasClass('x') || `bx${arrayNumbers[i+3]}`.hasClass('o')) {
  //       boxToBeChecked = `bx${arrayNumbers[i+7]}`;
  //       console.log(boxToBeChecked);
  //     } else {
  //       boxToBeChecked = `bx${arrayNumbers[i+6]}`;
  //     }
  //   } else if(`bx${arrayNumbers[i]}`.hasClass('x') && `bx${arrayNumbers[i+2]}`.hasClass('x') && !`bx${arrayNumbers[i+1]}`.hasClass('o')) {
  //     if(full = `bx${arrayNumbers[i]}`.hasClass('x') || `bx${arrayNumbers[i+2]}`.hasClass('o')) {
  //       boxToBeChecked = `bx${arrayNumbers[i+3]}`;
  //     } else{
  //     boxToBeChecked = `bx${arrayNumbers[i+1]}`;
  //     }
  //   }
  // }
}

function boardChecker () {

}

// click function that runs the game, checks for a winner, and increases the move count to check for a draw
  $('.box').click(function play() {
    if( $(this).hasClass('x') || $(this).hasClass('o') ){
      alert("Already clicked!");
    } else {
      coinSound.play();
      moveCount++;
      var boxNumber = $(this).attr('id');
        board[boxNumber] = currPlayer;
      console.log(board);
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
    if(isAIActive === false){
    $('#compDisplayPlayer').empty();
    stopSong();
  }
    board = [];
  })
//background music function
   $('body').append('<audio autoplay loop> <source src="supermario.mp3" type="audio/mp3"></audio>');
 function stopSong() {
   $('body').remove('<audio autoplay loop> <source src="supermario.mp3" type="audio/mp3"></audio>');
 }
});
