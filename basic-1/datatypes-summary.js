// primitive
// 7types:
// String
// number
// boolean
// null
// undefined
// symbol
// BigInt


const id = Symbol('123')
const anotherId = Symbol('123')
console.log(anotherId);

console.log(id == anotherId);//false





const bigNumber =125555555555555555555n //=bigInt datatype  we have to only use n at last digit
console.log( typeof bigNumber); // bigint

// JavaScript is a Dynamically Typed + Weakly Typed language.
//We don't need to tell that variable which kind of data type because JavaScript already knows.
// runtime pur pata chal jata kons type hai


// Refrence(Non-primitative)
//Array, objects,functions


const heroes = ["Naruto", "Deku", "luffy"];
console.log(typeof heroes);//object


let myObjt = {
     name: "riya",
     age: 20,

}

console.log( typeof myObjt); //object



// *********************Types of memory ****************************************************

// stack (primitive) , heap(non-primitive)


let arr = [1,2,3]; // arr stack me reference, [1,2,3] heap me
let obj = {name: "Riya"}; // obj stack me reference, object heap me



let myYoutubename = "Riya sharma.com"
let anothername =  myYoutubename
anothername = "easycode"
console.log(anothername);


console.log(myYoutubename);


let userOne = {
     email:"riyasharma.com",
     upi: "user@bl"
}

let userTwo = userOne

userTwo.email = userOne
userTwo.email = "rk@gmail.com"
console.log(userTwo.email);
console.log(userOne.email);

let a = 5;
let b = a;
console.log(a);

