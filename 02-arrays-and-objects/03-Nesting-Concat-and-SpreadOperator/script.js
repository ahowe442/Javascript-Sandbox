let x;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'raspberry'];

//fruits.push(berries);

//x = fruits[3][1];

const allFruits = [fruits, berries];

x = allFruits[1][0];

x = fruits.concat(berries);

// Spread Operator (...)
x = [...fruits, ...berries];

// Flatten Arrays
const arr = [1, 2, [3, 4], 5, [6, 7], 8];
x = arr.flat();

// Static Methods on the Array Object.
x = Array.isArray(fruits);

// Takes a string and converts each to an element in the array.
x = Array.from('12345');

// Creates an array from a set of values.
const a = 1;
const b = 2;
const c = 3;
x = Array.of(a, b, c);

console.log(x);
