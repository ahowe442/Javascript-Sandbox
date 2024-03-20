// **Instructions:**

// Use some of the array methods that we looked at to mutate the following array to = the expected result below:

const arr = [1, 2, 3, 4, 5];
x = arr.unshift(0);
x = arr.push(6);
x = arr.reverse();
console.log(x);
// [6, 5, 4, 3, 2, 1, 0];

// Combine `arr1` and `arr2` into a new array called `arr3` with the following elements:

// ```js
let arr3 = [];
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];
// ````

// Notice that both `arr1` and `arr2` include the number 5. You will have to find a way to get rid of the extra 5.

// **Expected Result:**

// ```js
// console.log(arr3);
// // [1,2,3,4,5,6,7,8,9,10]
// ```

y = arr1.pop();

arr3 = [...arr1, ...arr2];
console.log(arr3);

const arr4 = [1, 2, 3, 4, 5];
const arr5 = [5, 6, 7, 8, 9, 10];
// Solution 2
const arr6 = arr4.slice(0, 4).concat(arr5);
console.log(arr6);

// Solution 3
const arr7 = [1, 2, 3, 4, 5];
const arr8 = [5, 6, 7, 8, 9, 10];

const arr9 = [...arr7, ...arr8];
arr9.splice(4, 1);
console.log(arr9);
