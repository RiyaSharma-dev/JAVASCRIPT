// Else-if checks another condition when the first condition is false.
// we assume the value this is truthy or falsy with rules.


//falsy value

// false, 0, -0, Bignit 0n, "", null, undefined, NaN 

// truthy value

// "0", 'false', " ", [], {}, function(){}

// const UserEmail = []

if( UserEmail.length === 0){
console.log("Array is empty");

}

const emptyObjt = {}

if(Object.keys(emptyObjt).length === 0){
    console.log("obj is empty");
    
}

let a = {};

if (Object.keys(a).length == 0) {
    console.log("it is true");

}



// Comparison Operators (compare karne ke)
// Operator	Meaning	Example
// ==	Equal (value check)	5 == "5" → true
// ===	Strict equal (value + type)	5 === "5" → false
// !=	Not equal (value)	5 != 6 → true
// !==	Strict not equal (value + type)	5 !== "5" → true
// >	Greater than	5 > 3 → true
// <	Less than	3 < 5 → true
// >=	Greater or equal	5 >= 5 → true
// <=	Less or equal	3 <= 5 → true

// Because in JavaScript, all objects are truthy, no matter if they are empty or full.
// [] is an object, so it becomes truthy.

// Objects include:

// arrays []

// objects {}

// functions function(){}

// All of these are truthy.



