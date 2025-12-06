
// for of loop


// ["","",""]
//[{},{}, {}]



// Iterable ka matlab:
// Woh cheez jiske andar multiple values ordered form me hoti hain,
// aur JavaScript unhe ek-ek karke nikal sakti hai.

// Isliye:

// Array → iterable

// String → iterable

// Map / Set → iterable

// Object → iterable nahi

// Number → iterable nahi (kyunki number ke andar koi list-like values nahi hoti)

const arr = [1, 2,3,4,5]

for(const iterator of arr){
// console.log(iterator);

}

const string = "riya"
for(const num of string){
    // console.log(`each char is ${num}`);
    
}

// maps
// map is a special variable we can store any data in key -pair value in map.
const map = new Map()
map.set('IN', "India")
map.set('USA', "United Kingdom of America")
map.set('Fr', "France")

// console.log(map);


for (const [key , value ] of map) {
    // console.log(key, ':-', value);
}


const myObj ={
    'Game1' : 'NFS',
    'Game2' :  'Spiderman'

}

// for (const [key, value ] of myObj) {
//     console.log(key, ':-', value );
    
    
// }