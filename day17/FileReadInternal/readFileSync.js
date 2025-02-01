const fs = require("node:fs");

const ans = fs.readFileSync("./dummy.txt", {encoding: "UTF-8"});  // <Buffer 74 68 69 73 20 69 73 20 64 75 6d 6d 79 20 74 65 78 74>
                                             //  hexadecimal equivalent of the binary data
console.log(ans);