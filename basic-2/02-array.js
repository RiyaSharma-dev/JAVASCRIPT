const marvel_heroes =["ironman", "Spiderman", "hulk", "thor"]
const anime = ["Naruto", " One Piece", "my hero acdmeia"]

// marvel_heroes.push(anime)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3]);


// const  allHeroes = marvel_heroes.concat(anime) // give us new array
// console.log(allHeroes);


// const all_new_heros = [...marvel_heroes, ...anime] // spread opreater 
// console.log(all_new_heros);

// concat and spread op both gives same output

const another_array = [1,2,3, [4,5,6], 7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);


console.log(Array.isArray(["Riya"]));  //true
console.log(Array.isArray(1,2,3)); // false
console.log(Array.isArray([1,2,3])); // true

console.log(Array.from("Riya"));  // convert into array 
console.log(Array.from({name: "riya"}));  // [] empty array because  we have to tell key



let score1 =100
let score2 =200
let score3 =300
console.log(Array.of(score1, score2,score3)); // convert into array any datatype easliy
console.log(Array.of({name: "riya"}));  // convert into array any datatype easliy
console.log(Array.of("number"));

