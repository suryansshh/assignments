const fs = require('fs');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);

 async function readfile() {
    try {
        const data =  await readFile("01-async-js/easy/text.txt", "utf8");
        console.log("File data:", data);
    } catch (err) {
        console.log("Error:", err);
    }
}

console.log("Before calling readfile");
readfile();
console.log("After calling readfile");

setTimeout(function expensiveFunction(params) {
    let count = 0;
    for (let i = 0; i < 1000000000; i++) {
        count += i;
    }
    console.log("Expensive function done. Result:", count);
}, 1000);
