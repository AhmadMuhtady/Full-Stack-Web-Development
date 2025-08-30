const os = require('os');

// arch()
console.log(os.arch());

// platform()
console.log(os.platform());

os.platform() === 'darwin'
	? console.log('you are on mac')
	: os.platform() === 'win32'
	? console.log('you are on windows')
	: os.platform() === 'linux'
	? console.log('you are on linux')
	: console.log('other OS');

// cpus
// console.log(os.cpus());

// // freemem()
// console.log(`Free memory ${os.freemem() / 1024 / 1024 / 1024} GB`);
// // total memory
// console.log(`Total memory ${os.totalmem() / 1024 / 1024 / 1024} GB`);

// homedir
console.log(os.homedir());

// uptime
const uptime = os.uptime();
const days = Math.floor(uptime / 60 / 60 / 24);
const hours = Math.floor(uptime / 60 / 60) % 24;
const mints = Math.floor(uptime / 60) % 60;
const seconds = Math.floor(uptime) % 60;
// console.log(
// 	`uptime ${days} days, ${hours} hours, ${mints} mints, ${seconds} seconds`
// );

// host name
console.log(os.hostname());
