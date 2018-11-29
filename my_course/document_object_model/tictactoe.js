var start = document.querySelector('#start')
var game = document.querySelector('#game')

var cellOne = document.querySelector('#one')
var cellTwo = document.querySelector('#two')
var cellThree = document.querySelector('#three')
var cellFour = document.querySelector('#four')
var cellFive = document.querySelector('#five')
var cellSix = document.querySelector('#six')
var cellSeven = document.querySelector('#seven')
var cellEight = document.querySelector('#eight')
var cellNine = document.querySelector('#nine')

var clickCount = 0

start.addEventListener('click', gameStart)

cellOne.addEventListener('click', play)
cellTwo.addEventListener('click', play)
cellThree.addEventListener('click', play)
cellFour.addEventListener('click', play)
cellFive.addEventListener('click', play)
cellSix.addEventListener('click', play)
cellSeven.addEventListener('click', play)
cellEight.addEventListener('click', play)
cellNine.addEventListener('click', play)

function gameStart() {
  alert("The game has started. X goes first.");
  game.style.visibility = 'visible';
}

function play() {
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
}

function CheckForWinner() {

}
