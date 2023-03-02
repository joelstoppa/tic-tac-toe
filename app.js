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

displayController.populateCells();
