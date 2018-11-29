var start = document.querySelector('#start')
var game = document.querySelector('#game')


start.addEventListener('click', gameStart)

// get all cells with DOM
var cells = document.querySelectorAll('td')

// give function play() to all cells with for loop
for (var i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', play)
}

// add game start function
function gameStart() {
  alert("The game has started. X goes first.");
  game.style.visibility = 'visible';
}

// add array to keep track of moves made
var clickCount = 0

// add function to play
function play() {
  if (this.textContent === '') {
    if (clickCount % 2 == 0) {
      this.textContent = 'X';
      this.style.background = '#5f5f5f';
      this.style.color = "white";
      clickCount++
    } else {
      this.textContent = 'O';
      this.style.background = '#5f5f5f';
      this.style.color = "white";
      clickCount++
    }
  } else {
    alert('Square already taken. Choose another.')
  }
}

function CheckForWinner() {

}
