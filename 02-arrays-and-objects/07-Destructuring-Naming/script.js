const firstName = 'John';
const lastName = 'Denver';
const age = 30;

const person = {
  firstName,
  lastName,
  age,
};

console.log(person);
console.log(person.age);

//Destructuring

const todo = {
  id: 1,
  title: 'Take out trash',
  isComplete: true,
  user: { name: 'John' },
};

//Renaming is without curly braces, destructuring is with {}.
const {
  id: todoId,
  title,
  user: { name },
} = todo;

console.log(todoId);
console.log(name);
console.log(title);
// console.log(todo.isComplete);

// Destructuring arrays
const numbers = [23, 67, 43, 49, 345];
const [first, second, ...rest] = numbers;

console.log(first, second, rest);
