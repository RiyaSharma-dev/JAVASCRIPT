// array

// array can contain numbes , string ,boolean , object etc

const myArr =[0, 1, 2, 3, 4, 5]

const myArr2 = new Array(1,2, 3, 4,)

// console.log(myArr[0]); // indexing
// console.log(myArr[1]); 

// Array methods
// myArr.push(6)
// myArr.push(7)
// myArr.pop() // romve the last element
// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9)); // false
// console.log(myArr.indexOf(9)); // -1
// console.log(myArr.indexOf(3)); // 3

const newArr = myArr.join() // convert into  string 



// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// console.log(typeof newArr);


//slice, splice


console.log("A", myArr );//A [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1,3) 
console.log(myn1);//[ 1, 2 ]

console.log("B",myArr);//B [ 0, 1, 2, 3, 4, 5 ]


const myn2 = myArr.splice(1,3) // splice() original array को manipulate करता है, यानी उसे बदल देता है।
console.log("c", myArr); // [0,4,5]

console.log(myn2); // [1,2,3]