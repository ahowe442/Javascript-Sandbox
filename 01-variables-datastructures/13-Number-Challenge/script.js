let x; 

x = Math.floor(Math.random()* 100 + 1);
y = Math.floor(Math.random()* 50 +1);
sum = x + y; 
diff = x -y; 
prod = x * y;
quotient = x/y; 
remainder = x%y;

console.log(`${x} + ${y} = ${sum}`);
console.log(`${x} - ${y} = ${diff}`);
console.log(`${x} * ${y} = ${prod}`);
console.log(`${x} / ${y} = ${quotient}}`);
console.log(`${x} % ${y} = ${remainder}`);



