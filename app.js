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

  return { board, makeMark, clearBoard };
})();

const player = (symbol) => {
  return { symbol };
};

const displayController = (() => {
  let cells = document.querySelectorAll(".cell");

  const populateCells = () => {
    cells.forEach((cell, index) => {
      cell.textContent = gameBoard.board[index];
    });
  };

  const addClickListener = () => {
    cells.forEach((cell, index) => {
      cell.addEventListener("click", () => {
        playGame.playMove(index);
      });
    });
  };

  return { populateCells, addClickListener };
})();

const playGame = (() => {
  const player1 = player("X");
  const player2 = player("O");

  let currentPlayer = player1;

  // Split gameBoard.board in sub arrays
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
  return { playMove, changeCurrentPlayer };
})();

displayController.addClickListener();
displayController.populateCells();
