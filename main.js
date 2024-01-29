function placeMyMarker() {
   const currentTile = this.htmlTiles;
   currentTile.innerHTML = `<p>beep</p>`;
   htmlGameboard.appendChild(currentTile);
   console.log('you clicked a tile.');
};
// create a 3 x 3 grid in console.
function Gameboard () {

   const htmlGameboard = document.querySelector('#my-gameboard');
   let htmlTiles = document.createElement('button');
   htmlTiles.classList.add('button');
   htmlTiles.setAttribute('id', 'my-tiles');
   htmlGameboard.appendChild(htmlTiles);
   
 
   function populateGameboard() {
      htmlTiles = 0;
      for(let i = 0; i < 8; i++){
         if (i < 9) {
            htmlGameboard.innerHTML += `<button id ="my-tiles", onclick="placeMyMarker()"></div>`;
            console.log('counting tiles...');
         } else {
            console.log('done');
            return;
         }
      }
   }
   populateGameboard();
  