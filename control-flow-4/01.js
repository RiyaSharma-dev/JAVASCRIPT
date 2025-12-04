//if statement

// const isUserloggedIn = true
// const tempreature = 41

// if(tempreature === 40){
// console.log("less than 50");

// }else{

// console.log("temperature is greater than 50");}


// if(3 != 4){
//     console.log("3 is not equal to 4");
    
// }else{

//     console.log(3 == 4);
    
// }

// const score = 200 

// if(score > 100){
//     let power = "fly"
//     console.log(`User power: ${power}`);
    
// }

// console.log(`User power: ${power}`);


const balance = 1000
// if (balance > 500) console.log("test"), console.log("test2");

if (balance < 500){
console.log("less than 500 ");


}else if (balance < 750) {
    console.log("less than 750");
    
} else if( balance < 900){
console.log("less than 900");

}else{
    console.log("less than 1200");
}



const userLoggedIn= true
const debitCard = true
const loggedInformGoogle =  false 
const loggedInformEmail =  true

if (userLoggedIn && debitCard && 2==3){
    console.log("Allow to buy course" );
    
}

// one condition  is true  both of them
if(loggedInformGoogle ||  loggedInformEmail){
console.log("User logged in");

}


// all conditions can be true or false 
if (true && true && false) {
  console.log("A");
} else {
  console.log("B");
}


// Nullish Coalescing Operator  (??): null undefined

let val1;
// val1 = 5 ?? 10  // 5
// val1 = null ?? 10 // 10
// val1 = undefined ?? 15

val1 = null ?? 10 ?? 20
console.log(val1);

//  terniary Operator

