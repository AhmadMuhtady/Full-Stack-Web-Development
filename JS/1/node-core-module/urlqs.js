const url = require('url');
const queryString = require('querystring');
// url.parse()
// const myUrl = new URL('http://example.com/listing?id=1000&premium=true');

// console.log(myUrl);

// // url.format()
// // Build URL with new URL constructor
// const myUrl2 = new URL('/listing', 'http://example.com');
// myUrl2.searchParams.set('id', '1000');
// myUrl2.searchParams.set('premium', 'true');
// console.log(myUrl2.toString()); // http://example.com/listing?id=1000&premium=true

// queryString()
const myQs = 'year=2023&month=january&day=20';

// const q = queryString.parse(myQs);
// console.log(q);
// console.log(q.month);
const myQs2 = queryString.stringify({
	year: '2023',
	month: 'january',
	day: '20',
});
console.log(myQs2);
