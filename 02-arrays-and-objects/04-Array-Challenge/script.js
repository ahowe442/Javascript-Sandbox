// **Instructions:**

// Use some of the array methods that we looked at to mutate the following array to = the expected result below:

const arr = [1, 2, 3, 4, 5];
x = arr.unshift(0); // Adds the zero at the beginning
x = arr.push(6); // Adds the six at the end
x = arr.reverse(); // Reverses the order
console.log(x);
// [6, 5, 4, 3, 2, 1, 0];

// Challenge 2
// Combine `arr1` and `arr2` into a new array called `arr3` with the following elements:
let arr3 = [];
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

// **Expected Result:**
// console.log(arr3);
// // [1,2,3,4,5,6,7,8,9,10]

y = arr1.pop();
arr3 = [...arr1, ...arr2];
console.log(arr3);

// Solution 2
const arr4 = [1, 2, 3, 4, 5];
const arr5 = [5, 6, 7, 8, 9, 10];
const arr6 = arr4.slice(0, 4).concat(arr5);
console.log(arr6);

// Solution 3
const arr7 = [1, 2, 3, 4, 5];
const arr8 = [5, 6, 7, 8, 9, 10];
const arr9 = [...arr7, ...arr8];
arr9.splice(4, 1);
console.log(arr9);
