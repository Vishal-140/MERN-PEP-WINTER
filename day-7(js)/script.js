console.log("hello");

// --------------------------------------------------------------------------------------------------------

// HOW THE PROGRAM RUNS?

// 1. MEMORY ALLOCATION (line by line) (Only checks for variable and function DECLARATIONS)
// 2. Execution (++) (line by line) (Executes the logic)

// memory allocated for upcoming variable "city" = "Delhi"
// memory allocated for upcoming variable "country" = undefined

var city = "delhi"; // memory allocated for upcoming variable "city" = undefined
console.log(city); // delhi

console.log(country); // undefined
var country = "India"; // memory allocated for upcoming variable "country" = undefined

// console.log(state); // state is not defined

// --------------------------------------------------------------------------------------------------------

// VAR: Industry standard says: avoid using VAR
// Oldest keyword
// function SCOPED
// if you access it before initialization
// -> "undefined" if the variable is declared after this line
// > "Reference Error: ... not defined" if the variable is not at all declared anywhere in the code
// Redeclaration ALLOWED : VERY BAD as the industry standard

var citi = "Delhi";
console.log(citi);

var cty = "Mumbai";
console.log(cty);

// --------------------------------------------------------------------------------------------------------

// LET and CONST introduction in JS: 2015 when *ES6* was launched (also known as ECMAScript 2015)

// LET
// IT CANNOT be RE-DECLARED
// It is block scoped
// They are hoisted differently (in temporal dead zone)

// TEMPORAL DEAD ZONE: LET variable will come with name "city"
// TEMPORAL DEAD ZONE: LET variable will come with name "country"
// TEMPORAL DEAD ZONE variables can be accessed before initialization

let cite = "Delhi"; // city = "Delhi"
console.log(cite);

let contry = "India"; // country = "India"
console.log(contry);

// --------------------------------------------------------------------------------------------------------

// CONST
// IT CANNOT be RE-DECLARED
// It is block scoped
// They are hoisted differently (in temporal dead zone)
// IT CANNOT BE RE-ASSIGNED

const a = "apple";  // declaration + initialization
console.log(a);

const b = "ball";
console.log(b);

// a = "mumbai"  // re-assignment (IT is allowed in LET but NOT Allowed in cohst)
