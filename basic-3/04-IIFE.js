// Immediately Invoked function Expressions (IFFE)

// IIFE ke andar jo variables hain, wo global scope ko pollute nahi karte.

// Matlab bahar se access nahi ho sakta → safe aur clean code.



// // function chai(){
// //     console.log("hello");
    
// // }

// // chai()

// const chai = function(){
// console.log("hello");
// }

// chai()


// (IIFE)

// named iife
(function chai(){
    console.log("hello");
    
})();


(  (name) => {
console.log(`hello Miss.${name}`);


})('sharma');


((emailId) =>{

    console.log(`id is ${emailId}`);
    
})('rk@gmail.com')
