console.log("A");

const sum = (a, b) => {
    console.log("E");
    console.log("-calculating sum-");
    return a + b;
};

console.log("B");

module.exports = { sum };
