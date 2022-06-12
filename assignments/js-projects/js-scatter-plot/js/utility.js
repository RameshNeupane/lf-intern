// generate random number for coordinate x and y
const createRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

// input: 10 output: 10px
const toPx = (num) => {
  return `${num}px`;
};
