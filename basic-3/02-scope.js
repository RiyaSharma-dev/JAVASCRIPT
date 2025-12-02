// scope {} jo function ka hota hai ya if else ka bhi
//  var ko agar hum scope mai use karte toh bugs aayenge


let a = 300;   // global (outside block)

if (true) {
  let a = 10;  // block scope (inside if)
  const b = 20; // block scope (inside if)
  var c = 30;   // function or global scope
  // console.log("INNER:", a); // 10
}

//console.log(a); 
//console.log(b); 
//console.log(c); 

//  a nd b sirf if ke ander aana chaiye 
//  na ki bhar islye yaeh undefined aata hai 
// console.log(a);
// console.log(b);
// console.log(c);


function one (){
    const username= "riya"

    function two (){
        const website = "youtube"
        console.log(username);
        
    }

    // console.log(website);
    

    two()
}

// one()


if (true) {

  const username = "riya"

  if(username === "riya"){
    const website = " youtube "
    console.log(username + website);
    
  }

// console.log(website);


}

// console.log(username); 




// ++++++++++++++ Intersting +++++++++++++++++

console.log(addOne(5))

function addOne (num){
  return num +1
}


console.log(addTwo(5))
const addTwo = function(num){
  return num +2
}

