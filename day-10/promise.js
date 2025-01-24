// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.


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
