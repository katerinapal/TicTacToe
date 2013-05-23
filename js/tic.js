/*
[0][0] | [1][0] | [2][0]
[0][1] | [1][1] | [2][1]
[0][2] | [1][2] | [2][2]
*/
var humanScore = 0;  // Set the score value which will be added to when a game is won
var compScore = 0;
var tie = 0;

function clicky(obj, board) {  // Changes the td class to 'clickedHuman' and sets the bingo board state to 1 for each square clicked
    
    var num = obj.id.toString();  // 'State' of the current square
    
    //Cycle through board, mark correct square, increase tie counter
    for (var b = 0; b < 3; b++){
        for (var a = 0; a < 3; a++) {
            if (board.layout[b][a] === num) {
                if (board.state[b][a] === "0") {
                    board.state[b][a] = "1";  // 'State' is now set to 1, used later to check if it has been clicked
                    $(obj).text("X");
                    obj.className = "clickedHuman";
                    tie += 1;
                }
                else if (board.state[b][a] === "2") {
                    alert("Can\'t play there. You have been penalized a turn."); //Penalty for wrong move
                    break;
                }
                else if (board.state[b][a] === "1") {
                    alert("Can\'t play there. You have been penalized a turn."); //Penalty for wrong move
                    break;
                }
            }
        }
    }

    computerTurn(board);
    console.log(board.state);
    return board;
}

function computerTurn (board) {
    //Prep the layout number for specific td id
    var layoutNum = "";
    var done = false;
    
    //Use tie to figure out each move
    if (tie === 1) {
        firstMove(board);
    }
    else if (tie === 2) {
        secondMove(board);
    }
    else if (tie === 3) {
        thirdMove(board);
    }
    else if (tie === 4) {
        fourthMove(board);
    }
        
    function firstMove (board) {

        function randomMove (board) {
        
            var noMove = [];
            var counter = 0;
            var randomSpot = 0;
            
            for (var b = 0; b < 3; b++){
                for (var a = 0; a < 3; a++) {
                    if (board.state[b][a] === "0") {
                        noMove[counter] = board.layout[b][a];
                        counter += 1;
                    }
                }
            }
            
            randomSpot = noMove[Math.floor(Math.random()*(noMove.length))];
            
            for (var c = 0; c < 3; c++){
                for (var d = 0; d < 3; d++) {
                    if (board.layout[c][d] === randomSpot) {
                        board.state[c][d] = "2";
                        layoutNum = randomSpot;
                        done = true;
                        console.log("Random Spot is: " + randomSpot.toString());
                    }
                }
            }
            
            return board;
        }
        
        randomMove(board);
        return board;
    }

    function secondMove (board) {
        
        var moved = false;

        // Rows - 1st
        if (board.state[0][0] === "1" && board.state[1][0] === "1" && moved !== true) {
            if (board.state[2][0] === "0") {
                board.state[2][0] = "2";
                layoutNum = "3";
                moved = true;
            }
        }
        if (board.state[1][0] === "1" && board.state[2][0] === "1" && moved !== true) {
            if (board.state[0][0] === "0") {
                board.state[0][0] = "2";
                layoutNum = "1";
                moved = true;
            }
        }
        if (board.state[0][0] === "1" && board.state[2][0] === "1" && moved !== true) {
            if (board.state[1][0] === "0") {
                board.state[1][0] = "2";
                layoutNum = "2";
                moved = true;
            }
        }
        // Rows - Second
        if (board.state[0][1] === "1" && board.state[1][1] === "1" && moved !== true) {
            if (board.state[2][1] === "0") {
                board.state[2][1] = "2";
                layoutNum = "6";
                moved = true;
            }
        }
        if (board.state[1][1] === "1" && board.state[2][1] === "1" && moved !== true) {
            if (board.state[0][1] === "0") {
                board.state[0][1] = "2";
                layoutNum = "4";
                moved = true;
            }
        }
        if (board.state[0][1] === "1" && board.state[2][1] === "1" && moved !== true) {
            if (board.state[1][1] === "2" && board.state[1][0] === "0") {
                board.state[1][0] = "2";
                layoutNum = "2";
                moved = true;
            }
        }
        // Rows - Third
        if (board.state[0][2] === "1" && board.state[1][2] === "1" && moved !== true) {
            if (board.state[2][2] === "0") {
                board.state[2][2] = "2";
                layoutNum = "9";
                moved = true;
            }
        }
        if (board.state[1][2] === "1" && board.state[2][2] === "1" && moved !== true) {
            if (board.state[0][2] === "0") {
                board.state[0][2] = "2";
                layoutNum = "7";
                moved = true;
            }
        }
        if (board.state[0][2] === "1" && board.state[2][2] === "1" && moved !== true) {
            if (board.state[1][2] === "0") {
                board.state[1][2] = "2";
                layoutNum = "8";
                moved = true;
            }
        }
        
        // Columns - First
        if (board.state[0][0] === "1" && board.state[0][1] === "1" && moved !== true) {
            if (board.state[0][2] === "0") {
                board.state[0][2] = "2";
                layoutNum = "7";
                moved = true;
            }
        }
        if (board.state[0][1] === "1" && board.state[0][2] === "1" && moved !== true) {
            if (board.state[0][0] === "0") {
                board.state[0][0] = "2";
                layoutNum = "1";
                moved = true;
            }
        }
        if (board.state[0][0] === "1" && board.state[0][2] === "1" && moved !== true) {
            if (board.state[0][1] === "0") {
                board.state[0][1] = "2";
                layoutNum = "4";
                moved = true;
            }
        }
        // Columns - Second
        if (board.state[1][0] === "1" && board.state[1][1] === "1" && moved !== true) {
            if (board.state[1][2] === "0") {
                board.state[1][2] = "2";
                layoutNum = "8";
                moved = true;
            }
        }
        if (board.state[1][1] === "1" && board.state[1][2] === "1" && moved !== true) {
            if (board.state[1][0] === "0") {
                board.state[1][0] = "2";
                layoutNum = "2";
                moved = true;
            }
        }
        if (board.state[1][0] === "1" && board.state[1][2] === "1" && moved !== true) {
            if (board.state[1][1] === "2" && board.state[2][1] === "0") {
                board.state[2][1] = "2";
                layoutNum = "6";
                moved = true;
            }
        }
        // Columns - Third
        if (board.state[2][0] === "1" && board.state[2][1] === "1" && moved !== true) {
            if (board.state[2][2] === "0") {
                board.state[2][2] = "2";
                layoutNum = "9";
                moved = true;
            }
        }
        if (board.state[2][1] === "1" && board.state[2][2] === "1" && moved !== true) {
            if (board.state[2][0] === "0") {
                board.state[2][0] = "2";
                layoutNum = "3";
                moved = true;
            }
        }
        if (board.state[2][0] === "1" && board.state[2][2] === "1" && moved !== true) {
            if (board.state[2][1] === "0") {
                board.state[2][1] = "2";
                layoutNum = "6";
                moved = true;
            }
        }
        
        // Diagonals \
        if (board.state[0][0] === "1" && board.state[1][1] === "1" && moved !== true) {
            if (board.state[2][2] === "0") {
                board.state[2][2] = "2";
                layoutNum = "9";
                moved = true;
            }
        }
        if (board.state[1][1] === "1" && board.state[2][2] === "1" && moved !== true) {
            if (board.state[0][0] === "0") {
                board.state[0][0] = "2";
                layoutNum = "1";
                moved = true;
            }
        }
        if (board.state[0][0] === "1" && board.state[2][2] === "1" && moved !== true) {
            if (board.state[1][1] === "0") {
                board.state[1][1] = "2";
                layoutNum = "5";
                moved = true;
            }
        }
        // Diagonals /
        if (board.state[2][0] === "1" && board.state[1][1] === "1" && moved !== true) {
            if (board.state[0][2] === "0") {
                board.state[0][2] = "2";
                layoutNum = "7";
                moved = true;
            }
        }
        if (board.state[0][2] === "1" && board.state[1][1] === "1" && moved !== true) {
            if (board.state[2][0] === "0") {
                board.state[2][0] = "2";
                layoutNum = "3";
                moved = true;
            }
        }
        if (board.state[0][2] === "1" && board.state[2][0] === "1" && moved !== true) {
            if (board.state[1][1] === "0") {
                board.state[1][1] = "2";
                layoutNum = "5";
                moved = true;
            }
        }
     
        // Kitties
        if (board.state[0][1] === "1" && board.state[1][0] === "1" && moved !== true) {
            if (board.state[1][1] === "2" && board.state[0][0] === "0") {
                board.state[0][0] = "2";
                layoutNum = "1";
                moved = true;
            }
        }
        if (board.state[1][0] === "1" && board.state[2][1] === "1" && moved !== true) {
            if (board.state[1][1] === "2" && board.state[2][0] === "0") {
                board.state[2][0] = "2";
                layoutNum = "3";
                moved = true;
            }
        }
        if (board.state[2][1] === "1" && board.state[1][2] === "1" && moved !== true) {
            if (board.state[1][1] === "2" && board.state[2][2] === "0") {
                board.state[2][2] = "2";
                layoutNum = "9";
                moved = true;
            }
        }
        if (board.state[1][2] === "1" && board.state[0][1] === "1" && moved !== true) {
            if (board.state[1][1] === "2" && board.state[0][2] === "0") {
                board.state[0][2] = "2";
                layoutNum = "7";
                moved = true;
            }
        }
        
        // Weird - Vertical
        if (board.state[1][0] === "1" && board.state[0][2] === "1" && moved !== true) {
            if (board.state[1][1] === "2" && board.state[0][1] === "0") {
                board.state[0][1] = "2";
                layoutNum = "4";
                moved = true;
            }
        }
        if (board.state[1][0] === "1" && board.state[2][2] === "1" && moved !== true) {
            if (board.state[1][1] === "2" && board.state[2][1] === "0") {
                board.state[2][1] = "2";
                layoutNum = "6";
                moved = true;
            }
        }
        if (board.state[1][2] === "1" && board.state[0][0] === "1" && moved !== true) {
            if (board.state[1][1] === "2" && board.state[0][1] === "0") {
                board.state[0][1] = "2";
                layoutNum = "4";
                moved = true;
            }
        }
        if (board.state[1][2] === "1" && board.state[2][0] === "1" && moved !== true) {
            if (board.state[1][1] === "2" && board.state[2][1] === "0") {
                board.state[2][1] = "2";
                layoutNum = "6";
                moved = true;
            }
        }
        // Weird - Horizontal
        if (board.state[0][1] === "1" && board.state[2][0] === "1" && moved !== true) {
            if (board.state[1][1] === "2" && board.state[1][0] === "0") {
                board.state[1][0] = "2";
                layoutNum = "2";
                moved = true;
            }
        }
        if (board.state[0][1] === "1" && board.state[2][2] === "1" && moved !== true) {
            if (board.state[1][1] === "2" && board.state[1][2] === "0") {
                board.state[1][2] = "2";
                layoutNum = "8";
                moved = true;
            }
        }
        if (board.state[2][1] === "1" && board.state[0][0] === "1" && moved !== true) {
            if (board.state[1][1] === "2" && board.state[1][0] === "0") {
                board.state[1][0] = "2";
                layoutNum = "2";
                moved = true;
            }
        }
        if (board.state[2][1] === "1" && board.state[0][2] === "1" && moved !== true) {
            if (board.state[1][1] === "2" && board.state[1][2] === "0") {
                board.state[1][2] = "2";
                layoutNum = "8";
                moved = true;
            }
        }

        if (moved === false) {
            randomMove(board);
            moved = true;
        }
        
        return board;
    }
     
    function thirdMove (board) {

        var moved = false;
    
        // Rows - 1st
        if (board.state[0][0] === "1" && board.state[1][0] === "1" && moved === false) {
            if (board.state[2][0] === "0") {
                board.state[2][0] = "2";
                layoutNum = "3";
                moved = true;
            }
        }
        if (board.state[1][0] === "1" && board.state[2][0] === "1" && moved === false) {
            if (board.state[0][0] === "0") {
                board.state[0][0] = "2";
                layoutNum = "1";
                moved = true;
            }
        }
        if (board.state[0][0] === "1" && board.state[2][0] === "1" && moved === false) {
            if (board.state[1][0] === "0") {
                board.state[1][0] = "2";
                layoutNum = "2";
                moved = true;
            }
        }
        // Rows - Second
        if (board.state[0][1] === "1" && board.state[1][1] === "1" && moved === false) {
            if (board.state[2][1] === "0") {
                board.state[2][1] = "2";
                layoutNum = "6";
                moved = true;
            }
        }
        if (board.state[1][1] === "1" && board.state[2][1] === "1" && moved === false) {
            if (board.state[0][1] === "0") {
                board.state[0][1] = "2";
                layoutNum = "4";
                moved = true;
            }
        }
        if (board.state[0][1] === "1" && board.state[2][1] === "1" && moved === false) {
            if (board.state[1][1] === "0") {
                board.state[1][1] = "2";
                layoutNum = "5";
                moved = true;
            }
        }
        // Rows - Third
        if (board.state[0][2] === "1" && board.state[1][2] === "1" && moved === false) {
            if (board.state[2][2] === "0") {
                board.state[2][2] = "2";
                layoutNum = "9";
                moved = true;
            }
        }
        if (board.state[1][2] === "1" && board.state[2][2] === "1" && moved === false) {
            if (board.state[0][2] === "0") {
                board.state[0][2] = "2";
                layoutNum = "7";
                moved = true;
            }
        }
        if (board.state[0][2] === "1" && board.state[2][2] === "1" && moved === false) {
            if (board.state[1][2] === "0") {
                board.state[1][2] = "2";
                layoutNum = "8";
                moved = true;
            }
        }
        
        // Columns - First
        if (board.state[0][0] === "1" && board.state[0][1] === "1" && moved === false) {
            if (board.state[0][2] === "0") {
                board.state[0][2] = "2";
                layoutNum = "7";
                moved = true;
            }
        }
        if (board.state[0][1] === "1" && board.state[0][2] === "1" && moved === false) {
            if (board.state[0][0] === "0") {
                board.state[0][0] = "2";
                layoutNum = "1";
                moved = true;
            }
        }
        if (board.state[0][0] === "1" && board.state[0][2] === "1" && moved === false) {
            if (board.state[0][1] === "0") {
                board.state[0][1] = "2";
                layoutNum = "4";
                moved = true;
            }
        }
        // Columns - Second
        if (board.state[1][0] === "1" && board.state[1][1] === "1" && moved === false) {
            if (board.state[1][2] === "0") {
                board.state[1][2] = "2";
                layoutNum = "8";
                moved = true;
            }
        }
        if (board.state[1][1] === "1" && board.state[1][2] === "1" && moved === false) {
            if (board.state[1][0] === "0") {
                board.state[1][0] = "2";
                layoutNum = "2";
                moved = true;
            }
        }
        if (board.state[1][0] === "1" && board.state[1][2] === "1" && moved === false) {
            if (board.state[1][1] === "0") {
                board.state[1][1] = "2";
                layoutNum = "5";
                moved = true;
            }
        }
        // Columns - Third
        if (board.state[2][0] === "1" && board.state[2][1] === "1" && moved === false) {
            if (board.state[2][2] === "0") {
                board.state[2][2] = "2";
                layoutNum = "9";
                moved = true;
            }
        }
        if (board.state[2][1] === "1" && board.state[2][2] === "1" && moved === false) {
            if (board.state[2][0] === "0") {
                board.state[2][0] = "2";
                layoutNum = "3";
                moved = true;
            }
        }
        if (board.state[2][0] === "1" && board.state[2][2] === "1" && moved === false) {
            if (board.state[2][1] === "0") {
                board.state[2][1] = "2";
                layoutNum = "6";
                moved = true;
            }
        }
        
        // Kitties
        if (board.state[0][1] === "1" && board.state[1][0] === "1" && moved === false) {
            if (board.state[0][0] === "0") {
                board.state[0][0] = "2";
                layoutNum = "1";
                moved = true;
            }
        }
        if (board.state[1][0] === "1" && board.state[2][1] === "1" && moved === false) {
            if (board.state[2][0] === "0") {
                board.state[2][0] = "2";
                layoutNum = "3";
                moved = true;
            }
        }
        if (board.state[2][1] === "1" && board.state[1][2] === "1" && moved === false) {
            if (board.state[2][2] === "0") {
                board.state[2][2] = "2";
                layoutNum = "9";
                moved = true;
            }
        }
        if (board.state[1][2] === "1" && board.state[0][1] === "1" && moved === false) {
            if (board.state[0][2] === "0") {
                board.state[0][2] = "2";
                layoutNum = "7";
                moved = true;
            }
        }

        // Diagonals \
        if (board.state[0][0] === "1" && board.state[1][1] === "1" && moved === false) {
            if (board.state[2][2] === "0") {
                board.state[2][2] = "2";
                layoutNum = "9";
                moved = true;
            }
        }
        if (board.state[1][1] === "1" && board.state[2][2] === "1" && moved === false) {
            if (board.state[0][0] === "0") {
                board.state[0][0] = "2";
                layoutNum = "1";
                moved = true;
            }
        }
        if (board.state[0][0] === "1" && board.state[2][2] === "1" && moved === false) {
            if (board.state[1][1] === "0") {
                board.state[1][1] = "2";
                layoutNum = "5";
                moved = true;
            }
        }
        // Diagonals /
        if (board.state[2][0] === "1" && board.state[1][1] === "1" && moved === false) {
            if (board.state[0][2] === "0") {
                board.state[0][2] = "2";
                layoutNum = "7";
                moved = true;
            }
        }
        if (board.state[0][2] === "1" && board.state[1][1] === "1" && moved === false) {
            if (board.state[2][0] === "0") {
                board.state[2][0] = "2";
                layoutNum = "3";
                moved = true;
            }
        }
        if (board.state[0][2] === "1" && board.state[2][0] === "1" && moved === false) {
            if (board.state[1][1] === "0") {
                board.state[1][1] = "2";
                layoutNum = "5";
                moved = true;
            }
        }

        if (moved === false) {
            randomMove(board);
            moved = true;
        }

        return board;
    }
    
    function fourthMove (board) {
        
        var moved = false;
    
        // Rows - 1st
        if (board.state[0][0] === "1" && board.state[1][0] === "1" && moved === false) {
            if (board.state[2][0] === "0") {
                board.state[2][0] = "2";
                layoutNum = "3";
                moved = true;
            }
        }
        if (board.state[1][0] === "1" && board.state[2][0] === "1" && moved === false) {
            if (board.state[0][0] === "0") {
                board.state[0][0] = "2";
                layoutNum = "1";
                moved = true;
            }
        }
        if (board.state[0][0] === "1" && board.state[2][0] === "1" && moved === false) {
            if (board.state[1][0] === "0") {
                board.state[1][0] = "2";
                layoutNum = "2";
                moved = true;
            }
        }
        // Rows - Second
        if (board.state[0][1] === "1" && board.state[1][1] === "1" && moved === false) {
            if (board.state[2][1] === "0") {
                board.state[2][1] = "2";
                layoutNum = "6";
                moved = true;
            }
        }
        if (board.state[1][1] === "1" && board.state[2][1] === "1" && moved === false) {
            if (board.state[0][1] === "0") {
                board.state[0][1] = "2";
                layoutNum = "4";
                moved = true;
            }
        }
        // Rows - Third
        if (board.state[0][2] === "1" && board.state[1][2] === "1" && moved === false) {
            if (board.state[2][2] === "0") {
                board.state[2][2] = "2";
                layoutNum = "9";
                moved = true;
            }
        }
        if (board.state[1][2] === "1" && board.state[2][2] === "1" && moved === false) {
            if (board.state[0][2] === "0") {
                board.state[0][2] = "2";
                layoutNum = "7";
                moved = true;
            }
        }
        if (board.state[0][2] === "1" && board.state[2][2] === "1" && moved === false) {
            if (board.state[1][2] === "0") {
                board.state[1][2] = "2";
                layoutNum = "8";
                moved = true;
            }
        }
        
        // Columns - First
        if (board.state[0][0] === "1" && board.state[0][1] === "1" && moved === false) {
            if (board.state[0][2] === "0") {
                board.state[0][2] = "2";
                layoutNum = "7";
                moved = true;
            }
        }
        if (board.state[0][1] === "1" && board.state[0][2] === "1" && moved === false) {
            if (board.state[0][0] === "0") {
                board.state[0][0] = "2";
                layoutNum = "1";
                moved = true;
            }
        }
        if (board.state[0][0] === "1" && board.state[0][2] === "1" && moved === false) {
            if (board.state[0][1] === "0") {
                board.state[0][1] = "2";
                layoutNum = "4";
                moved = true;
            }
        }
        // Columns - Second
        if (board.state[1][0] === "1" && board.state[1][1] === "1" && moved === false) {
            if (board.state[1][2] === "0") {
                board.state[1][2] = "2";
                layoutNum = "8";
                moved = true;
            }
        }
        if (board.state[1][1] === "1" && board.state[1][2] === "1" && moved === false) {
            if (board.state[1][0] === "0") {
                board.state[1][0] = "2";
                layoutNum = "2";
                moved = true;
            }
        }
        // Columns - Third
        if (board.state[2][0] === "1" && board.state[2][1] === "1" && moved === false) {
            if (board.state[2][2] === "0") {
                board.state[2][2] = "2";
                layoutNum = "9";
                moved = true;
            }
        }
        if (board.state[2][1] === "1" && board.state[2][2] === "1" && moved === false) {
            if (board.state[2][0] === "0") {
                board.state[2][0] = "2";
                layoutNum = "3";
                moved = true;
            }
        }
        if (board.state[2][0] === "1" && board.state[2][2] === "1" && moved === false) {
            if (board.state[2][1] === "0") {
                board.state[2][1] = "2";
                layoutNum = "6";
                moved = true;
            }
        }
        
        // Kitties
        if (board.state[0][1] === "1" && board.state[1][0] === "1" && moved === false) {
            if (board.state[0][0] === "0") {
                board.state[0][0] = "2";
                layoutNum = "1";
                moved = true;
            }
        }
        if (board.state[1][0] === "1" && board.state[2][1] === "1" && moved === false) {
            if (board.state[2][0] === "0") {
                board.state[2][0] = "2";
                layoutNum = "3";
                moved = true;
            }
        }
        if (board.state[2][1] === "1" && board.state[1][2] === "1" && moved === false) {
            if (board.state[2][2] === "0") {
                board.state[2][2] = "2";
                layoutNum = "9";
                moved = true;
            }
        }
        if (board.state[1][2] === "1" && board.state[0][1] === "1" && moved === false) {
            if (board.state[0][2] === "0") {
                board.state[0][2] = "2";
                layoutNum = "7";
                moved = true;
            }
        }
        
        // Diagonals \
        if (board.state[0][0] === "1" && board.state[1][1] === "1" && moved === false) {
            if (board.state[2][2] === "0") {
                board.state[2][2] = "2";
                layoutNum = "9";
                moved = true;
            }
        }
        if (board.state[1][1] === "1" && board.state[2][2] === "1" && moved === false) {
            if (board.state[0][0] === "0") {
                board.state[0][0] = "2";
                layoutNum = "1";
                moved = true;
            }
        }
        if (board.state[0][0] === "1" && board.state[2][2] === "1" && moved === false) {
            if (board.state[1][1] === "0") {
                board.state[1][1] = "2";
                layoutNum = "5";
                moved = true;
            }
        }
        // Diagonals /
        if (board.state[2][0] === "1" && board.state[1][1] === "1" && moved === false) {
            if (board.state[0][2] === "0") {
                board.state[0][2] = "2";
                layoutNum = "7";
                moved = true;
            }
        }
        if (board.state[0][2] === "1" && board.state[1][1] === "1" && moved === false) {
            if (board.state[2][0] === "0") {
                board.state[2][0] = "2";
                layoutNum = "3";
                moved = true;
            }
        }
        if (board.state[0][2] === "1" && board.state[2][0] === "1" && moved === false) {
            if (board.state[1][1] === "0") {
                board.state[1][1] = "2";
                layoutNum = "5";
                moved = true;
            }
        }
        
        if (moved === false) {
            randomMove(board);
            moved = true;
        }

        return board;
    
    }

    function randomMove (board) {
        
        var noMove = [];
        var counter = 0;
        var randomSpot = 0;
        
        for (var b = 0; b < 3; b++){
            for (var a = 0; a < 3; a++) {
                if (board.state[b][a] === "0") {
                    noMove[counter] = board.layout[b][a];
                    counter += 1;
                }
            }
        }
        
        randomSpot = noMove[Math.floor(Math.random()*(noMove.length))];
        
        for (var c = 0; c < 3; c++){
            for (var d = 0; d < 3; d++) {
                if (board.layout[c][d] === randomSpot) {
                    board.state[c][d] = "2";
                    layoutNum = randomSpot;
                    done = true;
                    console.log("Random Spot is: " + randomSpot.toString());
                }
            }
        }
        
        return board;
    }

    
    //Find specific td, mark as computer move, set as O
    $("td").each(function (i) {
        if ($(this).attr("id") == layoutNum) {
            $(this).removeClass("off").addClass("clickedComp").text("O");
        }
    });
    
    console.log(layoutNum);
    return board;
}

function createBoard () {  // Creates the tic board object.  It is 2 2D arrays.  One for the layout number and one for the current state (clicked/notclicked)
    
    var tic = {
        layout: [],
        state: []
        };
    var count = 1;
    
    //Set up state positions as 0
    tic.state = newArray(3, 3);
    
    function newArray(d1, d2) {
        var x = new Array(d1);
    
        for (var i=0; i < d1; i++) {
            x[i] = new Array(d2);
        }

        for (i=0; i < d1; i++) {
            for (var j=0; j < d2; j++) {
                x[i][j] = "0";
            }
        }
        return x;
    }
    
    //Set up layout positions from 1 to 9
    tic.layout = newArray(3, 3);
    
    for (var b = 0; b < 3; b++){
        for (var a = 0; a < 3; a++) {
            tic.layout[a][b] = count.toString();
            count++;
        }
    }
    
    return tic;
}

function turnOff (board) {  // Clears the board of the state, resets the values
    $('td').removeClass('clickedHuman').addClass('off');
    for (var b = 0; b < 3; b++){
        for (var a = 0; a < 3; a++) {
                board.state[a][b] = "0";
        }
    }
    
    $('td').removeClass('clickedComp').addClass('off');
    for (var c = 0; c < 3; c++){
        for (var d = 0; d < 3; d++) {
                board.state[d][c] = "0";
        }
    }
    
    $("td").each(function (i) {
        $(this).text("");
    });
    
    tie = 0;
    
    return board;
}

function checkWin (obj, board, score) {  // Checks for a win using 'td', board object, and score number

    var won = 0;  //Set the default win to 0, changed when 3 in a row for either human or computer
    
    //Check to see if the human won
    function humanWin() {
        var countRow = [0, 0, 0]; //Create count arrays
        var countCol = [0, 0, 0];
    
        for (var b = 0; b < 3; b++) {  // Check rows and columns
            for (var a = 0; a < 3; a++) {
                if (board.state[a][b] === "1") {
                    countRow[a]++;
                    countCol[b]++;
                }
                if (countRow[a] === 3)
                    won = 1;
                if (countCol[b] === 3)
                    won = 1;
            }
        }
    
        // Check both diagonals
        if (board.state[0][0] === "1" &&
            board.state[1][1] === "1" &&
            board.state[2][2] === "1")
            won = 1;
        
        if (board.state[0][2] === "1" &&
            board.state[1][1] === "1" &&
            board.state[2][0] === "1")
            won = 1;
            
        return won;
    }
    
    //Check to see if the computer won
    function compWin() {
        var countRow = [0, 0, 0]; //Create count arrays
        var countCol = [0, 0, 0];
    
        for (var b = 0; b < 3; b++) {  // Check rows and columns
            for (var a = 0; a < 3; a++) {
                if (board.state[a][b] === "2") {
                    countRow[a]++;
                    countCol[b]++;
                }
                if (countRow[a] === 3)
                    won = 2;
                if (countCol[b] === 3)
                    won = 2;
            }
        }
    
        // Check both diagonals
        if (board.state[0][0] === "2" &&
            board.state[1][1] === "2" &&
            board.state[2][2] === "2")
            won = 2;
        
        if (board.state[0][2] === "2" &&
            board.state[1][1] === "2" &&
            board.state[2][0] === "2")
            won = 2;
            
        return won;
    }
    
    //Check if human won
    humanWin();
    if (won === 1) {
        alert('You Won Tic-Tac-Toe!'); //Announce result of match
        $.post("http://test.seanriordan.com/tic/js/pushbullet.php", {
			title: "TicTacToe",
			body: "Human Won."
		});
        turnOff(board); //Clear board, reset table
        resetCounts();
        won = 0;
        humanScore++; //Increase human score
        tie = 0; //Reset tie counter
        var x = document.getElementById('scoreNow');
        $(x).text(humanScore.toString()); //Write score to the scoreboard
    }
    
    //Check if computer won
    compWin();
    if (won === 2) {
        alert('The Computer Won Tic-Tac-Toe!');
        $.post("http://test.seanriordan.com/tic/js/pushbullet.php", {
			title: "TicTacToe",
			body: "Computer Won."
		});
        turnOff(board);
        resetCounts();
        won = 0;
        compScore++;
        tie = 0;
        var y = document.getElementById('scoreNowComp');
        $(y).text(compScore.toString());
    }
    
    //Check for a tie, reset the board
    if (tie > 4) {
        alert('The Game Was a Tie!');
        turnOff(board);
        resetCounts();
        won = 0;
        tie = 0;
        $.post("http://test.seanriordan.com/tic/js/pushbullet.php", {
			title: "TicTacToe",
			body: "Tie Game."
		});
    }
    
    //Reset all counts
    function resetCounts () {
        countRow = [0, 0, 0];
        countCol = [0, 0, 0];
    }
}