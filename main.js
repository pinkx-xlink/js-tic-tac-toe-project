function populateGameboard() {
  htmlTiles = 0;
  for(let i = 0; i < 8; i++){
     if (i < 9) {
        htmlGameboard.innerHTML += `<button id ="my-tiles" onclick="placeMyMarker()"></div>`;
        console.log('counting tiles...');
     } else {
        console.log('done');
        return;
     }
  }
}
function placeMyMarker() {
   let currentTile = document.querySelector('button');
   currentTile.innerHTML = `<p>beep</p>`;
   console.log('you clicked a tile.');
};
const htmlGameboard = document.querySelector('#my-gameboard');
   let htmlTiles = document.createElement('button');
   htmlTiles.classList.add('button');
   htmlTiles.setAttribute('id', 'my-tiles');
   htmlGameboard.appendChild(htmlTiles);
   
