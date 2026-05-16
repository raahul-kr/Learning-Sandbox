// // let score = 33
// let score = "33n" // gives otp -> NaN

// console.log(typeof score);
// console.log(typeof(score)); // hm isse as method bhi likh skteh hai

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// // BOOLEAN 

// let isLoggedIn = "Hitesh"

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);
// /* toh boolean k case me
// agar 1 -> true, 0-> false
//      "" -> false
//      "hitesh" ->true
// */

// *******************  Operations  ************************

let value = 3
let negvalue = -value
console.log(negvalue)

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

let str1 = "heelu"
let str2 = "hitesh"
let str3 = str1+str2
console.log(str3);

// tricky one 
console.log("2"+2); //22
console.log(2+"2");  //22
console.log("1"+2+2); // 122
console.log(1+2+"2"); //32

// learn operator precedence

console.log((3+4)*5%3)

// search postfix and prefix mdn docs
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment