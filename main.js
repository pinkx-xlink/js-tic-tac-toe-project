// create a 3 x 3 grid in console.
function Gameboard(rowCount, columnCount) {
  const rows = 3;
  const columns = 3;
  const gameboard = [];
  const grid = Array.from(new Array(3),()=>Array.from(new Array(3),()=>"-"));

  const rotate = grid => 
    grid[0].map(
      (_,y)=>grid.map(
        (_,x)=>[y,x]
      )
    ).map(
      row=>row.map(([x,y])=>grid[y][x])
    );
  const format = grid => grid.map(x=>x.join(" ")).join("\n");
  //set some values of grid
  [[0,2],[1,2],[2,2]].forEach(
    ([x,y])=>grid[x][y]="X"
  );

  //you can map the grid to columns first, it'll look like it's rotated
  //  unless you generate the columns in div float lefts
  console.log("map grid columns first:")
  console.log(format(grid));

  //you can rotate the grid to build each row and then each column like html table
  console.log("map grid rows first:")
  console.log(format(rotate(grid)));
}

window.onload = function() {
  Gameboard();
}

// create player1 and player 2.
const playerOne = 'X';
const playerTwo = 'O';
let currentPlayer = playerOne;


// alternate player turns.

// let each player select a spot for their marker each turn.

// when a player choses a spot, push X/O and
// replace the grid coords with X/O.

// create function to check for winner 
// horizontally, vertically, & (anti) diagonally.

// when someone wins, gameover & clear gameboard