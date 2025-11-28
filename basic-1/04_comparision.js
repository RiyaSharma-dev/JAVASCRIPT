// 🔹 1. == (Loose Equality / Abstract Equality)

// यह datatype को convert करके values compare करता है।

// Type conversion की वजह से unexpected results मिल सकते हैं।

console.log("2">1); //true because string convert into number so 2 >1
console.log("02">1);//true because string convert into number so 02 >1
console.log(true==1); //true


console.log(null>0);
console.log(null==0);
console.log(null>=0); //true

// 🔹 2. === (Strict Equality)

// यह datatype भी check करता है और value भी।

// कोई type conversion नहीं होता।

console.log(2 === "2");    // false (number और string अलग हैं)
console.log(true === 1);   // false (boolean और number अलग हैं)
console.log(false === 0);  // false (boolean और number अलग हैं)
console.log(null === undefined); // false (datatype अलग है)

