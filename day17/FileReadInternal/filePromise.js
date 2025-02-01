const fsPromises = require("node:fs/promises");

async function myReadFile() {
    console.log("--> Reading");
    try {
        const ans = await fsPromises.readFile("./dummy.txt", "utf-8");
        console.log("--> ans", ans);
    } catch (error) {
        console.error("Error reading file:", error);
    }
}

myReadFile();


// then catch

// const fsPromises = require("node:fs/promises");

// function myReadFile() {
//     console.log("--> Reading");

//     fsPromises.readFile("./dummy.txt", "utf-8")
//         .then(ans => console.log("--> ans", ans))
//         .catch(error => console.error("Error reading file:", error));
// }

// myReadFile();
