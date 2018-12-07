// get players and player colors
var bluePlayer = prompt('Player 1 is Blue. Enter player 1\'s name.');
var bluePlayerColor = '#206fcf';
var redPlayer = promp('Player 2 is Red. Enter player 2\'s name.');
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
    if (colorReport != '#cf204e' && colorReport != '#206fcf') {
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
// horizonatal wine
function horizontalWinCheck() {
  for (var row = 0; row < 6; row++) {
    for (var col = 0; col < 4; col++) {
      if (colorMatchCheck(reportColor(row, col), reportColor(row, col+1), reportColor(r ow, col+2), reportColor(row, col+3))) {
        console.log('Horizontal Win');
        return true
      } else {
        continue;
      }
    }
  }
}
