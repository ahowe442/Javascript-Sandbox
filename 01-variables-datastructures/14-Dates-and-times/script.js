let d;

d = new Date();

d = d.toString();

d = new Date(2021, 0, 10, 12, 30, 0); // Output Feb 10, 2021 12:30

d = new Date('2021-07-10T12:30'); // Output Jul 10 2021 12:30
d = new Date('2022-07-10'); // NOTE THE -->Output Jul 9 2021 12:30
d = new Date('07-10-2022'); // Invalid date
d = new Date('07/10/2021 12:30:00'); // Output Jul 10 2021 12:30

//https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off

d = Date.now();
d = new Date();
d = d.getTime();
d = d.valueOf();

//Use the output in console from d = d.valueOf(); in the brackets below to get the timestamp.
// the number is the time in millaseconds.
d = new Date(1710898043073);

// to ge the time in seconds
d = Math.floor(Date.now() / 1000);

console.log(d);
