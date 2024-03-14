const myString = "developer";
// Abby's solution
myNewString = myString[0].toUpperCase() + myString.slice(1, 9);
// Solution 2
myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);
// Solution 3 with template literals.
myNewString = `${myString.charAt(0).toUpperCase()}${myString.substring(1)}`;
console.log(myNewString);
