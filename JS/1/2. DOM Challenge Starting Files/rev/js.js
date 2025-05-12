// greet = 'hello world';
// console.log(greet.length);
// console.log(`${greet.charAt().toUpperCase()}${greet.substring(1)}`);

// let x;
// let y;
// x = Math.floor(Math.random() * 100 + 1);
// y = Math.floor(Math.random() * 50 + 1);
// sum = `${x} + ${y} = sum`;
// sub = `${x} - ${y} = sub`;
// dev = `${x} / ${y} = dev`;
// times = `${x} * ${y} = times`;
// mod = `${x} % ${y} = mod`;

// console.log(x);
// console.log(y);
// console.log(sum);
// console.log(sub);
// console.log(dev);
// console.log(times);
// console.log(mod);

// let d;
// // d = new Date();
// // d = new Date('jan, 03, 1993');
// d = Date.now(new Date());
// d = d / 60000;
// console.log(d);

let d = new Date('Jan 3, 1993'); // or any date
let ms = d.getTime(); // milliseconds since Jan 1, 1970
let minutes = ms / 60000;
console.log(minutes);
