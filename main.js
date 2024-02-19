const htmlGameboard = document.querySelector('#my-gameboard');
let cell = document.querySelectorAll(".cell");

cell.forEach(addEventListener("click", placeMyMarker));
function placeMyMarker(cell) {
  console.log('you clicked a tile.');
  this.innerHTML = 'x';
}