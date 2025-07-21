// function getData(endpoint) {
// 	return new Promise((resolve, reject) => {
// 		const xhr = new XMLHttpRequest();
// 		xhr.open('GET', endpoint);

// 		xhr.onreadystatechange = function () {
// 			if (this.readyState === 4) {
// 				if (this.status === 200) {
// 					resolve(JSON.parse(this.responseText));
// 				} else {
// 					reject('Error: Something went wrong');
// 				}
// 			}
// 		};

// 		setTimeout(() => {
// 			xhr.send();
// 		}, Math.floor(Math.random() * 3000) + 1000);
// 	});
// }

// getData('./movies.json')
//   .then((movies) => {
//     console.log(movies);
//     return getData('./actors.json');
//   })
//   .then((actors) => {
//     console.log(actors);
//     return getData('./directors.json');
//   })
//   .then((directors) => {
//     console.log(directors);
//   })
//   .catch((error) => console.log(error));

// async function getAllData() {
// 	const movies = await getData('./movies.json');

// 	const actors = await getData('./actors.json');

// 	const directors = await getData('./directors.json');
// 	console.log(movies, actors, directors);
// }

// async function getAllDataWithFetch() {
// 	try {
// 		const moviesRes = await fetch('./movies.json');
// 		const moviesData = await moviesRes.json();

// 		const actorsRes = await fetch('./actors.json');
// 		const actorsData = await actorsRes.json();

// 		const directorsRes = await fetch('./directors.json');
// 		const directorsData = await directorsRes.json();

// 		console.log(moviesData, actorsData, directorsData);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

// getAllDataWithFetch();
// getAllData();

const getAllDataWithFetch = async () => {
	try {
		const [moviesRes, actorsRes, directorsRes] = await Promise.all([
			fetch('./movies.json'),
			fetch('./actors.json'),
			fetch('./directors.json'),
		]);

		const [moviesData, actorsData, directorsData] = await Promise.all([
			moviesRes.json(),
			actorsRes.json(),
			directorsRes.json(),
		]);

		console.log({
			movies: moviesData,
			actors: actorsData,
			directors: directorsData,
		});
	} catch (error) {
		console.log(error);
	}
};

getAllDataWithFetch();
