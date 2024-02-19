const htmlGameboard = document.querySelector('#my-gameboard');
const cells = document.querySelectorAll('.cell');

function populateGameboard() {
  cells.forEach(cells => cells.addEventListener("click", placeMyMarker));
}
populateGameboard();

function placeMyMarker() {
  console.log('you clicked a tile.');
}