
const htmlGameboard = document.querySelector('#my-gameboard');
const cells = document.querySelectorAll('.cell');

function populateGameboard() {
  cells.forEach(cells => cells.addEventListener("click", placeMyMarker));
}
populateGameboard();

// create player1 and player 2.
const playerOne = 'Player 1';
const playerTwo = 'Player 2';
let currentPlayer = playerOne;
const playerText = document.querySelector('.player');
function displayPlayer() {
  playerText.textContent = `It's ${currentPlayer}'s turn`;
}
displayPlayer();
// alternate player turns.
function setPlayer() {
  if (currentPlayer == playerOne) {
    currentPlayer = playerTwo;
    currentMarker = playerTwoMarker;
    playerText.textContent = `it's player two's turn now. Marker: O`
    console.log('Player Twos turn. Marker: O');
  } else if (currentPlayer == playerTwo) {
    currentPlayer = playerOne;
    currentMarker = playerOneMarker;
    playerText.textContent = `it's player one's turn! marker: X`;
    console.log(`Player One's turn. Marker: X`);
  }
}
// let player place a marker 
const playerOneMarker = 'X';
const playerTwoMarker = 'O';
let currentMarker = 'X';

function placeMyMarker(cells) {
  console.log('you clicked a tile.');
  this.textContent = "x";
  setPlayer();
}
