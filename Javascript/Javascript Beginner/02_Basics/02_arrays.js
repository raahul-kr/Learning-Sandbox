const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman","Batman","Flash"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros); // dc wla poora as a ek array gya hai
// console.log(marvel_heros[3][1]); // not a good way but this is the way to retreat

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros)   // concat return the whole new array

const all_new_heros = [...marvel_heros, ...dc_heros]  // this is the syntax for the spread operator

console.log(all_new_heros)


//==================================================================
const another_array = [1,2,3, [4,5,6],7,[6,7,[4,5]]] // array me array
console.log(another_array);
// ek me hi sab set kr dena
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)


//-------------------------------------------------------------------
//  TIPS : LEARN MORE ABOUT ARRAY METHOD
console.log(Array.isArray("Hitesh"))  // this is string
console.log(Array.from("Hitesh"))     //  convert it to string
console.log(Array.from({name: "Ramu"}))  //interesting but used later


//--------------------------------------------------------------------

// converting to array
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))