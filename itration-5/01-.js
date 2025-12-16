// loops

// for loop
                    //    condition check     // increment
                        //   ↓
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }


for (let index = 0; index <= 10; index++) {
    const element = index;
    // console.log(2 * index);
    
    
}




for (let index = 0; index <= 10; index++) {
    const element = index;
    // console.log(` 2 * ${index} = ${2 *index}`);
    
    
}


// nested loop

for (let index = 0; index < 10; index++) {
    const element = index;
    if (element == 5) {
        // console.log("5 is a best number");}
        

    // console.log(element);
    
}

}

for (let i = 0; i <= 10; i++) {
    // console.log(`outer loop value ${i}`);
    
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop value${j}  and inner loop${i}`);

// console.log(i +'*' + j + '=' + i*j);
// console.log(` ${i} * ${j} = ${i*j}`);




    }
    
}

let myArr = ["flash"," batman", "superman"]
// console.log(myArr.length);

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element);
    
}



// break and continue

for (let index = 1; index <= 20; index++) {
    
    if(index == 5){
        // console.log(`detected 5`);
        break
    }

    // console.log(` value of i is ${index}`);
    
    
}


for (let index = 1; index <= 20; index++) {
    
    if(index == 5){
        // console.log(`detected 5`);
        // continue
    }

    // console.log(` value of i is ${index}`);
    
    
}


// pratice

for (let index = 1; index <= 3; index++) {
    const element = index;
    console.log(`outer loop is ${index}`);

    for (let indexOne = 1; indexOne <= 3; indexOne++) {
        const element = indexOne;
        console.log(`inner value is ${indexOne} `);
        
        
    }
    
    
}


for (let Two = 1; Two <= 10; Two++) {
    const element = Two;
    console.log(`outer value is ${Two}`);

    for (let three = 0; three <=10; three++) {
        const element = three;
        console.log(`${Two} * ${three} = ${Two*three}`);
        
        
    }
    
    
}


for (let fourth = 1; fourth < 20; fourth++) {
    const element = fourth;

    if(fourth == 13){
        console.log(`upto 13`);
        break; // stop the loop when 13 is detected
    }
    
    console.log(fourth); // prints other numbers
}



for (let fifth = 1; fifth <=20; fifth++) {
    const element = fifth;

    if (fifth ==  7) {
        console.log(`skip 7`);
        continue;
    }
    console.log(fifth);
    
}



for (let num = 1; num <= 20; num++) {

    if (num == 7 || num == 11 || num == 15) {
        console.log(`skip ${num}`);
        continue; // skip this iteration
    }

    console.log(num);
}


for (let index = 1; index <= 20; index++) {
    const element = index;
    
    if(element % 2 == 0){
console.log( element);

    }
    
    
}

for (let index = 1; index <=10; index++) {
    const element = index;
    console.log(`${element} * 4 = ${4*element} `);
    
    
}

let arr1 = ["riya", "rohan", "ayush", "keshav"]
for (let index = 0; index < arr1.length; index++) {
    const element = arr1[index];
    console.log(element);
    
}


for (let index = 1; index < 10; index++) {
    if( 5 == index ){
    console.log("5 is skip");
    break
    }
    
    console.log(index);
    
    
}