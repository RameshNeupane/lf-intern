/*
Write a function that transforms an array of inputs into a new array based on a provided transformation function.
var numbers = [1, 2, 3, 4];

function transform(collection, tranFunc) { …TODO }

var output = transform(numbers, function(num) {
    return num * 2;
});
output should be [2, 4, 6, 8]

*/

let numbers = [1, 2, 3, 4, 5];

// first method
const output = numbers.map((num) => {
  return num * 2;
});

console.log(output);

// second method
const mulByTwo = (num) => num * 2;

const transform = (nums, callback) => {
  let arr = [];
  for (const num of nums) {
    arr = [...arr, callback(num)];
  }
  return arr;
};
let result = transform(numbers, mulByTwo);

console.log(result);
