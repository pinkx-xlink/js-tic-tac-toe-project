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
  //set some values of grid
//   [[0,2],[1,2],[2,2]].forEach(
//     ([x,y])=>gameboard[x][y]="X"
//   );

  //you can map the grid to columns first, it'll look like it's rotated
  //  unless you generate the columns in div float lefts
  console.log(format(gameboard));
}

window.onload = function () {
  Gameboard();
  setPlayer();
}

// create player1 and player 2.
const playerOne = 'X';
const playerTwo = 'O';
let currentPlayer = playerOne;

// alternate player turns.
function setPlayer(playerOne, playerTwo) {
   if (currentPlayer == playerOne) {
      currentPlayer = playerTwo;
      console.log('Player Twos turn. Marker: O');
   } else {
      console.log(`Player One's turn. Marker: X`);
   }
}
// can change currentPlayer manually in console using
// currentPlayer = playerOne // this logs the player's marker: 'O'
// or currentPlayer = playerTwo // logs: 'X'

// let each player select a spot for their marker each turn.
function setMarker(Gameboard) {
   gameboard.shift(x, y, 'W');
   return ;
};


// when a player choses a spot, push X/O and
// replace the grid coords with X/O.

// create function to check for winner 
// horizontally, vertically, & (anti) diagonally.

// when someone wins, gameover & clear gameboard