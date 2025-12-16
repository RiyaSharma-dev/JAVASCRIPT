
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





function userName(first, last) {
  return first + " " + last;
}

console.log(userName("riya", "sharma"));


function isAdult(age) {
  if (age >= 18) {
    return "Adult";
  } else {
    return "Minor";
  }
}
console.log(isAdult(20)); // Adult
console.log(isAdult(16)); // Minor



function iseven(num) {
  if (num% 2 == 0) {
    return "even"
    
  } else {
    return "odd"
  }
  
}

console.log(iseven('2'));
console.log(iseven('7'));



function user( user = "welcome!") {
  return ` hello ${user}`
}

console.log(user()); // hello welcome!
console.log(user("riya")); // hello riya


function greetFirstItem(firstitem) {
  return firstitem[1]
  
}




function checkTemp(temp) {
  if (temp > 30) {
    return "hot"
    
  } else {
    return "normal"
  }
  
}

console.log(checkTemp('50'));



function hasItems(arr) {
  
  if (arr.length > 0) {
    return "empty arr"

    
  } else {
    return "not empty arr"
  }


}

console.log(hasItems([1,2,3]));



function checkStringLength(str) {

  if (str.length < 5) {
     return "short"
  } 
  else if( str.length >= 10) {

    return "long"

  }
  else{

return "medium"

  }

}
console.log(checkStringLength("Hi"));          
console.log(checkStringLength("Javascript"));  
console.log(checkStringLength("Hello"));       


function checkWeather(temp) {
  if (temp<20) {
    return "cold"

  } else if(temp >= 30) {
    return "hot"
  }
  else  {
    return "warm"
  }

}

console.log(checkWeather(15));  
console.log(checkWeather(25));  
console.log(checkWeather(35));  

function dayType(day) {
  if (day === "Saturday" || day === "Sunday") {
    return "weekend";
  } else {
    return "weekday";
  }
}

console.log(dayType("Sunday"));    // weekend
console.log(dayType("Monday"));    // weekday
console.log(dayType("Saturday"));  // weekend


function checkPassword(password) {
  if (password.length < 6) {
    return "weak"

  } else if (password.length >= 10) {
    return "strong"
    
  }else{
    return "medium"
  }
}

console.log(checkPassword("abc"));       
console.log(checkPassword("abc12345"));  
console.log(checkPassword("Abc123456789")); 

function dayType(day) {
  if (day === "Saturday" || day === "Sunday") {
    return "weekend";
  } else {
    return "weekday";
  }
}

console.log(dayType("Sunday"));    // weekend
console.log(dayType("Monday"));    // weekday
console.log(dayType("Saturday"));  // weekend


function checkMultiple(num) {
  if (num % 3 == 0 && num % 5 == 0) {
    return "fizzbuzz"
    
  } else if(num% 3 == 0) {
    return "fizz"
    
  } else if(num% 5 == 0) {
    return "buzz"

  }

  else {
    return "none"
  }
  
}

console.log(checkMultiple('15'));
console.log(checkMultiple('12'));
console.log(checkMultiple('20'));


function largest(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}

console.log(largest(5, 9, 3));   // 9
console.log(largest(10, 10, 5)); // 10
console.log(largest(1, 2, 3));   // 3



function hasVowel(str) {
  if (
    str.includes("a") ||
    str.includes("e") ||
    str.includes("i") ||
    str.includes("o") ||
    str.includes("u")
  ) {
    return "yes";
  } else {
    return "no";
  }
}

console.log(hasVowel("hi"));
console.log(hasVowel("sky"));
console.log(hasVowel("riya"));

function grade(score) {
  if (score >= 90) {
    return "A";
  } 
  else if (score >= 75) {
    return "B";
  } 
  else if (score >= 50) {
    return "C";
  } 
  else {
    return "F";
  }
}

console.log(grade(100));
console.log(grade(10));
console.log(grade(40));
console.log(grade(50));


function smallest(a,b,c) {
  if (a<=b && a<=c ) {
    return a
    
  } else if(b<= c && b<= a) {
    return b
  }
  else{
    return c
  }
  
}

console.log(smallest(1,3,8));
console.log(smallest(9,8,4));
console.log(smallest(5,8,0));

function isOdd(num) {
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

console.log(isOdd(9));   // odd
console.log(isOdd(10));  // even
console.log(isOdd(25));  // odd


function ispositive(num) {
  if (num>0 ) {

    return "positive"
    
  } else if(num<0){
    return "negative"
    
  }else{
    return "zero"
  }
  
}

console.log(ispositive('5'));
console.log(ispositive('-9'));
console.log(ispositive('0.4'));

function isAdult(age) {
  if ( age < 18) {
    return "minor"
    
  } else{

    return "adult"
    
  }
  
}

console.log(isAdult('22'));
console.log(isAdult('15'));


function greet(name) {
  if (!name) {
    return "no name"
  } 
  else{
    return ` hello ${name}`
  
  }
  
}

// console.log(greet("riya"));
console.log(greet(""));

