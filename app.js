const gameBoard = (() => {
  let board = [null, null, null, null, null, null, null, null, null];

  const makeMark = (index, symbol) => {
    if (board[index] === null) {
      board[index] = symbol;
    } else {
      playGame.changeCurrentPlayer();
    }
  };

  const clearBoard = () => {
    board.fill(null);
  };

  // Split gameBoard.board in sub arrays

  const makeBoardSubArray = () => {
    let row1 = gameBoard.board.slice(0, 3);
    let row2 = gameBoard.board.slice(3, 6);
    let row3 = gameBoard.board.slice(6, 9);
    const columnIndex1 = [0, 3, 6];
    let column1 = columnIndex1.map((i) => gameBoard.board[i]);
    const columnIndex2 = [1, 4, 7];
    let column2 = columnIndex2.map((i) => gameBoard.board[i]);
    const columnIndex3 = [2, 5, 8];
    let column3 = columnIndex3.map((i) => gameBoard.board[i]);
    const diagonalIndex1 = [0, 4, 8];
    let diagonal1 = diagonalIndex1.map((i) => gameBoard.board[i]);
    const diagonalIndex2 = [6, 4, 2];
    let diagonal2 = diagonalIndex2.map((i) => gameBoard.board[i]);

    let arrayOfSub = [
      row1,
      row2,
      row3,
      column1,
      column2,
      column3,
      diagonal1,
      diagonal2,
    ];

    return arrayOfSub;
  };

  return { board, makeMark, clearBoard, makeBoardSubArray };
})();

const player = (symbol) => {
  return { symbol };
};

const displayController = (() => {
  let cells = document.querySelectorAll(".cell");
  let resultDiv = document.querySelector("#resultDiv");

  const populateCells = () => {
    cells.forEach((cell, index) => {
      cell.textContent = gameBoard.board[index];
    });
  };

  const clickFunction = (index) => {
    playGame.playMove(index);
    playGame.checkDraw();
    playGame.checkWin();
  };

  const addClickListener = () => {
    cells.forEach((cell, index) => {
      cell.addEventListener("click", () => clickFunction(index));
    });
  };

  return { populateCells, addClickListener, resultDiv };
})();

const playGame = (() => {
  const player1 = player("X");
  const player2 = player("O");

  let currentPlayer = player1;

  const getCurrentPlayer = () => {
    return currentPlayer;
  };

  const changeCurrentPlayer = () => {
    if (currentPlayer === player1) {
      currentPlayer = player2;
    } else {
      currentPlayer = player1;
    }
  };

  const playMove = (index) => {
    gameBoard.makeMark(index, currentPlayer.symbol);
    displayController.populateCells();
    changeCurrentPlayer();
  };

  const checkDraw = () => {
    if (!gameBoard.board.includes(null)) {
      displayController.resultDiv.textContent = "Game is a draw";
      return true;
    }
  };

  const checkWin = () => {
    let arrayOfSub = gameBoard.makeBoardSubArray();

    if (
      arrayOfSub.some((sub) =>
        sub.every((val) => val === sub[0] && val != null)
      )
    ) {
      changeCurrentPlayer();
      displayController.resultDiv.textContent = `${
        playGame.getCurrentPlayer().symbol
      } has won`;
      gameOver();
    }
  };

  const gameOver = () => {
    gameBoard.clearBoard();
    displayController.resultDiv.textContent += " ,want to play again?";
  };

  return {
    playMove,
    changeCurrentPlayer,
    getCurrentPlayer,
    checkDraw,
    checkWin,
  };
})();

displayController.addClickListener();
