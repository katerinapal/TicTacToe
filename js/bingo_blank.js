import ".\\libs\\jquery-1.8.0\\jquery.js";
var nameList = ['Ted', 'John', 'Bob', 'Jason', 'Charles', 'Mike', 'Sean', 'Tom', 'Bart', 'Stephen', 'Jacob', 'Doris', 'Stan', 'Cortney', 'Todd', 'James', 'Stu', 'Henry'];  // Name list array for Bingo

function clicky (obj, board){  // 
    obj.className = "clicked";
    
    var num = obj.id.toString();  // 
    
    for (var b = 0; b < 5; b++){
        for (var a = 0; a < 5; a++) {
            if (board.layout[a][b] == num) {
                board.state[a][b] = "1";  // 
            }
        }
    }
    return board;
}

function words (obj) {  // 
    $(obj).each(function (i) {
        $(this).text(nameList[Math.floor((Math.random()*nameList.length-1))+1]);
        if ($(this).attr('id') == '13')
            $(this).text('Bonus');
    });
}

function addName(obj) {  // 
    var newName = $(obj).val().toString();
    nameList.push(newName);
    $(obj).val('');
    alert('The new word has been entered.  Press Randomize to include it in your Bingo game.');
}

function createBoard () {  // 
    
    var bingo = {
        layout: [],
        state: []
        };
    var count = 1;
    
    //
    bingo.state = newArray(5, 5);
    
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
    if (bingo.state[2][2] == "0")
        bingo.state[2][2] = "1";
    
    //
    bingo.layout = newArray(5, 5);
    
    function newArray2(d1, d2) {
        var x = new Array(d1);
    
        for (var i=0; i < d1; i++) {
            x[i] = new Array(d2);
        }

        for (i=0; i < d1; i++) {
            for (var j=0; j < d2; j++) {
                x[i][j] = "";
            }
        }
        return x;
    }
    
    for (var b = 0; b < 5; b++){
        for (var a = 0; a < 5; a++) {
            bingo.layout[a][b] = count.toString();
            count++;
        }
    }
    
    return bingo;
}

function turnOff (board, obj) {  // 
    $('td').removeClass('clicked').addClass('off');
    for (var b = 0; b < 5; b++){
        for (var a = 0; a < 5; a++) {
                board.state[a][b] = "0";
        }
    }
    if (board.state[2][2] == "0")
        board.state[2][2] = "1";
    
    $(obj).each(function (i) {
        $(this).text($(this).attr('id'));
        if ($(this).attr('id') == '13')
            $(this).text('Bonus');
    });
    
    return board;
}

function checkWin (obj, board, score) {  //

    var won = false;  //
    var countRow = [0, 0, 0, 0, 0]; //
    var countCol = [0, 0, 0, 0, 0];

    for (var b = 0; b < 5; b++) {  //
        for (var a = 0; a < 5; a++) {
            if (board.state[a][b] == "1") {
                countRow[a]++;
                countCol[b]++;
            }
            if (countRow[a] == 5)
                won = true;
            if (countCol[b] == 5)
                won = true;
        }
    }
    
    //
    if (board.state[0][0] == "1" && 
        board.state[1][1] == "1" && 
        board.state[3][3] == "1" && 
        board.state[4][4] == "1" )
        won = true;
        
    if (board.state[0][4] == "1" && 
        board.state[1][3] == "1" && 
        board.state[3][1] == "1" && 
        board.state[4][0] == "1" )
        won = true;
    
    //
    if (won === true) {
        alert('Bingo!');
        turnOff(board, 'td');
        resetCounts();
        words('td');
        won = false;
        score++;
        var x = document.getElementById('scoreNow');
        $(x).text(score.toString());
    }
    
    //
    function resetCounts () {
        countRow = [0, 0, 0, 0, 0];
        countCol = [0, 0, 0, 0, 0];
    }
    
    return score;
}