// get players and player colors
var bluePlayer = prompt('Player 1 is Blue. Enter player 1\'s name.');
var bluePlayerColor = '#206fcf';
var redPlayer = prompt('Player 2 is Red. Enter player 2\'s name.');
var redPlayerColor = '#cf204e';

// set the game to true and grab the game board
var game_on = true;
var table = $('table tr');

// create function to change button color in table
function dropColor(rowIndex, colIndex, color) {
  return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color', color);
}

// create function to get existing color of button in table
function reportColor(rowIndex, colIndex) {
  return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color');
}

// create function to drop the color to the bottom of a column
function goToBottom(colIndex) {
  var report = reportColor(5, colIndex);
  for (var row = 5; row > -1; i--) {
    report = reportColor(row, colIndex);
    if (report != '#cf204e' && report != '#206fcf') {
      return row
    }
  }
}

// #ffffff
// check for color matches
function colorMatchCheck (one, two, three, four) {
  return (one === two && one === three && one === four && one !== '#ffffff' && one !== undefined)
}

// check for wins
// horizonatal win
function horizontalWinCheck() {
  for (var row = 0; row < 6; row++) {
    for (var col = 0; col < 4; col++) {
      if (colorMatchCheck(reportColor(row, col), reportColor(row, col+1), reportColor(row, col+2), reportColor(row, col+3))) {
        console.log('Horizontal Win');
        return true
      } else {
        continue;
      }
    }
  }
}

// vertical win
function verticalWinCheck() {
  for (var col = 0; col < 7; col++) {
    for (var row = 0; row < 3; row++) {
      if (colorMatchCheck(reportColor(row, col), reportColor(row+1, col), reportColor(row+2, col), reportColor(row+3, col))) {
        console.log('Vertical Win');
        return true
      } else {
        continue;
      }
    }
  }
}

// diagonal win
function diagonalWinCheck() {
  for (var col = 0; col < 5; col++) {
    for (var row = 0; row < 7; row++) {
      if (colorMatchCheck(reportColor(row, col), reportColor(row+1, col+1), reportColor(row+2, col+2), reportColor(row+3, col+3))) {
        console.log('Diagonal Win');
        return true
      } else if (colorMatchCheck(reportColor(row, col), reportColor(row-1, col+1), reportColor(row-2, col+2), reportColor(row-3, col+3))) {
        console.log('Diagonal Win');
        return true
      }
    }
  }
}

// game logic
// start with blue player
var currentPlayer = 1;
var currentName = bluePlayer;
var currentColor = bluePlayerColor;

// change the message
$('#message').text(bluePlayer + " choose a row to drop your tile.")

$('table button').on('click', function() {
  // get row that has been clicked
  var col = $('this').closest('td').index();
  // get the bottom of that row
  var bottomAvail = goToBottom(col);
  //drop the chip into the bottom available row
  dropColor(bottomAvail, col, currentColor);
  // check if someone has won
  if (horizontalWinCheck() || verticalWinCheck() || diagonalWinCheck()) {
    $('h1').text(currentName + "has won!");
    $('p').eq(0).text('Refresh the browser to play again.');
    $('#message').fadeOut('fast');
  }
})
