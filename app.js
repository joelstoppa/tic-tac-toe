const gameBoard = (() => {
  let board = ["X", "O", "O", "X", "X", "X", "O", "O", "X"];

  return { board };
})();

console.log(gameBoard.board);

const playerFactory = (name, symbol) => {
  return { name, symbol };
};

const displayController = ((board) => {
  let cells = document.querySelectorAll(".cell");

  const populateCells = () => {
    cells.forEach((cell, index) => {
      cell.textContent = board[index];
    });
    console.log(cells.length);
  };

  return { populateCells };
})(gameBoard.board);

displayController.populateCells();
