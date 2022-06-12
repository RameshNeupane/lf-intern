// input: 10 into output: 10px
const toPx = (num) => {
  return `${num}px`;
};

// generate random number within the range min to max
const createRandomInt = (min = 0, max = 1) => {
  return Math.round(Math.random() * (max - min)) + min;
};
