const fruits = [
  { id: 1, name: "Banana", color: "Yellow" },
  { id: 2, name: "Apple", color: "Red" },
];

const searchByName = (fruits, value) => {
  for (const obj of fruits) {
    if (obj.name === value) {
      return obj;
    }
  }
};

const searchByKey = (fruits, key, value) => {
  for (const obj of fruits) {
    if (obj[key] === value) {
      return obj;
    }
  }
};

const apple = searchByName(fruits, "Apple");
// apple;

const result = searchByKey(fruits, "color", "Red");
// result
