const board = document.querySelector(".board");
const player1 = 'X';
const player2 = 'O';
let currentPlayer = player1;
const winnerDisplay = document.querySelector(".winnerTicTac");


function markBoard(area) {
    const clickedObject = area.target;

    if (clickedObject !== board) {
        if (clickedObject.innerHTML !== "X" && clickedObject.innerHTML !== "O") {
            clickedObject.innerHTML = currentPlayer;
            if (currentPlayer === player1) {
                currentPlayer = player2;
            } else {
                currentPlayer = player1;
            }

            checkForWinner();
        }
    }
    //    console.log(clickedObject);

}

function resetGame() {
    const checkReset = confirm("Are you sure you would like to clear this board?");

    if (checkReset === true) {
        for (let i = 0; i < board.children.length; i++) {
            board.children[i].innerHTML = "";
        }

        currentPlayer = player1;
        winnerDisplay.innerHTML = "";
        board.addEventListener('click', markBoard);
        board.addEventListener('touchend', markBoard);
    }
}

function checkForWinner() {
    const winningCombos = [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]
];
    const currentValues = [...board.children];

    for (let i = 0; i < currentValues.length; i++) {
        currentValues[i] = currentValues[i].innerHTML;
    }

    let boardFullCheck = 0;

    for (let y = 0; y < currentValues.length; y++) {
        if (currentValues[y] !== "") {
            boardFullCheck++;
        }
    };

    //    console.log(currentValues);
    //    console.log(boardFullCheck);


    let winner = false;
    winningCombos.forEach(winningCombo => {

            let cell1 = winningCombo[0];
            let cell2 = winningCombo[1];
            let cell3 = winningCombo[2];

            if (currentValues[cell1] === "X" && currentValues[cell2] === "X" && currentValues[cell3] === "X") {
                winnerDisplay.innerHTML = "X Wins!";
                winner = true;
                board.removeEventListener('click', markBoard);
                board.removeEventListener('touchend', markBoard);
            }
            if (currentValues[cell1] === "O" && currentValues[cell2] === "O" && currentValues[cell3] === "O") {
                winnerDisplay.innerHTML = "O Wins!";
                winner = true;
                board.removeEventListener('click', markBoard);
                board.removeEventListener('touchend', markBoard);
            }

        }

    )

    if (boardFullCheck === 9 && winner === false) {
        winnerDisplay.innerHTML = "It's a Tie!";
        board.removeEventListener('click', markBoard);
        board.removeEventListener('touchend', markBoard);
    }
};

board.addEventListener('click', markBoard);
board.addEventListener('touchend', markBoard);
reset.addEventListener('click', resetGame);