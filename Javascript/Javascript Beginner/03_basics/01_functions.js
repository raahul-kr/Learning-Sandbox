// console.log("R");
// console.log("A");
// console.log("H");
// console.log("U");
// console.log("L");

// function sayMyName(){
//     console.log("R");
//     console.log("A");
//     console.log("H");
//     console.log("U");
//     console.log("L");
    
// }

// sayMyName()

function addTwoNumbers(number1, number2){ // has two parameters
    console.log(number1+number2);
}


function addTwoNumbers(number1, number2){ // has two parameters
    let result = number1 + number2
    return result
}


const result = addTwoNumbers(3, 5); // has two arguments
console.log("Result: ", result);



//----------------------------------------------------------

// function loginUserMessage(username){
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("Ramu"))


//---------------------------------------------------------------

// function loginUserMessage(username){
//     if(!username){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("Rahul"))
// // console.log(loginUserMessage())

//-----------------------------------------------------------------

//default value set kr skteh hai aur

function loginUserMessage(username = "Ramu"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Rahul"))
console.log(loginUserMessage())


// function part 2

function calculateCartPrice(...num1){  // this is  REST OPERATOT not a SPREAD OPERATOR
    return num1
}

console.log(calculateCartPrice(200,300,400))


//=======================================================


const user = {
    username : "Ritesh",
    price : 199
}

function handleObject(anyobject){
    console.log(`Usename is ${anyobject.username} and price is ${anyobject.price}`);

}

// handleObject(user); // or 
handleObject({
    username: "Ramu",
    price: 3999
})

//------------------------------------------------------------------

const myArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myArray))
console.log(returnSecondValue([200,300,400,500]))