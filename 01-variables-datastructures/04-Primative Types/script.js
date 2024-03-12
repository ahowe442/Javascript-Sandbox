// String
const firstName = "Sara";

// Number
const age = 30;
const temp = 97.89;

//Boolean
const hasKids = true;

// Null
const aptNumber = null;

//Symbol
const id = Symbol('id');

//BigInt
const n = 9000099992876543222384932432n;

// Reference Types
//Array
const numbers = [1, 2, 3, 4];

// Object
const person = {
    name: 'brad'
};

// Function (Function Object)
function sayHello() {
    console.log('Hello');
};



// Change what output refers back to.
//const output = aptNumber; // Returns null, 'object'
//https://developer.mozilla.org/en-US/docs/web/JavaScript/Reference/Operators/typeof#typeof_null

const output = sayHello;

// Console Log 
console.log(output, typeof output);





