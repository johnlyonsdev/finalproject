var board;

function initializeBoard() {

    board = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
}

function updateBoard() {

    for (var i = 0; i < 9; i++) {
        var cell = board[i] || "";
        $("#cell-" + i).text(cell);
    }
}

function startGame(evt) {

    initializeBoard();

    $('#game-board td').on('click', handleClick);
    $(this).remove();
}


let start = document.querySelector("#start-game")
start.addEventListener("click", () => {
	alert("John's favorite color is orange!")
})