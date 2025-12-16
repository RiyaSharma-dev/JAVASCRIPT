// const coding = ["js", "ruby", "java", "python"]

// const values = coding.forEach((item) =>{
//     // console.log(item);
//     return item
// })

// console.log(values);

// for each loop desn't return value


//  const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter( (num) => num > 4 )
// console.log(newNums);



 const myNums1 = [1,2,3,4,5,6,7,8,9,10]

// const newNums1 = myNums1.filter( (num) => {
    
//   return  num > 4} )

// console.log(newNums1); 



// we can also use foreach using if condition


const newNums = []

myNums1.forEach( (item) => {
    if(item > 4 ){
 newNums.push(item)
    }
})

// console.log(newNums);

const myArr = [ 10, 30, 40, 50, 10]

const myArr1 =[]

myArr.forEach((num) => {
    if(50 > num)
        myArr1.push(num);
        
})

// console.log(myArr1);

const books = [

    { title: 'book One ', 
        genere: 'Non- Fiction',
        publish: 1981,
        edition: 2004
    },

    { title: 'book Two ', 
        genere: 'Non- Fiction',
        publish: 1992,
        edition: 2008
    },

    { title: 'book Three', 
        genere: 'History',
        publish: 1999,
        edition: 2007
    },

    { title: 'book four ', 
        genere: 'Non-fiction',
        publish: 1989,
        edition: 2010
    },

    { title: 'book five ', 
        genere: 'Science',
        publish: 2009,
        edition: 2014
    },

    { title: 'book six', 
        genere: 'Fiction',
        publish: 1987,
        edition: 2010
    },

    { title: 'book seven ', 
        genere: 'History',
        publish: 1986,
        edition: 1996
    },

    { title: 'book Eight ', 
        genere: 'Science',
        publish: 2011,
        edition: 1996
    },

    { title: 'book Nine ', 
        genere: 'Non-fiction',
        publish: 1981,
        edition: 1989
    },

    
];

let userBooks = books.filter((bk) => bk.title === 'book Three')

userBooks = books.filter((bk) =>{
    return bk.publish >= 1995 && bk.title === 'book five '
})
console.log(userBooks);






