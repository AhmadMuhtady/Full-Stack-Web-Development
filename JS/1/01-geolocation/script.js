// getCurrentPosition()
// function curSuccess(pos) {
// 	const coords = pos.coords;

// 	console.log(`Latitude: ${coords.latitude}`);
// 	console.log(`Longitude: ${coords.longitude}`);
// 	console.log(`Within: ${coords.accuracy} meters`);
// }

// function curError(err) {
// 	console.log(`Error: ${err.code} - ${err.message}`);
// }

// const CurOptions = {
// 	enableHighAccuracy: true, // use gps if available
// 	timeout: 5000, // time to wait to stop trying location
// 	maximumAge: 0, // do not use cached location
// };

// navigator.geolocation.getCurrentPosition(curSuccess, curError, CurOptions);

// watchPosition()
// const target = {
// 	latitude: 41.387432,
// 	longitude: -71.3212314,
// };

// function watchSuccess(pos) {
// 	const coords = pos.coords;

// 	if (
// 		target.latitude === coords.latitude &&
// 		target.longitude === coords.longitude
// 	) {
// 		console.log('You have reached your Destination');
// 		navigator.geolocation.clearWatch(id);
// 	}
// }

// function watchError(err) {
// 	console.log(`Error: ${err.code} - ${err.message}`);
// }

// const watchOptions = {
// 	enableHighAccuracy: true, // use gps if available
// 	timeout: 5000, // time to wait to stop trying location
// 	maximumAge: 0, // do not use cached location
// };

// const id = navigator.geolocation.watchPosition(
// 	watchSuccess,
// 	watchError,
// 	watchOptions
// );

const map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution:
		'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const marker = L.marker([0, 0]).addTo(map);

navigator.geolocation.getCurrentPosition((pos) => {
	const lat = pos.coords.latitude;
	const lng = pos.coords.longitude;
	marker.setLatLng([lat, lng]).update();
	map.setView([lat, lng], 13);

	marker.bindPopup('<strong>Hello World</strong> <br> This is my Location');
});
