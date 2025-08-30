const http = require('http');
const fs = require('fs');

const posts = [
	{
		id: 1,
		title: 'Post 1',
		body: 'This is Post 1',
	},
	{
		id: 2,
		title: 'Post 2',
		body: 'This is Post 3',
	},
	{
		id: 3,
		title: 'Post 3',
		body: 'This is Post 3',
	},
];
const server = http.createServer((request, response) => {
	const url = request.url;

	// if (url === '/') {
	// 	response.writeHead(200, { 'content-type': 'text/html' });
	// 	response.end('<h1>Welcome</h1>');
	// } else if (url === '/about') {
	// 	response.writeHead(200, { 'content-type': 'text/html' });
	// 	response.end('<h1>About</h1>');
	// } else {
	// 	response.writeHead(404, { 'content-type': 'text/html' });
	// 	response.end('<h1>Page Not Found</h1>');
	// 	}
	if (url === '/') {
		fs.readFile('index.html', (error, file) => {
			if (error) {
				response.writeHead(500, { 'content-type': 'text/html' });
				response.end('<h1>Sorry we have an error</h1>');
			} else {
				response.writeHead(200, { 'content-type': 'text/html' });
				response.end(file);
			}
		});
	} else if (url === '/api/posts') {
		response.writeHead(200, { 'content-type': 'application/json' });
		response.end(JSON.stringify({ success: true, data: posts }));
	} else {
		response.writeHead(404, { 'content-type': 'text/html' });
		response.end('<h1>Page Not Found</h1>');
	}
});

server.listen(5000, () => {
	console.log('Server is listening on port 5000');
});
