const { sum } = require("./teamB.js"); 

console.log("C");

const sumArray = (arr) => { 
    console.log("D");
    let total = 0;
    for (let i = 0; i < arr.length; i++) { 
        total = sum(total, arr[i]);
    }
    return total;
};

console.log("F");

module.exports = { sumArray };
