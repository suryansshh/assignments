const fs = require('fs').promises;

async function readFile(){
    try {
        const data =  await fs.readFile("01-async-js/easy/text.txt", "utf8");
        console.log(data);
        const newData = removewhite(data);
        console.log(newData);
    } catch (err) {
        console.log(err);
    }
}

function removewhite(data) {
    return data.replace(/\s+/g, ' '); // Corrected regular expression
}

readFile();
