// write to a file

// call back Async

// const fs = require('fs');
// fs.writeFile('file1.txt', 'Hello World', (err) => {
// 	if (err) throw err;
// 	console.log('file Created');
// });

// promise version
// const fs = require('fs/promises');
// fs.writeFile('file2.txt', 'Hello world 2')
// 	.then(() => console.log('file created'))
// 	.catch((err) => console.log(err));

// Sync Version
// const fs = require('fs');
// fs.writeFileSync('file3.txt', 'Hello World 3');
// console.log('File created');

//Async/ await best to use
const fs = require('fs/promises');
async function createFile(fileName, content) {
	try {
		await fs.writeFile(fileName, content);
		console.log('File created');
	} catch (err) {
		console.log(err);
	}
}

// createFile('file4.txt', 'Hello World 4');

// Read from a file

async function readFile(fileName) {
	try {
		const data = await fs.readFile(fileName, 'utf-8');
		console.log(data);
	} catch (error) {
		console.log(error);
	}
}

// readFile('file1.txt');
// readFile('file2.txt');
// readFile('file3.txt');
// readFile('file4.txt');

// Delete a file
async function deleteFile(fileName) {
	try {
		await fs.unlink(fileName);
		console.log(`File ${fileName} Deleted`);
	} catch (error) {
		console.log(error);
	}
}

// deleteFile('file4.txt');

// rename a file

async function renameFile(fileName, newFileName) {
	try {
		await fs.rename(fileName, newFileName);
		console.log(`File ${fileName} renamed to ${newFileName}`);
	} catch (error) {
		console.log(error);
	}
}

// renameFile('file1.txt', 'file.text');

// create folder
async function createFolder(folderName) {
	try {
		await fs.mkdir(folderName);
		console.log(`Folder ${folderName} Created`);
	} catch (error) {
		console.log(error);
	}
}

createFolder('folder1');
