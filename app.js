const gameBoard = () => {
  let board = [null, null, null, null, null, null, null, null, null];

  return { board };
};

const playerFactory = (name, symbol) => {
  return { name, symbol };
};
