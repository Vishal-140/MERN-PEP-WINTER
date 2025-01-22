let arr = [1, 2, 3, 4];
let arr2 = [5, 6];

// Array_length
console.log("Array_length:", arr.length);

// Array_toString()
console.log("Array_toString():", arr.toString());

// Array_at()
console.log("Array_at():", arr.at(2));

// Array_join()
console.log("Array_join():", arr.join('-'));

// Array_pop()
let last = arr.pop();
console.log("Array_pop():", last);

// Array_push()
arr.push(7, 8);
console.log("Array_push():", arr);

// Array_shift()
let first = arr.shift();
console.log("Array_shift():", first);

// Array_unshift()
arr.unshift(0);
console.log("Array_unshift():", arr);

// Array_concat()
let merged = arr.concat(arr2);
console.log("Array_concat():", merged);

// Array_delete()
delete arr[1];
console.log("Array_delete:", arr);

// Array_copyWithin()
let copied = [1, 2, 3, 4, 5];
copied.copyWithin(1, 3);
console.log("Array_copyWithin():", copied);

// Array_flat()
let nested = [1, [2, [3, [4]]]];
console.log("Array_flat():", nested.flat(2));

// Array_splice()
arr.splice(1, 1, 99);
console.log("Array_splice():", arr);

// Array_toSpliced()
let newArray = arr.toSpliced(2, 1, 100);
console.log("Array_toSpliced():", newArray);

// Array_slice()
let sliced = arr.slice(1, 3);
console.log("Array_slice():", sliced);



let arrr = [10, 20, 30, 40, 50];
let sortArr = [3, 1, 4, 1, 5, 9];
let iterateArr = [1, 2, 3, 4, 5];

// Search Methods
console.log("indexOf:", arrr.indexOf(30));
console.log("lastIndexOf:", arrr.lastIndexOf(40));
console.log("includes:", arrr.includes(20));
console.log("find:", arrr.find(n => n > 25));
console.log("findIndex:", arrr.findIndex(n => n > 25));
console.log("filter:", arrr.filter(n => n > 25));

// Sort Methods
console.log("sort:", sortArr.sort((a, b) => a - b));
console.log("reverse:", sortArr.reverse());
console.log("fill:", sortArr.fill(0, 2, 4));
console.log("copyWithin:", sortArr.copyWithin(1, 3));

// Iteration Methods
iterateArr.forEach(n => console.log("forEach:", n * 2));
console.log("map:", iterateArr.map(n => n * 2));
console.log("reduce:", iterateArr.reduce((a, n) => a + n, 0));
console.log("reduceRight:", iterateArr.reduceRight((a, n) => a + n, 0));
console.log("every:", iterateArr.every(n => n > 0));
console.log("some:", iterateArr.some(n => n > 3));
console.log("keys:", [...iterateArr.keys()]);
console.log("values:", [...iterateArr.values()]);
console.log("entries:", [...iterateArr.entries()]);
