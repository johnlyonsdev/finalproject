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
function playerTurn(num, count, pturn, finished) {
    console.log(finished)
    if (finished === true) {
        alert("The Game is already over!")
    } else {
    if (count > 5) {
        alert("This column is full. Try a different one!")
    }
    else {
        console.log(pturn)
if (pturn === true) {

    let piece = document.querySelector(`#cell-${num}${count}`)
    piece.innerHTML = "X"
} else if (pturn === false) {
    let piece = document.querySelector(`#cell-${num}${count}`)
    piece.innerHTML = "O"
}
checkWin(num, count, pturn)
}}}

let start = document.querySelector("#start-game")
start.addEventListener("click", () => {
	startGame()
})

function checkWin(num, count, pturn) {
    console.log("Are we checking")
    let victory = 1
    let trueCount = count + 1
if (trueCount >= 4) {
if (pturn === true) {
    for (let i=1; i <4; i++) {
    let piece = document.querySelector(`#cell-${num}${trueCount-i}`)
    if (piece.innerHTML === 'X')
    victory = victory + 1
}
    if (victory === 4){
        gameOver(1, pturn)
    }}
else if (pturn === false) {
    for (let i=1; i <4; i++) {
        let piece = document.querySelector(`#cell-${num}${trueCount-i}`)
        if (piece.innerHTML === 'O')
        victory = victory + 1
    }
        if (victory === 4){
           gameOver(2, pturn)
        }}
}
console.log(num)
if (num >= 3) {
    victory = 1
    if (pturn === true) {
        for (let i=1; i <4; i++) {
        let piece = document.querySelector(`#cell-${num-i}${count}`)
        console.log(piece)
        if (piece.innerHTML === 'X')
        victory = victory + 1
    }console.log(victory)
        if (victory >= 4){
            gameOver(1, pturn)
        }}
    else if (pturn === false) {
        for (let i=1; i <4; i++) {
        let piece = document.querySelector(`#cell-${num-i}${count}`)
        console.log(piece)
        if (piece.innerHTML === 'O')
        victory = victory + 1
    }console.log(victory)
        if (victory >= 4){
            gameOver(2, pturn)
        }}
}
if (num <= 3) {
    victory = 1
    if (pturn === true) {
        for (let i=1; i <4; i++) {
        let piece = document.querySelector(`#cell-${num+i}${count}`)
        console.log(piece)
        if (piece.innerHTML === 'X')
        victory = victory + 1
    }console.log(victory)
        if (victory >= 4){
            gameOver(1, pturn)
        }}
    else if (pturn === false) {
        for (let i=1; i <4; i++) {
        let piece = document.querySelector(`#cell-${num+i}${count}`)
        console.log(piece)
        if (piece.innerHTML === 'O')
        victory = victory + 1
    }console.log(victory)
        if (victory >= 4){
            gameOver(2, pturn)
        }}
}

if (num <= 3 && trueCount <3) {
    console.log('Up right diagonal check')
    victory = 1
    if (pturn === true) {
        for (let i=1; i <4; i++) {
        let piece = document.querySelector(`#cell-${num+i}${count+i}`)
        console.log(piece)
        if (piece.innerHTML === 'X')
        victory = victory + 1
    }console.log(victory)
        if (victory >= 4){
            gameOver(1, pturn)
        }}
    else if (pturn === false) {
        for (let i=1; i <4; i++) {
        let piece = document.querySelector(`#cell-${num+i}${count+i}`)
        console.log(piece)
        if (piece.innerHTML === 'O')
        victory = victory + 1
    }console.log(victory)
        if (victory >= 4){
            gameOver(2, pturn)
        }}
}
if (num >= 3 && trueCount >3) {
    console.log('Down Left Diagonal Check')
    victory = 1
    if (pturn === true) {
        for (let i=1; i <4; i++) {
        let piece = document.querySelector(`#cell-${num-i}${count-i}`)
        console.log(piece)
        console.log(piece.innerHTML)
        if (piece.innerHTML === 'X')
        victory = victory + 1
    }console.log(victory)
        if (victory >= 4){
            gameOver(1, pturn)
        }}
    else if (pturn === false) {
        for (let i=1; i <4; i++) {
        let piece = document.querySelector(`#cell-${num-i}${count-i}`)
        console.log(piece)
        if (piece.innerHTML === 'O')
        victory = victory + 1
    }console.log(victory)
        if (victory >= 4){
            gameOver(2, pturn)
        }}
}


if (num >= 3 && trueCount <3) {
    console.log('Up left Diagonal Check')
    victory = 1
    if (pturn === true) {
        for (let i=1; i <4; i++) {
        let piece = document.querySelector(`#cell-${num-i}${count+i}`)
        console.log(piece)
        console.log(piece.innerHTML)
        if (piece.innerHTML === 'X')
        victory = victory + 1
    }console.log(victory)
        if (victory >= 4){
            gameOver(1, pturn)
        }}
    else if (pturn === false) {
        for (let i=1; i <4; i++) {
        let piece = document.querySelector(`#cell-${num-i}${count+i}`)
        console.log(piece)
        if (piece.innerHTML === 'O')
        victory = victory + 1
    }console.log(victory)
        if (victory >= 4){
            gameOver(2, pturn)
        }}
}

if (num <= 3 && trueCount >3) {
    console.log('Down Right Diagonal Check')
    victory = 1
    if (pturn === true) {
        for (let i=1; i <4; i++) {
        let piece = document.querySelector(`#cell-${num+i}${count-i}`)
        console.log(piece)
        console.log(piece.innerHTML)
        if (piece.innerHTML === 'X')
        victory = victory + 1
    }console.log(victory)
        if (victory >= 4){
            gameOver(1, pturn)
        }}
    else if (pturn === false) {
        for (let i=1; i <4; i++) {
        let piece = document.querySelector(`#cell-${num+i}${count-i}`)
        console.log(piece)
        if (piece.innerHTML === 'O')
        victory = victory + 1
    }console.log(victory)
        if (victory >= 4){
            gameOver(2, pturn)
        }}
}
}


function gameOver(num, pturn) {
alert(`Player ${num} wins!`)
$("h1").text(`Player ${num} wins!`)
finished = true
return finished
}
