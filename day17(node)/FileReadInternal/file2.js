const fs = require("node:fs");

const Start = Date.now()

function myReadFile() {
    console.log("\n------- Reading File ---------");
    const ans = fs.readFileSync("./dummy.txt", "UTF-8");
    console.log("--> File Reading done:", ans);
    console.log("-----------------------------\n");
}

myReadFile();

const end = Date.now()

console.log("time taken : ", end - Start)