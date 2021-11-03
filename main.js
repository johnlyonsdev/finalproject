// Set up our empty variables
var board;
let pcount = null
let turn = null
let count = [0,0,0,0,0,0,0]
let finished = false

// Initialize Gameboard
function initializeBoard() {
    board = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
}

function startGame2() {
    initializeBoard();
    pcount = 2
    turn = true
    $("h1").text(`Player 1's Turn`)
    // Make Column 0 Playable in a 1 player game
    let column0 = document.querySelectorAll(".Column0")
    column0.forEach(item => {
    item.addEventListener("click", () => {
    playerTurn(0, turn, finished)
    })
    item.addEventListener('click', () => {
        turn = !turn;
        if (finished === false) {
            if (turn === true) {
                $("h1").text(`Player 1's Turn`)}
            else if (turn === false) {$("h1").text(`Player 2's Turn`)
        }}
    })
    })
    // Make Column 1 Playable in a 2 player game
    let column1 = document.querySelectorAll(".Column1")
    column1.forEach(item => {
    item.addEventListener("click", () => {
        playerTurn(1, turn, finished)
    })
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
    // Make Column 2 Playable in a 2 player game
    let column2 = document.querySelectorAll(".Column2")
    column2.forEach(item => {
    item.addEventListener("click", () => {
        playerTurn(2, turn, finished)
    })
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
    // Make Column 3 Playable in a 2 player game
    let column3 = document.querySelectorAll(".Column3")
    column3.forEach(item => {
    item.addEventListener("click", () => {
        playerTurn(3, turn, finished)
    })
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
    // Make Column 4 Playable in a 2 player game
    let column4 = document.querySelectorAll(".Column4")
    column4.forEach(item => {
    item.addEventListener("click", () => {
        playerTurn(4, turn, finished)
    })
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
    // Make Column 5 Playable in a 2 player game
    let column5 = document.querySelectorAll(".Column5")
    column5.forEach(item => {
    item.addEventListener("click", () => {
        playerTurn(5, turn, finished)
    })
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
    // Make Column 6 Playable in a 2 player game
    let column6 = document.querySelectorAll(".Column6")
    column6.forEach(item => {
    item.addEventListener("click", () => {
        playerTurn(6, turn, finished)
    })
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
function playerTurn(num, pturn, finished) {
    console.log(finished)
    if (finished === true) {alert("The Game is already over!")
    } else {
    if (count[num] > 5) {alert("This column is full. Try a different one!")
    }
    else {
        if (pturn === true) {
        let piece = document.querySelector(`#cell-${num}${count[num]}`)
        piece.innerHTML = "X"}
        else if (pturn === false) {
            let piece = document.querySelector(`#cell-${num}${count[num]}`)
            piece.innerHTML = "O"}
        checkWin(num, pturn)
        gameTurn = gameTurn + 1
        count[num] = count[num]+1
        }
    }
}
// Function that checks the various win conditions
function checkWin(num, pturn) {
    let victory = 1
    // Vertical Check
    if (count[num] >2) {
        console.log("vert check")
        if (pturn === true) {
            for (let i=1; i <4; i++) {
                let piece = document.querySelector(`#cell-${num}${count[num]-i}`)
                if (piece.innerHTML === 'X') {victory = victory + 1}}
            if (victory === 4) {gameOver(1, pturn)}
        }
        else if (pturn === false) {
            for (let i=1; i <4; i++) {
                let piece = document.querySelector(`#cell-${num}${count[num]-i}`)
                if (piece.innerHTML === 'O') {victory = victory + 1}}
            if (victory === 4) {gameOver(2, pturn)}
        }
    }
    // Left Check
    if (num >= 3) {
        victory = 1
        if (pturn === true) {
            for (let i=1; i <4; i++) {
                let piece = document.querySelector(`#cell-${num-i}${count[num]}`)
                if (piece.innerHTML === 'X') {victory = victory + 1}}
            if (victory >= 4) {gameOver(1, pturn)}
        }
        else if (pturn === false) {
            for (let i=1; i <4; i++) {
                let piece = document.querySelector(`#cell-${num-i}${count[num]}`)
                if (piece.innerHTML === 'O') {victory = victory + 1}}
            if (victory >= 4) {gameOver(2, pturn)}
        }
    }
    // Right Check
    if (num <= 3) {
        victory = 1
        if (pturn === true) {
            for (let i=1; i <4; i++) {
                console.log(num, count[num])
                let piece = document.querySelector(`#cell-${num+i}${count[num]}`)
                if (piece.innerHTML === 'X') {victory = victory + 1}}
            if (victory >= 4) {gameOver(1, pturn)}
        }
        else if (pturn === false) {
            for (let i=1; i <4; i++) {
                let piece = document.querySelector(`#cell-${num+i}${count[num]}`)
                if (piece.innerHTML === 'O') {victory = victory + 1}}
            if (victory >= 4) {gameOver(2, pturn)}
        }
    }
    // Up right diagonal check
    if (num <= 3 && count[num] <3) {
        victory = 1
        if (pturn === true) {
            for (let i=1; i <4; i++) {
                let piece = document.querySelector(`#cell-${num+i}${count[num]+i}`)
                if (piece.innerHTML === 'X') {victory = victory + 1}}
            if (victory >= 4) {gameOver(1, pturn)}
        }
        else if (pturn === false) {
            for (let i=1; i <4; i++) {
                let piece = document.querySelector(`#cell-${num+i}${count[num]+i}`)
                if (piece.innerHTML === 'O') {victory = victory + 1}}
            if (victory >= 4){gameOver(2, pturn)}
        }
    }
    // Down Left Diagonal Check
    if (num >= 3 && count[num] >2) {
        victory = 1
        if (pturn === true) {
            for (let i=1; i <4; i++) {
                let piece = document.querySelector(`#cell-${num-i}${count[num]-i}`)
                if (piece.innerHTML === 'X') {victory = victory + 1}}
            if (victory >= 4 ) {gameOver(1, pturn)}
        }
        else if (pturn === false) {
            for (let i=1; i <4; i++) {
                let piece = document.querySelector(`#cell-${num-i}${count[num]-i}`)
                if (piece.innerHTML === 'O') {victory = victory + 1}}
            if (victory >= 4) {gameOver(2, pturn)}
        }
    }

    // Up left Diagonal Check
    if (num > 2 && count[num] <3) {
        victory = 1
        if (pturn === true) {
            for (let i=1; i <4; i++) {
                let piece = document.querySelector(`#cell-${num-i}${count[num]+i}`)
                if (piece.innerHTML === 'X') {victory = victory + 1}}
            if (victory >= 4) {gameOver(1, pturn)}
        }
        else if (pturn === false) {
            for (let i=1; i <4; i++) {
                let piece = document.querySelector(`#cell-${num-i}${count[num]+i}`)
                if (piece.innerHTML === 'O') {victory = victory + 1}}
            if (victory >= 4) {gameOver(2, pturn)}
        }
    }
    // Down Right Diagonal Check
    if (num <= 3 && count[num] >2) {
        victory = 1
        if (pturn === true) {
            for (let i=1; i <4; i++) {
                let piece = document.querySelector(`#cell-${num+i}${count[num]-i}`)
                if (piece.innerHTML === 'X') {victory = victory + 1}}
            if (victory >= 4) { gameOver(1, pturn)}
        }
        else if (pturn === false) {
            for (let i=1; i <4; i++) {
                let piece = document.querySelector(`#cell-${num+i}${count[num]-i}`)
                if (piece.innerHTML === 'O') {victory = victory + 1}}
            if (victory >= 4){ gameOver(2, pturn)}
        }
    }
    // 1 left, 2 right check
    if (num > 0 && num < 5) {
        victory = 1 
        if (pturn === true) {
            let piece = document.querySelector(`#cell-${num-1}${count[num]}`)
            if (piece.innerHTML === 'X') {victory = victory + 1}
            piece = document.querySelector(`#cell-${num+1}${count[num]}`)
            if (piece.innerHTML === 'X') {victory = victory + 1}
            piece = document.querySelector(`#cell-${num+2}${count[num]}`)
            if (piece.innerHTML === 'X') {victory = victory + 1}
            if (victory >= 4){ gameOver(1, pturn)}
        }
        else if (pturn === false) {
            let piece = document.querySelector(`#cell-${num-1}${count[num]}`)
            if (piece.innerHTML === 'O') {victory = victory + 1}
            piece = document.querySelector(`#cell-${num+1}${count[num]}`)
            if (piece.innerHTML === 'O') {victory = victory + 1}
            piece = document.querySelector(`#cell-${num+2}${count[num]}`)
            if (piece.innerHTML === 'O') {victory = victory + 1}
            if (victory >= 4){ gameOver(2, pturn)}
        }
    }
    // 2 left, 1 right check
    if (num > 1 && num < 6) {
        victory = 1 
        if (pturn === true) {
            let piece = document.querySelector(`#cell-${num-1}${count[num]}`)
            if (piece.innerHTML === 'X') {victory = victory + 1}
            piece = document.querySelector(`#cell-${num-2}${count[num]}`)
            if (piece.innerHTML === 'X') {victory = victory + 1}
            piece = document.querySelector(`#cell-${num+1}${count[num]}`)
            if (piece.innerHTML === 'X') {victory = victory + 1}
            if (victory >= 4){ gameOver(1, pturn)}
        }
        else if (pturn === false) {
            let piece = document.querySelector(`#cell-${num-1}${count[num]}`)
            if (piece.innerHTML === 'O') {victory = victory + 1}
            piece = document.querySelector(`#cell-${num-2}${count[num]}`)
            if (piece.innerHTML === 'O') {victory = victory + 1}
            piece = document.querySelector(`#cell-${num+1}${count[num]}`)
            if (piece.innerHTML === 'O') {victory = victory + 1}
            if (victory >= 4){ gameOver(2, pturn)}
        }
    }
    // Up Left 2, down right 1 check
    if (num > 1 && num < 6 && count[num] < 4 && count[num] > 0) {
        victory = 1
        if (pturn === true) {
            let piece = document.querySelector(`#cell-${num-1}${count[num]+1}`)
            if (piece.innerHTML === 'X') {victory = victory + 1}
            piece = document.querySelector(`#cell-${num-2}${count[num]+2}`)
            if (piece.innerHTML === 'X') {victory = victory + 1}
            piece = document.querySelector(`#cell-${num+1}${count[num]-1}`)
            if (piece.innerHTML === 'X') {victory = victory + 1}
            if (victory >= 4){ gameOver(1, pturn)}
        }
        else if (pturn === false) {
            let piece = document.querySelector(`#cell-${num-1}${count[num]+1}`)
            if (piece.innerHTML === 'O') {victory = victory + 1}
            piece = document.querySelector(`#cell-${num-2}${count[num]+2}`)
            if (piece.innerHTML === 'O') {victory = victory + 1}
            piece = document.querySelector(`#cell-${num+1}${count[num]-1}`)
            if (piece.innerHTML === 'O') {victory = victory + 1}
            if (victory >= 4){ gameOver(2, pturn)}
        }
    }
    // Up Left 1, down right 2 check
    if (num > 0 && num < 5 && count[num] < 5 && count[num] > 1) {
        victory = 1
        if (pturn === true) {
            let piece = document.querySelector(`#cell-${num-1}${count[num]+1}`)
            if (piece.innerHTML === 'X') {victory = victory + 1}
            piece = document.querySelector(`#cell-${num+1}${count[num]-1}`)
            if (piece.innerHTML === 'X') {victory = victory + 1}
            piece = document.querySelector(`#cell-${num+2}${count[num]-2}`)
            if (piece.innerHTML === 'X') {victory = victory + 1}
            if (victory >= 4){ gameOver(1, pturn)}
        }
        else if (pturn === false) {
            let piece = document.querySelector(`#cell-${num-1}${count[num]+1}`)
            if (piece.innerHTML === 'O') {victory = victory + 1}
            piece = document.querySelector(`#cell-${num+1}${count[num]-1}`)
            if (piece.innerHTML === 'O') {victory = victory + 1}
            piece = document.querySelector(`#cell-${num+2}${count[num]-2}`)
            if (piece.innerHTML === 'O') {victory = victory + 1}
            if (victory >= 4){ gameOver(2, pturn)}
        }
    }
    // Up right 1, down left 2 check
    if (num < 6 && num > 1 && count[num] < 5 && count[num] > 1) {
        victory = 1
        if (pturn === true) {
            let piece = document.querySelector(`#cell-${num-1}${count[num]-1}`)
            if (piece.innerHTML === 'X') {victory = victory + 1}
            piece = document.querySelector(`#cell-${num+1}${count[num]+1}`)
            if (piece.innerHTML === 'X') {victory = victory + 1}
            piece = document.querySelector(`#cell-${num-2}${count[num]-2}`)
            if (piece.innerHTML === 'X') {victory = victory + 1}
            if (victory >= 4){ gameOver(1, pturn)}
        }
        else if (pturn === false) {
            let piece = document.querySelector(`#cell-${num+1}${count[num]+1}`)
            if (piece.innerHTML === 'O') {victory = victory + 1}
            piece = document.querySelector(`#cell-${num-1}${count[num]-1}`)
            if (piece.innerHTML === 'O') {victory = victory + 1}
            piece = document.querySelector(`#cell-${num-2}${count[num]-2}`)
            if (piece.innerHTML === 'O') {victory = victory + 1}
            if (victory >= 4){ gameOver(2, pturn)}
        }
    }
    // Up right 2, down left 1 check
    if (num < 5 && num > 0 && count[num] < 4 && count[num] > 0) {
        victory = 1
        if (pturn === true) {
            let piece = document.querySelector(`#cell-${num-1}${count[num]-1}`)
            if (piece.innerHTML === 'X') {victory = victory + 1}
            piece = document.querySelector(`#cell-${num+1}${count[num]+1}`)
            if (piece.innerHTML === 'X') {victory = victory + 1}
            piece = document.querySelector(`#cell-${num+2}${count[num]+2}`)
            if (piece.innerHTML === 'X') {victory = victory + 1}
            if (victory >= 4){ gameOver(1, pturn)}
        }
        else if (pturn === false) {
            let piece = document.querySelector(`#cell-${num+1}${count[num]+1}`)
            if (piece.innerHTML === 'O') {victory = victory + 1}
            piece = document.querySelector(`#cell-${num-1}${count[num]-1}`)
            if (piece.innerHTML === 'O') {victory = victory + 1}
            piece = document.querySelector(`#cell-${num+2}${count[num]+2}`)
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
function gameOver(num) {
    if (pcount === 2) {
    alert(`Player ${num} wins!`)
    $("h1").text(`Player ${num} wins!`)}
    else if (pcount === 1) {
        if (num === 1) {
            alert('You Win!')
            $("h1").text("You Win!")}
        else if (num === 2) {
            alert('You lose!')
            $('h1').text("You lose!")
        }
    }
    finished = true
    return finished
}
// Initializes the start game function
let gameTurn = 0
let start2 = document.querySelector("#start-game2")
start2.addEventListener("click", () => {
	startGame2()
})

let start1 = document.querySelector("#start-game1")
start1.addEventListener("click", () => {
    startGame1()
})

function startGame1() {
    initializeBoard();
    turn = true
    pcount = 1
    $("h1").text("It's your turn!")

    let column0 = document.querySelectorAll(".Column0")
    column0.forEach(item => {
        item.addEventListener("click", () => {
            console.log(pcount)
            playerTurn1(0, finished)
            })
        })
    let column1 = document.querySelectorAll(".Column1")
    column1.forEach(item => {
        item.addEventListener("click", () => {
            playerTurn1(1, finished)
            })
        })
    let column2 = document.querySelectorAll(".Column2")
    column2.forEach(item => {
        item.addEventListener("click", () => {
            playerTurn1(2, finished)
            })
        })
    let column3 = document.querySelectorAll(".Column3")
    column3.forEach(item => {
        item.addEventListener("click", () => {
            playerTurn1(3, finished)
            })
        })
    let column4 = document.querySelectorAll(".Column4")
    column4.forEach(item => {
        item.addEventListener("click", () => {
            playerTurn1(4, finished)
            })
        })
    let column5 = document.querySelectorAll(".Column5")
    column5.forEach(item => {
        item.addEventListener("click", () => {
            playerTurn1(5, finished)
            })
        })
    let column6 = document.querySelectorAll(".Column6")
     column6.forEach(item => {
        item.addEventListener("click", () => {
            playerTurn1(6, finished)
            })
        })

}

function playerTurn1(num, finished) {
    if (finished === true) {alert("The Game is already over!")
    } else {
    if (count[num] > 5) {alert("This column is full. Try a different one!")
    }
    else {
        console.log(pcount)
        let piece = document.querySelector(`#cell-${num}${count[num]}`)
        piece.innerHTML = "X"
        turn = true
        checkWin(num, turn)
        gameTurn = gameTurn + 1
        count[num] = count[num] + 1
        computerTurn()    
        }
    }
}

function computerTurn() {
    let randomElement = Math.floor(Math.random() * 7)
    if (count[randomElement] > 5) {
        let min = count[0]
            let minPos = 0
        for (i=0;i <count.length;i++) {
            if (min > count[i]) {
              min = count[i]
              minPos = i}}
        randomElement = minPos
    }
    let piece = document.querySelector(`#cell-${randomElement}${count[randomElement]}`)
    piece.innerHTML = 'O'
    turn = false
    checkWin(randomElement,turn)
    gameTurn = gameTurn + 1
    count[randomElement] = count[randomElement] + 1
    
}
