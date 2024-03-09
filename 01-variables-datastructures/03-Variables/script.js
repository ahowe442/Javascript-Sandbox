// variables are basically containers for pieces of information
// ways to declare a varibale --> var, let, const

let firstName = 'John';
let lastName = 'Doe';

console.log(firstName, lastName);

//Naming conventions
// only lettersm nuberes, unerscores and dollar Signs.
// can't start with a number

// Multi-word formatting
// fisrtName = camelCase
// first_name = underscore
// FirstName = PascalCase
// firstname = lowercase

// reassigning variables
age = 31; 

console.log(age);

let score; 

score = 1;

console.log(score);

if (true) {
    score = score + 1
}
console.log(score);

const x = 100; 
//You can't reassign a "const" variable
/* x = 200; */
// const must be initialized, whereas let doesn't need to be i.e. const score1; would throw an error becasue it hasn't been intitalized. 


const arr = [1, 2, 3, 4];
arr.push(5);
console.log(arr);

const person = {
    name: 'Abby', 
};

person.name = 'John';
person.email = 'howe.abigail@gmail.com';

console.log(person);

