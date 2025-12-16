const myNumber = [1, 2, 3]

// let myTotal = myNumber.reduce((accumilator, currentvalue) => {
//     console.log(` acc: ${accumilator} and currval: ${currentvalue}`);
    
//     return accumilator + currentvalue
// }, 0)

// console.log(myTotal);

// const myList = [1, 2, 3, 4, 5]

// myTotal = myList.reduce((acc, currvalue) => {
//     console.log(` acc ${acc} curr ${currvalue}`);
//     return acc + currvalue
// },3)

// console.log(myTotal);


const shoppingCart = [

    {
        itemName: "Js Course",
        price:  2999

    },

    {
        itemName: "Mobile dev Course",
        price:  5999
    },

       { itemName: "Py Course",
        price:  999
    
    },

    {
        itemName: "Data Analyse Course",
        price:  12999
    }
]

const priceTopay = shoppingCart.reduce((acc, item)  => {
//  console.log(` acc ${acc} item ${item}`);

 return  acc + item.price 

},0

)
console.log(priceTopay);




