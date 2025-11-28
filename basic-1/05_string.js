
const name = "hitesh"
const  repoCount =50
// console.log(name + repoCount + "value");  // (Concatenation) old way 

// console.log(`hello my name is ${name} and  this is my ${repoCount}`);
// new way 

const newName ="full-stack"
const dev ="developer"
console.log(`I'm a ${newName} ${dev}`);


/*Index kya hota hai?

Index का मतलब होता है position number किसी sequence (list, string, array) में।

JavaScript में index 0 से start होता है। */


const gameName = new String ('hitesh, hr, com') 

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());


// console.log(gameName.charAt(3)); 
// // kis index pe konsa charater hai

// console.log(gameName.indexOf('i'));// index no






// const newStringOne = "   hitesh   "
// console.log(newStringOne );
// console.log(newStringOne.trim());

// const url = "https://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20',','))
// console.log(url.includes('hitesh')); // true


// console.log(gameName.split(','));  // we can convert string into  array  on any basis


// ✅ slice() → agar start > end, to "" (empty string) return karta hai
// ✅ substring() → agar start > end, to swap kar deta hai dono indexes
// वे सिर्फ string का एक हिस्सा निकालकर नया string return करते हैं।
// Original string बिल्कुल वैसी की वैसी रहती है।





let sub = "frontend developer";

const newString = sub.substring(0,4);
console.log(newString);

const anotherString = sub.slice(-8, 4); // ""
console.log(anotherString);

const otherString = sub.slice(7,8)
console.log(otherString);
