function sayHello() {
  console.log('Hello World');
}

sayHello(); //invoking or calling a function.

//num1 and num2 are called parameters when declaring/defining the function.
function add(num1, num2) {
  console.log(num1 + num2);
}
// When you call this function you pass in "arguments", so 5 & 10 are arguments.
add(5, 10);

function subtract(num1, num2) {
  return num1 - num2;
}
// The reason we return something is
//becasue we want to do something with that value,
subtract(10, 2);

const result = subtract(10, 2);
console.log(result, subtract(20, 5));
