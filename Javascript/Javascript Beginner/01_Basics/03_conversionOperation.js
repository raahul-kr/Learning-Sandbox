// let score = 33
let score = "33n" // gives otp -> NaN

console.log(typeof score);
console.log(typeof(score)); // hm isse as method bhi likh skteh hai

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// BOOLEAN 

let isLoggedIn = "Hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
/* toh boolean k case me
agar 1 -> true, 0-> false
     "" -> false
     "hitesh" ->true
*/