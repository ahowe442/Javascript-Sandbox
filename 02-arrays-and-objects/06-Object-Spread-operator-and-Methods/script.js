let x;
// These do the same thing
const todo1 = {};
const todo = new Object();

// Adds an id to each todo.
todo1.id = 1;
todo.id = 1;
todo.name = 'Buy Milk';
todo.completed = false;

x = todo;
y = todo1;

//Nesting keys/values
const person = {
  address: {
    coords: {
      lat: 42.9384,
      lng: -71.3232,
    },
  },
};

x = person.address.coords.lat;

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { obj1, obj2 };
//To combine them in a single obj.
const obj4 = { ...obj1, ...obj2 };
const obj5 = Object.assign({}); //This gives us an empty object.
const obj6 = Object.assign({}, obj1, obj2);

//console.log(obj5);

const todos = [
  { id: 1, name: 'Buy Milk' },
  { id: 2, name: 'Pick up kids' },
  { id: 3, name: 'Take out trash' },
];

x = todos;
x = todos[0].name;

// TO get all the keys from an object
x = Object.keys(todo);

// To get the length of an object (first get the keys then the length of that)
// It works becasue it returns an array and we can use.length on an array
x = Object.keys(todo).length;

// AN array with all the values.
x = Object.values(todo);

// An array with the key/value pairs.
x = Object.entries(todo);

// To find out if an array has a specific property. Returns a boolean
x = todo.hasOwnProperty('name');
console.log(x);
