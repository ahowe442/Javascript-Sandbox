// // This is a comment
// // console.log(100);

// console.log('Hello World')

// console.log(20, 'Hello', true);

// const x=100;  (arrow here and cmd + shift + up or down arrow to select multiple lines, then cmd + /)

console.log(x);
/*
console.error('Alert');

console.warn('Warning');
*/
console.table({name: 'Abby', email: 'howe.abigail@gmail.com'});

console.group('simple'); 
console.log(x);
console.error('Alert');
console.warn('Warning');
console.groupEnd(); 

const styles = 'padding: 10px; background-color: white; color: green'; 

console.log('%cHello World', styles);