function populateGameboard() {
  //htmlTiles = 0;
  for(let i = 0; i < 9; i++){
     if (i < 9) {
        htmlGameboard.innerHTML += `<button id="my-tiles" onclick="placeMyMarker()"></div>`;
        let tiles = document.querySelectorAll('button');
        htmlGameboard.addEventListener("click", placeMyMarker)
        //let currentTile = document.querySelector('#my-tiles');
        // htmlTiles.classList.add('button');
        // htmlTiles.setAttribute('id', 'my-tiles');
        // htmlGameboard.appendChild(htmlTiles);
     } 
  }
}

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

   // let currentTile = document.getElementById("my-tiles");
   // currentTile.style.color = "blue";
   
   console.log('you clicked a tile.');
}
const htmlGameboard = document.querySelector('#my-gameboard');
// /htmlGameboard.addEventListener('click', placeMyMarker);
// htmlTiles.addEventListener('click', placeMyMarker);
populateGameboard();
