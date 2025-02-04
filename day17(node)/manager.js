const { sumArray } = require("./teamA.js"); 
const { sum, mul } = require("./teamB.js");

const values = [10, 20, 32, 41];

const ans = sumArray(values);

console.log(ans);

const total = sum(100, 200);
console.log(total);
