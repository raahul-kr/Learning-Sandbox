// constructor se object banega toh singleton banega
// object.create  //isse sigleton bantah hai


// object literals || object k andar keys aur value hote hai

const mySym = Symbol("key1")
const JsUser ={
    name : "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",  //syntax of symbol 
    age : 18,
    email: "rah@gmial.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]


}

console.log(JsUser.email) // not good practice
console.log(JsUser["email"]) // authentic way
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"  // change the value
// Object.freeze(JsUser) //  now the value will not change

JsUser.email = "changeme@gmail.com"
console.log(JsUser)


//  =================== function==================
JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello us use, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());