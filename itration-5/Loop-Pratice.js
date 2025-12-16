let myList = [1, 2, 3, 4,5]

for (let index = 0; index < myList.length; index++) {
    const element = myList[index];
    console.log(element);
    

    
}


let colors =[ "red", "blue", "green", "brown"]

for(const item of colors){
    console.log(item);
    

}

let nums = [5, 12, 8, 20];

const list = nums.filter( (num)  => num > 10)
console.log(list);

// Double every number in this array:

let Nums = [2, 4, 6];

let doubleNum = Nums
.map((num) => num + 10 )
.map((num) => num * 2)
console.log(doubleNum);

// Find the total sum:

Nums = [10, 20, 30];

doubleNum = Nums.reduce((acc,currvalue) => acc + currvalue, 0)
console.log(doubleNum);


let students = [
  { name: "Riya", age: 20, marks: 80 },
  { name: "Aman", age: 22, marks: 65 },
  { name: "Neha", age: 19, marks: 90 }
];


// for (const student of students) {        // array
//   for (const key in student) {           // object
//     console.log(key, student[key]);
//   }
// }

 let studentsList = students.filter((stuData)=> stuData.name === 'Riya'&& stuData.age === 19)
 console.log(studentsList);
 
           