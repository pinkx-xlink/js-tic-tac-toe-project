function placeMyMarker() {
   this.innerHTML= "beep";
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
            htmlGameboard.innerHTML += `<button id ="my-tiles", onclick="placeMyMarker()">hi</div>`;
            console.log('counting tiles...');
         } else {
            console.log('done');
            return;
         }
      }
   }
   populateGameboard();
  const rows = 3;
  const columns = 3;
  let marker;
  const gameboard = Array.from(new Array(3),()=>Array.from(new Array(3),()=>"|"));
  const rotate = gameboard => 
    gameboard[0].map(
      (_,y)=>gameboard.map(
        (_,x)=>[y,x]
      )
    ).map(
      row=>row.map(([x,y])=>gameboard[y][x])
    );
  const format = gameboard => gameboard.map(x=>x.join(" ")).join("\n");
  console.log(format(gameboard));
}
window.onload = function () {
  Gameboard();
  setPlayer();
}
// create player1 and player 2.
const playerOne = 'Player 1';
const playerTwo = 'Player 2';
let currentPlayer = playerOne;

// alternate player turns.
function setPlayer() {
  if (currentPlayer == playerOne) {
    currentPlayer = playerTwo;
    currentMarker = playerTwoMarker
    console.log('Player Twos turn. Marker: O');
  } else if (currentPlayer == playerTwo) {
    currentPlayer = playerOne;
    currentMarker = playerOneMarker;
    console.log(`Player One's turn. Marker: X`);
  }
}



// let player place a marker 
const playerOneMarker = 'X';
const playerTwoMarker = 'O';
let currentMarker = 'X';

function setMarker(xCoord, yCoord) {
   const setTile = function(xCoord, yCoord) {
      let tile;
      tile = xCoord.toString() + "-" + yCoord.toString();
      console.log(`coords: ${tile}`);
      function setCoordinates(tile) {
        let coords = tile.split("-");
        xCoord = parseInt(coords[0]);
        yCoord = parseFloat(coords[1]);
        console.log(`${currentPlayer} placed an ${currentMarker} in coord: ${coords}`);
        //[xCoord, yCoord].push('x')
        return {
          coords
        }
        // spot taken logs when setMarker(1, 1) is return, but not for other locations
      }
      setCoordinates(tile);
      setPlayer();
    };

  updateGameboard = Array.from(new Array(3),()=>Array.from(new Array(3),()=>"|"));
  setTile(xCoord, yCoord);
  console.log('add an x');
  const rotate = updateGameboard => 
    updateGameboard[0].map(
      (_,y)=>updateGameboard.map(
        (_,x)=>[y,x]
      )
    ).map(
      row=>row.map(([x,y])=>updateGameboard[y][x])
    );
  const format = updateGameboard => updateGameboard.splice(updateGameboard=>updateGameboard.join(" ")).join("\n");
  
  // set some values of grid
  
  [[xCoord], [yCoord]].forEach(
    (tile)=>updateGameboard[xCoord][yCoord]=currentMarker
  );
  console.log(format(updateGameboard));
//   const appendMarker = function () {
//       const appendMarkerArray = [];
//       appendMarkerArray.push('w');
//    // append a | for each space that DOESNT have a marker in it
//       console.log(appendMarkerArray);
//       return appendMarkerArray;
//    }
//    appendMarker();

  let tileStatus;
  const spotTaken = 'Taken spot';
  const spotEmpty= 'Empty spot'; 
  function storeMarker(tile) {
    if (xCoord != "" && yCoord != "") {
      this.tileStatus = spotTaken;
      console.log('spot taken');
      
    } else {
      this.tileStatus = spotTaken;
      console.log('spot not taken');
      updateGameboard.push(tile);
    
      // tile = currentMarker;
    }
  }
  storeMarker();
  
  return format(updateGameboard);
}
// call in the console with setMarker(0, 0)


// when a player choses a spot, push X/O and
// replace the grid coords with X/O.

// create function to check for winner 
// horizontally, vertically, & (anti) diagonally.

// when someone wins, gameover & clear gameboard