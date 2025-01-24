// Promise ek JS object hai jo future mein hone wale kaam ka result batata hai.
// Ye kaam ya to successful hoga (complete hoga) ya fail karega.


// FETCH is a PROMISE
const pr = fetch(" https://api.thecatapi.com/v1/images/search");

console.log(pr);

const cb = (val) => {
    console.log("Response received:", val);
};

const handleError = (err) => {
    console.log("Error:", err);
};

pr.then(cb).catch(handleError); 
