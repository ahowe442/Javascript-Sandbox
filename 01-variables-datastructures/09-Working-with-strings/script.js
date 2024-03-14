let x;

const name1 = "John";
const age = 30;
x = "Hello, my name is " + name1 + " and I am " + age + " years old";

// Template LIterals
x = `Hello, my name is ${name1} and I am ${age} years old`;

// String Properties and Methods.
//const s = new String("Hello Abby");
const s = "Hello Abby";

x = s.length;

// Access value by key
x = s[0]; // Returns H
x = s[1]; // Returns e
x = s[2]; // Returns l
x = s[3]; // Returns l
x = s[4]; // Returns o
x = s[5]; // Returns
x = s[6]; // Returns A
x = s[7]; // Returns b
x = s[8]; // Returns b
x = s[9]; // Returns y

x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();
x = s.charAt(0);
x = s.indexOf("A");
x = s.substring(0, 5); // Hello
x = s.substring(7);
x = s.slice(0, 5);
x = s.slice(-11, -6);

x = "        Hello World";
x = s.trim();
x = s.replace("World", "Abby");
x = s.includes("Hello");

x = s.valueOf();
x = s.split("");

console.log(x);
