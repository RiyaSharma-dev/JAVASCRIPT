
function sayMyName(){
console.log("H");
console.log("i");
console.log("t");
console.log("e");
console.log("s");
console.log("h");
}

sayMyName()

                           //  parameter
//                         //     ↓
// function addTwoNumber( number1, number2 ) {

//     console.log(number1 + number2);
// }

// addTwoNumber(3,5)
            // ↑
            // argument


 function addTwoNumber( number1, number2 ) {

//     let result= number1 + number2
//    return result
   return number1+ number2
console.log("hitesh")
// after result console isn't print
 }

 const result = (addTwoNumber(3,5))
 console.log(result);
console.log(addTwoNumber());  // nan


 

// `$ {}`` = string literal

                            // default value
                               //  ↓
function loginUserMessage(Username ="sam" ) {

// if(!Username){
//   console.log("PLease enter a username");
// }

    if(Username === undefined){
        console.log("PLease enter a username");
      }


  return `${Username} just logged in`  

}

// console.log(loginUserMessage("hitesh"));
console.log(loginUserMessage());  // undefined





function greetUser(name = "Guest") {


  return `${name} just logged in`;
}

console.log(greetUser("Riya")); // Riya just logged in
console.log(greetUser());       // Guest just logged in



function calculateTotalprice (...prices){

  return prices
}

console.log(calculateTotalprice(100,200,300,500,600));




// function with object and array
// ... = rest opreater

function calculateCartprice(...num1){  
return num1

}

console.log(calculateCartprice(20, 300, 400, 5000));




function calculateCartprice(val1, val2, ...num1){  
return   num1

}

// console.log(calculateCartprice(20, 300, 400, 5000))


// const user = {
//   username: "riya",
//   price: "199"
// }

function handleObject(anyobject){

console.log(`username is ${anyobject.username} 
 and price is ${anyobject.price}`);
  

}

// handleObject()


handleObject({
  username: "sam",
  price: "300"
})






function userDetails(user) {
  return `${user.name} is ${user.age} years old.`;
}

const myUser = {
  name: "Riya",
  age: 20
};

// console.log(userDetails(myUser));

console.log(userDetails({name: "riya", age: 20}));




const myNewarray = [
200, 300, 400, 500
]

function returnSecondvalue(getArray){
  return getArray[1]
  
}

// console.log(returnSecondvalue(myNewarray));
console.log(returnSecondvalue([200,300, 400, 500]));





// let array =[
//   1, 4,5,7,8, 9

// ]

function getSecondArray(getsecond){
  return getsecond[2]
}

// console.log(getSecondArray(array));


// or 

function getSecondArray(getsecond) {
  return getsecond[1];
}

console.log(getSecondArray([1, 4, 5, 7, 8, 9]));





