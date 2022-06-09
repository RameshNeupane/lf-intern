/* 
  Write a program to sort an array of object by a target key. The original array should remain unchanged.
  var arr = [{
      id: 1,
      name: 'John',
  }, {
      id: 2,
      name: 'Mary',
  }, {
      id: 3,
      name: 'Andrew',
  }];

  function sortBy(array, key) {
      ...
  }

  var sorted = sortBy(arr, 'name');

*/

const sortByKey = ([...arr], key) => {
  for (let i = 0; i <= arr.length - 1; i++) {
    for (let j = i; j <= arr.length - 1; j++) {
      if (arr[i][key] > arr[j][key]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }

  return arr;
};

let arr = [
  {
    id: 1,
    name: "John",
  },
  {
    id: 2,
    name: "Mary",
  },
  {
    id: 3,
    name: "Andrew",
  },
];

const output = sortByKey(arr, "name");
console.log(output);
console.log(arr);
