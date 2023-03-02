const gameBoard = (() => {
  let board = ["X", "", "O", "X", "X", "X", "O", "O", "X"];

  const makeMark = (index, symbol) => {
    board[index] = symbol;
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

  return { populateCells };
})();

const playGame = (() => {
  const player1 = player("X");
  const player2 = player("O");

  let currentPlayer = player1;

  const changeCurrentPlayer = () => {
    if (currentPlayer === player1) {
      currentPlayer = player2;
    } else {
      currentPlayer = player1;
    }
  };
})();

displayController.populateCells();
