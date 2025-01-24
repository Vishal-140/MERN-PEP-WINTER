// Event Loop yeh check karta hai ki Call Stack khali hai ya nahi. 
// Agar Call Stack khali ho, toh woh Callback Queue se pehla task uthata hai 
// aur Call Stack mein daal kar run karta hai

// Event loop check
// 1st: is there any pending task
// 2nd: is the call stack is empty


console.log("A-----start");

function doSomething() {
    console.log("B----Starting...");
    setTimeout(() => {
        console.log("C-----Callback completed");
    }, 0);
    console.log("D----Done");
}

console.log("E-----Made function...");
doSomething();
console.log("F----end");
