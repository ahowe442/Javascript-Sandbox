function getCelsius(far) {
  return ((far - 32) * 5) / 9;
}

//Aarow function
const getCel = (f) => ((f - 32) * 5) / 9;
console.log(`The temperature is ${getCelsius(32)} \xB0C`);
console.log(`The temperature is ${getCel(50)} \xB0C`);

console.log(minMax([1, 2, 3, 4, 5]));
