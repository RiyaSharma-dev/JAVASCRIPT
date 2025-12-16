const coding = ["js", "ruby", "java", "python"]

// coding.forEach( function (item) {
//     console.log(item);
    
// })

// coding.forEach((item) => {
//     console.log(item);
    
// })


// function printMe(item) {
//     console.log(item);
    
    
// }

// coding.forEach(printMe)


// coding.forEach((val, index, arr) => {
//     console.log(val, index, arr);
    

// })


const myCoding =[
    {
        langauageName:"javascript",
        langauageFilename:"js"

    },
    
    {
        langauageName: "java",
        langauageFilename: "java"

    },
    
    {
        langauageName: "python",
        langauageFilename:"py"

    }
    


]

myCoding.forEach( (item) => {

    console.log(item.langauageName);
    
})


const numbers = [2, 5, 8, 12, 15];
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];



    if ( 10 < element) {
        console.log(element);
    }
    
    
}

const name = "Riya";
for (const char of name) {
    console.log(char.toLowerCase());
}


const student = {
  name: "Riya",
  marks: 85,
  grade: "A"
};
// Task: Use a for…in loop to print each key and its value in format: "key: value"

for(const list in student ){
console.log(`${list} is ${student[list]}`);

}


const students = [
  { name: "Riya", marks: 85 },
  { name: "Rohan", marks: 72 },
  { name: "Ayush", marks: 90 }
];

students.forEach( (keys) => {

    console.log(keys.marks);
    
})

let arr = [1, 2, 3, 4, 5, 6,7,8,9,10]

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     if (element % 2 == 0) {
//         console.log(element);
        
        
//     }
    
// }

for (const num of arr ){
    if (num % 2 ==0) {
        console.log(num);
        
        
    }
    
}