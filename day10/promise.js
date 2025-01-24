// Promise ek JS object hai jo future mein hone wale kaam ka result batata hai.
// Ye kaam ya to successful hoga (complete hoga) ya fail karega.


// FETCH is a PROMISE
// const pr = fetch("https://api.thecatapi.com/v1/images/search");

// console.log(pr);

// const cb = (val) => {
//     console.log("Response received:", val);
// };

// const handleError = (err) => {
//     console.log("Error:", err);
// };

// pr.then(cb).catch(handleError); 


//----------------------------------------------------------

// Event loop check
// 1st: is there any pending task
// 2nd: is the call stack is empty

// const showData = (val) => {
//     console.log("YES YES", val);
// };

// const successCallback = (val) => {
//     console.log("YES", val);
//     const pr = val.json();
//     pr.then(showData).catch(errorCallback);
// };

// const errorCallback = (err) => {
//     console.log("NO", err);
// };

// const request = fetch("https://api.thecatapi.com/v1/images/search");
// request.then(successCallback).catch(errorCallback);




//----------------------------------------------------------



const request = fetch("https://api.thecatapi.com/v1/images/search");

request
  .then((val) => {
    console.log("LEVEL 1 - START", val);

    const pr = val.json();
    console.log("LEVEL 1 - MID", val);

    pr.then((val) => {
      console.log("YES YES", val);
    }).catch((err) => {
      console.log("NO", err);
    });

    console.log("LEVEL 1 - END", val);
  })
  .catch((err) => {
    console.log("NO", err);
  });

console.log("END");

