const header = document.querySelector('h1');

const htmlGameboard = document.querySelector('#my-gameboard');
const cells = document.querySelectorAll('.cell');
function populateGameboard() {
  cells.forEach(cells => cells.addEventListener("click", cellClicked));
}
populateGameboard();

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8]
];
let options = ["", "", "", "", "", "", "", "", ""];

function cellClicked() {
  const cellIndex = this.getAttribute("cellIndex");
  updateCell(this, cellIndex);
  placeMyMarker(cells);
  this.textContent = `${currentMarker}`;
  winner();
}
function updateCell(cell, index) {
  options[index] = currentPlayer;
}


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

const playerOneMarker = 'X';
const playerTwoMarker = 'O';
let currentMarker = 'X';


function placeMyMarker(cells) {
  console.log('you clicked a tile.');
  //this.textContent = `${currentMarker}`;
  setPlayer();
}

function winner() {
  for(let i = 0; i < winningCombos.length; i++) {
    const combo = winningCombos[i];
    const cellA = options[combo[0]];
    const cellB = options[combo[1]];
    const cellC = options[combo[2]];

    if(cellA == "" || cellB == "" || cellC == "") {
      continue;
    }
    if(cellA == cellB && cellB == cellC){
      console.log('WINNER!');
      header.innerHTML = `${currentPlayer} wins!`;
      break;
    }
  }
};
const restartBtn = document.querySelector("#restart");
restartBtn.addEventListener("click", restartGame);
function restartGame() {
  cells.forEach(cells => cells.textContent = "");
  console.log('new game');

  const restartText = document.createElement('p');
  header.appendChild(restartText);
  restartText.innerHTML = 'New Game';
  }
