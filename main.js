var board;
let turn = null
let count0 = 0
let count1 =0
let count2 =0
let count3 =0
let count4 =0
let count5 =0
let count6 =0
let finished = false

// Initialize Gameboard
function initializeBoard() {
    board = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
}

function startGame() {

    initializeBoard();
    turn = true
    $("h1").text(`Player 1's Turn`)
    let column0 = document.querySelectorAll(".Column0")
column0.forEach(item => {
item.addEventListener("click", () => {
    playerTurn(0, count0, turn, finished)
})
item.addEventListener('click', () => {
    count0 =count0 + 1})
item.addEventListener('click', () => {
    turn = !turn;
    if (finished === false) {
    if (turn === true) {
        $("h1").text(`Player 1's Turn`)
    }
    else if (turn === false) {
        $("h1").text(`Player 2's Turn`)
    }}
})
})

let column1 = document.querySelectorAll(".Column1")
column1.forEach(item => {
item.addEventListener("click", () => {
    playerTurn(1, count1, turn, finished)
})
item.addEventListener('click', () => {
    count1 =count1 + 1})
item.addEventListener('click', () => {
    turn = !turn;
    if (finished === false) {
    if (turn === true) {
        $("h1").text(`Player 1's Turn`)
    }
    else if (turn === false) {
        $("h1").text(`Player 2's Turn`)
    }}
})
})

let column2 = document.querySelectorAll(".Column2")
column2.forEach(item => {
item.addEventListener("click", () => {
    playerTurn(2, count2, turn, finished)
})
item.addEventListener('click', () => {
    count2 =count2 + 1})
item.addEventListener('click', () => {
    turn = !turn;
    if (finished === false) {
    if (turn === true) {
        $("h1").text(`Player 1's Turn`)
    }
    else if (turn === false) {
        $("h1").text(`Player 2's Turn`)
    }}
})
})

let column3 = document.querySelectorAll(".Column3")
column3.forEach(item => {
item.addEventListener("click", () => {
    playerTurn(3, count3, turn, finished)
})
item.addEventListener('click', () => {
    count3 =count3 + 1})
item.addEventListener('click', () => {
    turn = !turn;
    if (finished === false) {
    if (turn === true) {
        $("h1").text(`Player 1's Turn`)
    }
    else if (turn === false) {
        $("h1").text(`Player 2's Turn`)
    }}
})
})

let column4 = document.querySelectorAll(".Column4")
column4.forEach(item => {
item.addEventListener("click", () => {
    playerTurn(4, count4, turn, finished)
})
item.addEventListener('click', () => {
    count4 =count4 + 1})
item.addEventListener('click', () => {
    turn = !turn;
    if (finished === false) {
    if (turn === true) {
        $("h1").text(`Player 1's Turn`)
    }
    else if (turn === false) {
        $("h1").text(`Player 2's Turn`)
    }}
})
})

let column5 = document.querySelectorAll(".Column5")
column5.forEach(item => {
item.addEventListener("click", () => {
    playerTurn(5, count5, turn, finished)
})
item.addEventListener('click', () => {
    count5 =count5 + 1})
item.addEventListener('click', () => {
    turn = !turn;
    if (finished === false) {
    if (turn === true) {
        $("h1").text(`Player 1's Turn`)
    }
    else if (turn === false) {
        $("h1").text(`Player 2's Turn`)
    }}
})
})

let column6 = document.querySelectorAll(".Column6")
column6.forEach(item => {
item.addEventListener("click", () => {
    playerTurn(6, count6, turn, finished)
})
item.addEventListener('click', () => {
    count6 =count6 + 1})
item.addEventListener('click', () => {
    turn = !turn;
    if (finished === false) {
    if (turn === true) {
        $("h1").text(`Player 1's Turn`)
    }
    else if (turn === false) {
        $("h1").text(`Player 2's Turn`)
    }}
})
})
}
//Function that takes a player's Turn
function playerTurn(num, count, pturn, finished) {
    console.log(finished)
    if (finished === true) {alert("The Game is already over!")
    } else {
    if (count > 5) {alert("This column is full. Try a different one!")
    }
    else {
        if (pturn === true) {
        let piece = document.querySelector(`#cell-${num}${count}`)
        piece.innerHTML = "X"}
        else if (pturn === false) {
            let piece = document.querySelector(`#cell-${num}${count}`)
            piece.innerHTML = "O"}
        checkWin(num, count, pturn)
        gameTurn = gameTurn + 1
        }
    }
}
// Function that checks the various win conditions
function checkWin(num, count, pturn) {
    let victory = 1
    // Vertical Check
    if (count >2) {
        if (pturn === true) {
            for (let i=1; i <4; i++) {
                let piece = document.querySelector(`#cell-${num}${count-i}`)
                if (piece.innerHTML === 'X') {victory = victory + 1}}
            if (victory === 4) {gameOver(1, pturn)}
        }
        else if (pturn === false) {
            for (let i=1; i <4; i++) {
                let piece = document.querySelector(`#cell-${num}${count-i}`)
                if (piece.innerHTML === 'O') {victory = victory + 1}}
            if (victory === 4) {gameOver(2, pturn)}
        }
    }
    // Left Check
    if (num >= 3) {
        victory = 1
        if (pturn === true) {
            for (let i=1; i <4; i++) {
                let piece = document.querySelector(`#cell-${num-i}${count}`)
                if (piece.innerHTML === 'X') {victory = victory + 1}}
            if (victory >= 4) {gameOver(1, pturn)}
        }
        else if (pturn === false) {
            for (let i=1; i <4; i++) {
                let piece = document.querySelector(`#cell-${num-i}${count}`)
                if (piece.innerHTML === 'O') {victory = victory + 1}}
            if (victory >= 4) {gameOver(2, pturn)}
        }
    }
    // Right Check
    if (num <= 3) {
        victory = 1
        if (pturn === true) {
            for (let i=1; i <4; i++) {
                let piece = document.querySelector(`#cell-${num+i}${count}`)
                if (piece.innerHTML === 'X') {victory = victory + 1}}
            if (victory >= 4) {gameOver(1, pturn)}
        }
        else if (pturn === false) {
            for (let i=1; i <4; i++) {
                let piece = document.querySelector(`#cell-${num+i}${count}`)
                if (piece.innerHTML === 'O') {victory = victory + 1}}
            if (victory >= 4) {gameOver(2, pturn)}
        }
    }
    // Up right diagonal check
    if (num <= 3 && count <3) {
        victory = 1
        if (pturn === true) {
            for (let i=1; i <4; i++) {
                let piece = document.querySelector(`#cell-${num+i}${count+i}`)
                if (piece.innerHTML === 'X') {victory = victory + 1}}
            if (victory >= 4) {gameOver(1, pturn)}
        }
        else if (pturn === false) {
            for (let i=1; i <4; i++) {
                let piece = document.querySelector(`#cell-${num+i}${count+i}`)
                if (piece.innerHTML === 'O') {victory = victory + 1}}
            if (victory >= 4){gameOver(2, pturn)}
        }
    }
    // Down Left Diagonal Check
    if (num >= 3 && count >2) {
        victory = 1
        if (pturn === true) {
            for (let i=1; i <4; i++) {
                let piece = document.querySelector(`#cell-${num-i}${count-i}`)
                if (piece.innerHTML === 'X') {victory = victory + 1}}
            if (victory >= 4 ) {gameOver(1, pturn)}
        }
        else if (pturn === false) {
            for (let i=1; i <4; i++) {
                let piece = document.querySelector(`#cell-${num-i}${count-i}`)
                if (piece.innerHTML === 'O') {victory = victory + 1}}
            if (victory >= 4) {gameOver(2, pturn)}
        }
    }

    // Up left Diagonal Check
    if (num > 2 && count <3) {
        victory = 1
        if (pturn === true) {
            for (let i=1; i <4; i++) {
                let piece = document.querySelector(`#cell-${num-i}${count+i}`)
                if (piece.innerHTML === 'X') {victory = victory + 1}}
            if (victory >= 4) {gameOver(1, pturn)}
        }
        else if (pturn === false) {
            for (let i=1; i <4; i++) {
                let piece = document.querySelector(`#cell-${num-i}${count+i}`)
                if (piece.innerHTML === 'O') {victory = victory + 1}}
            if (victory >= 4) {gameOver(2, pturn)}
        }
    }
    // Down Right Diagonal Check
    if (num <= 3 && count >2) {
        victory = 1
        if (pturn === true) {
            for (let i=1; i <4; i++) {
                let piece = document.querySelector(`#cell-${num+i}${count-i}`)
                if (piece.innerHTML === 'X') {victory = victory + 1}}
            if (victory >= 4) { gameOver(1, pturn)}
        }
        else if (pturn === false) {
            for (let i=1; i <4; i++) {
                let piece = document.querySelector(`#cell-${num+i}${count-i}`)
                if (piece.innerHTML === 'O') {victory = victory + 1}}
            if (victory >= 4){ gameOver(2, pturn)}
        }
    }
    // 1 left, 2 right check
    if (num > 0 && num < 5) {
        victory = 1 
        if (pturn === true) {
            let piece = document.querySelector(`#cell-${num-1}${count}`)
            if (piece.innerHTML === 'X') {victory = victory + 1}
            piece = document.querySelector(`#cell-${num+1}${count}`)
            if (piece.innerHTML === 'X') {victory = victory + 1}
            piece = document.querySelector(`#cell-${num+2}${count}`)
            if (piece.innerHTML === 'X') {victory = victory + 1}
            if (victory >= 4){ gameOver(1, pturn)}
        }
        else if (pturn === false) {
            let piece = document.querySelector(`#cell-${num-1}${count}`)
            if (piece.innerHTML === 'O') {victory = victory + 1}
            piece = document.querySelector(`#cell-${num+1}${count}`)
            if (piece.innerHTML === 'O') {victory = victory + 1}
            piece = document.querySelector(`#cell-${num+2}${count}`)
            if (piece.innerHTML === 'O') {victory = victory + 1}
            if (victory >= 4){ gameOver(2, pturn)}
        }
    }
    // 2 left, 1 right check
    if (num > 1 && num < 6) {
        victory = 1 
        if (pturn === true) {
            let piece = document.querySelector(`#cell-${num-1}${count}`)
            if (piece.innerHTML === 'X') {victory = victory + 1}
            piece = document.querySelector(`#cell-${num-2}${count}`)
            if (piece.innerHTML === 'X') {victory = victory + 1}
            piece = document.querySelector(`#cell-${num+1}${count}`)
            if (piece.innerHTML === 'X') {victory = victory + 1}
            if (victory >= 4){ gameOver(1, pturn)}
        }
        else if (pturn === false) {
            let piece = document.querySelector(`#cell-${num-1}${count}`)
            if (piece.innerHTML === 'O') {victory = victory + 1}
            piece = document.querySelector(`#cell-${num-2}${count}`)
            if (piece.innerHTML === 'O') {victory = victory + 1}
            piece = document.querySelector(`#cell-${num+1}${count}`)
            if (piece.innerHTML === 'O') {victory = victory + 1}
            if (victory >= 4){ gameOver(2, pturn)}
        }
    }
    // Up Left 2, down right 1 check
    if (num > 1 && num < 6 && count < 4 && count > 0) {
        victory = 1
        if (pturn === true) {
            let piece = document.querySelector(`#cell-${num-1}${count+1}`)
            if (piece.innerHTML === 'X') {victory = victory + 1}
            piece = document.querySelector(`#cell-${num-2}${count+2}`)
            if (piece.innerHTML === 'X') {victory = victory + 1}
            piece = document.querySelector(`#cell-${num+1}${count-1}`)
            if (piece.innerHTML === 'X') {victory = victory + 1}
            if (victory >= 4){ gameOver(1, pturn)}
        }
        else if (pturn === false) {
            let piece = document.querySelector(`#cell-${num-1}${count+1}`)
            if (piece.innerHTML === 'O') {victory = victory + 1}
            piece = document.querySelector(`#cell-${num-2}${count+2}`)
            if (piece.innerHTML === 'O') {victory = victory + 1}
            piece = document.querySelector(`#cell-${num+1}${count-1}`)
            if (piece.innerHTML === 'O') {victory = victory + 1}
            if (victory >= 4){ gameOver(2, pturn)}
        }
    }
    // Up Left 1, down right 2 check
    if (num > 0 && num < 5 && count < 5 && count > 1) {
        victory = 1
        if (pturn === true) {
            let piece = document.querySelector(`#cell-${num-1}${count+1}`)
            if (piece.innerHTML === 'X') {victory = victory + 1}
            piece = document.querySelector(`#cell-${num+1}${count-1}`)
            if (piece.innerHTML === 'X') {victory = victory + 1}
            piece = document.querySelector(`#cell-${num+2}${count-2}`)
            if (piece.innerHTML === 'X') {victory = victory + 1}
            if (victory >= 4){ gameOver(1, pturn)}
        }
        else if (pturn === false) {
            let piece = document.querySelector(`#cell-${num-1}${count+1}`)
            if (piece.innerHTML === 'O') {victory = victory + 1}
            piece = document.querySelector(`#cell-${num+1}${count-1}`)
            if (piece.innerHTML === 'O') {victory = victory + 1}
            piece = document.querySelector(`#cell-${num+2}${count-2}`)
            if (piece.innerHTML === 'O') {victory = victory + 1}
            if (victory >= 4){ gameOver(2, pturn)}
        }
    }
    // Up right 1, down left 2 check
    if (num < 6 && num > 1 && count < 5 && count > 1) {
        victory = 1
        if (pturn === true) {
            let piece = document.querySelector(`#cell-${num-1}${count-1}`)
            if (piece.innerHTML === 'X') {victory = victory + 1}
            piece = document.querySelector(`#cell-${num+1}${count+1}`)
            if (piece.innerHTML === 'X') {victory = victory + 1}
            piece = document.querySelector(`#cell-${num-2}${count-2}`)
            if (piece.innerHTML === 'X') {victory = victory + 1}
            if (victory >= 4){ gameOver(1, pturn)}
        }
        else if (pturn === false) {
            let piece = document.querySelector(`#cell-${num+1}${count+1}`)
            if (piece.innerHTML === 'O') {victory = victory + 1}
            piece = document.querySelector(`#cell-${num-1}${count-1}`)
            if (piece.innerHTML === 'O') {victory = victory + 1}
            piece = document.querySelector(`#cell-${num-2}${count-2}`)
            if (piece.innerHTML === 'O') {victory = victory + 1}
            if (victory >= 4){ gameOver(2, pturn)}
        }
    }
    // Up right 2, down left 1 check
    if (num < 5 && num > 0 && count < 4 && count > 0) {
        victory = 1
        if (pturn === true) {
            let piece = document.querySelector(`#cell-${num-1}${count-1}`)
            if (piece.innerHTML === 'X') {victory = victory + 1}
            piece = document.querySelector(`#cell-${num+1}${count+1}`)
            if (piece.innerHTML === 'X') {victory = victory + 1}
            piece = document.querySelector(`#cell-${num+2}${count+2}`)
            if (piece.innerHTML === 'X') {victory = victory + 1}
            if (victory >= 4){ gameOver(1, pturn)}
        }
        else if (pturn === false) {
            let piece = document.querySelector(`#cell-${num+1}${count+1}`)
            if (piece.innerHTML === 'O') {victory = victory + 1}
            piece = document.querySelector(`#cell-${num-1}${count-1}`)
            if (piece.innerHTML === 'O') {victory = victory + 1}
            piece = document.querySelector(`#cell-${num+2}${count+2}`)
            if (piece.innerHTML === 'O') {victory = victory + 1}
            if (victory >= 4){ gameOver(2, pturn)}
        }
    }
    // Check if the board is full
    if (gameTurn === 41) {
        alert('The game is a tie!')
        $('h1').text('The game is a tie!')
        finished = true
        return finished
    }
}
// Function that ends the game and ensures no more moves can be made
function gameOver(num, pturn) {
    alert(`Player ${num} wins!`)
    $("h1").text(`Player ${num} wins!`)
    finished = true
    return finished
}
// Initializes the start game function
let gameTurn = 0
let start = document.querySelector("#start-game")
start.addEventListener("click", () => {
	startGame()
})
