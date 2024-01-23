// create a 3 x 3 grid in console.
function Gameboard () {
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

const setTile = function(xCoord, yCoord) {
   let tile;
   tile = xCoord.toString() + "-" + yCoord.toString();
   console.log(`coords: ${tile}`);
   function setCoordinates() {
     let coords = tile.split("-");
     xCoord = parseInt(coords[0]);
     yCoord = parseFloat(coords[1]);
     console.log(`${currentPlayer} placed an ${currentMarker} in coord: ${coords}`);
     return coords;
   }
   setCoordinates();
   setPlayer();
 };

// let player place a marker 
const playerOneMarker = 'X';
const playerTwoMarker = 'O';
let currentMarker = 'X';
function setMarker(xCoord, yCoord) {
  updateGameboard = Array.from(new Array(3),()=>Array.from(new Array(3),()=>"|"));
  setTile(xCoord, yCoord);
    updateGameboard.splice(0, 0, 'x');
    console.log('add an x');
  // setCoords code
  const rotate = updateGameboard => 
    updateGameboard[0].map(
      (_,y)=>updateGameboard.map(
        (_,x)=>[y,x]
      )
    ).map(
      row=>row.map(([x,y])=>updateGameboard[y][x])
    );
    const format = updateGameboard => updateGameboard.map(x=>updateGameboard.join(" ")).join("\n");
  // set some values of grid
  // [x, y].forEach(
  //   (x, y)=>updateGameboard[x][y]=currentMarker
  // );
  console.log(format(updateGameboard));
}
// call in the console with setMarker(0, 0)


// when a player choses a spot, push X/O and
// replace the grid coords with X/O.

// create function to check for winner 
// horizontally, vertically, & (anti) diagonally.

// when someone wins, gameover & clear gameboard