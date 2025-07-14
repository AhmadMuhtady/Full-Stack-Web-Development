// fetching json with then

fetch('./movies.json')
	.then((res) => res.json())
	.then((data) => console.log(data));

//fetching a text file
fetch('./test.txt')
	.then((res) => res.text())
	.then((data) => console.log(data));

// fetching from APi
fetch('http://api.github.com/users/bradtraversy/repos')
	.then((res) => res.json())
	.then((data) => console.log(data));
