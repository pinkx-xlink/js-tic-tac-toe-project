# js-tic-tac-toe-project
The application I built for The Odin Project: Tic Tac Toe Project

1/21/24
I created the files for this project a few days ago, but since then I took a step back to think about the project before tackling it. 
The goal is to build a Tic Tac Toe game that works 100% in the console, and then transfer it over to HTML. The console first, HTML later is to help ensure that my code has an undeiably solid foundation. 
Tic tac toe seems like it would be quite simple to build. You'd expect it to be even easier than rock, paper, scissors, right?
The fun thing about this project is that it deals with pattern sequences within a grid instead of simply `if user chose ${this} and computer chose ${that}, then you win, else you lose.` 
After an hour of work I've managed to create a makeshift grid in the console assigned to a gameboard variable. The grid is made of an array of empty spaces (|), and for the moment I've left a row of "x" and a column of "x" to make it easier for me to find the row and column variables in the JS until I figure out the setMarker funciton I'm currently troubleshooting. 
I've figured out how to manually splice in a marker to replace an empty slot on the grid, but now I need to create a factory function to take coors from the user and replace that slot with a character. THEN I can assign x/o markers to the players, and set player turns.
~1 hr

1/22/24
Today I created a factory function (setMarker()) that takes an x and y variable and places markers on the grid in the console. This code is bugged and instead of placing one marker on a coordinate, it places 2 markers: one for x and one for y. I'll resolve this issue tomorrow, but managing to append a marker to the grid in console using a factory function was my main goal so I'm happy with the baby steps taken today. 
I also created the setPlayer() function, which makes sure the players alternate turns after each marker is placed. Tomorrow I'll modify the function to also switch the marker on each turn instead of just logging "Marker: X" or "Marker: O" each time the function runs. 
~1 hr

1/28/24
Began implementing the HTML side of the game. ~ 2hrs
