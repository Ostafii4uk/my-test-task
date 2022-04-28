const createAdd = (number) => {
  const ten = 10;

  return ten + number;
};

const addTen = createAdd;

console.log(addTen(10));
console.log(addTen(5));


const elevationToTheSquare = (array) => {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(Math.pow(array[i], 2));
  }

  return result;
}

console.log(elevationToTheSquare([1, 2, 3]));

const multipleArrayNumbers = (array) => {
  return array.reduce((acc, number) => acc * number);
};

console.log(multipleArrayNumbers([1, 2, 3]))