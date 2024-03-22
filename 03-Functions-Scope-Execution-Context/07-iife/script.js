(function () {
  const user = 'John';
  console.log(user);
  const hello = () => console.log('Hello from the iffe');
  hello();
})();

(function (name) {
  console.log('Hello ' + name);
})('Shawn');

(function hello() {
  console.log('Hello');
  //hello(); this would create an infinite loop.
});
