const path = require('path');

const myFilePath = 'subfolder/anotherFolder/index.js';

// baseName
const base1 = path.basename(myFilePath);
const base2 = path.basename(myFilePath, '.js');

console.log(base1);
console.log(base2);

// extension name

const ext = path.extname(myFilePath);
console.log(ext);

// dirname()

const dir = path.dirname(myFilePath);
console.log(dir);

// join()

const myPath = path.join(myFilePath);
console.log(myPath);

// resolve() // absolute file
const myPath2 = path.resolve('subfolder', 'anotherFolder', 'index.js');
console.log(myPath2);

// __dirname : absolute path to the file you are in
console.log(__dirname);
// __filename
console.log(__filename);
