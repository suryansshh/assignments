    const fs = require('fs').promises;

    //const writefile = fs.writeFileSync("01-async-js/easy/text.txt" , "Hi my name Suryansh " , "utf8")

    async function writefile(params) {
        try {
            await fs.writeFile("01-async-js/easy/text.txt", "Hi my name Suryansh ", "utf8");
            console.log("File written successfully");
        } catch (error) {
            console.log(error);
        }

    }
    console.log("before call");
    writefile();
    console.log("after promise")