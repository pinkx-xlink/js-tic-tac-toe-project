// change the grid to an array, 
// each quare being one object,
// similar to my library book project.
// then allow each array element to be accessed and
// add a marker (x or o) to it.
function placeMyMarker() {
    // this line only changes inner HTML of the first el
  //  let currentTile = document.querySelectorAll('#my-tiles');
  //  currentTile.classList.add('button');
  //  currentTile.setAttribute('id', 'current-tile');
  //  htmlTiles.appendChild(currentTile);
   const currentTile = this.tiles;
   console.log('you clicked a tile.');
}
const htmlGameboard = document.querySelector('#my-gameboard');
// /htmlGameboard.addEventListener('click', placeMyMarker);
// htmlTiles.addEventListener('click', placeMyMarker);

const cell = document.querySelectorAll(".cell");