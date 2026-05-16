// Primitive 

// 7 Types : String, Number, Boolean, Null, undefined, Symbol, BigInt

// Reference (Non primitive)

// Array , Objects, Functions


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id==anotherId);

// array
const heros = ["hero","villian"];

// object 
let myObj = {
    name: "RAhul",
    age : 22,
}

// function 
const myFunction = function(){
    console.log("Hello world");
}

console.log()


//================================================

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "hiteshchoudharydotcom"
let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);