// const add = require("./utils");
const { add, sub } = require("./utils");
const path = require("path");

console.log(add(5, 5));
console.log(sub(5, 5));

console.log(__filename);
console.log(__dirname);

console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));
console.log(path.parse(__filename).ext);




//1. npm init
// 2. press enter
// 3. npm i nodemon -D    /-----   for devdependency ----/

// add script to run
