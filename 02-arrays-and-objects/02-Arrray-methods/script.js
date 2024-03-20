let x;

const arr = [34, 55, 95, 20, 15];

// arr.push(100); //adds a value to the end of the array

// arr.pop(); //removes a value from the end of the array

// arr.unshift(99); //adds a value to the front of the array

// arr.reverse(); //reverses the order of the array

//Use to get something from the array.
x = arr.includes(20);

x = arr.indexOf(95); //If the value that is passed through is not included in the array you will get a -1

x = arr.slice(1, 4);
//x = arr.splice(1, 4); //splice changes the initial array and removes the selected elements.
// x = arr.splice(3, 1);

x = arr.splice(1, 4).reverse().toString().charAt(1);

console.log(arr, x);
