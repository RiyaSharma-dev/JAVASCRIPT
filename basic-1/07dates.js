
//Dates

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// // console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); // object


// Using numbers
let date1 = new Date(2024, 2, 1); // 1 March 2024 (month 0-indexed)
console.log(date1.toDateString()); // "Fri Mar 01 2024"

// Using string
let date2 = new Date("03-01-2024");
console.log(date2.toLocaleDateString()); // "3/1/2024" (local format)


// Month starts From 0 in javascript

// let myCreatedDate = new Date(2023,0,23)
// let myCreatedDate = new Date(2023,0,23, 5, 3)

let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());


// “JavaScript (और बाकी languages) में timestamp
//  हमेशा 1 Jan 1970 से अब तक के milliseconds गिनता है —
// क्योंकि वही computers की time calculation
//  की starting point (epoch) मानी गई है।”

let myTimeStamp = Date.now()
console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); date convert into millisec
// console.log(Math.floor(Date.now()/1000));  millisec convert into sec


new Date("INVALID").toString()
// → "Invalid Date"


let newDate = new Date()
console.log(newDate)
console.log(newDate.toISOString)
console.log(newDate.getDate())
console.log(newDate.getDay())
console.log(newDate.getMonth()+1)




newDate.toLocaleString('default',
     {
     weekday: "long"
     }
)





