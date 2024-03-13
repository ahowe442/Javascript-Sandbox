// These values are stored on the stack.
const name = "John";
const age = 30;

// Reference values are stored on teh heap.
const person = {
  name: "brad",
  age: 40,
};

let newName = name;
newName = "Jonathan";

let newPerson = person;
newPerson.name = "Abby";

console.log(name, newName);
console.log(person, newPerson);
