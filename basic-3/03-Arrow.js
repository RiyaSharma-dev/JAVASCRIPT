const  user = {
    username: "riya",
    price: "999",

welcomeMessage: function(){

    console.log(` ${this.username} , Welcome to website `);
    console.log(this);
    
}

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);  // {}


const userOne = {
    email: "rk@gmail.com" ,
    password: "123",

    enteryouremail: function(){
       
console.log(`${this.email}`);

    }
}

userOne.enteryouremail()


// function milk(){
//     let username = "riya"
// console.log(this.username);

// }

// milk() // undefined


// const milk = function(){
//         let username = "riya"
// console.log(this.username);

// }

// arrow function
const milk = () => {
        let username = "riya"
console.log(this.username);

}

// milk() 


// basic arrow function

// const addTwo = (num1,num2) => {
//     return num1 + num2 
    
// }

// console.log(addTwo(3,5));



// const addTwo = (num1,num2) =>  num1 + num2 
// const addTwo = (num1,num2) =>  (num1 + num2 ) //= yeah rect mai ata hai 
// console.log(addTwo(3,6));

const addTwo = (num1,num2) =>  ({username: "riya"} ) 

console.log(addTwo());

const addThree = (name) => `${name} is a good dev`

console.log(addThree("riya"));

const addFour = (...num1) =>  num1
console.log(addFour(5,7));



// const obj1 = {
//     email: "rk@gmail.com",
//     passward: "1234",
//     confirmpassward: "1234"
// }

const anyobject = (passobject) => `
email is ${passobject.email}
 passward is  ${ passobject.passward} 
 confirm-passward ${passobject.confirmpassward } ` 

//  console.log(anyobject(obj1));

//  or 
//  direct  Object
 
console.log(anyobject({
     email: "rk@gmail.com",
    passward: "1234",
    confirmpassward: "1234"
}));


const array = (passarray) => `${passarray[2]}`
console.log(array([1,2,3,5]));




