// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

// Array methods

myArr.push(6)
myArr.push(8)
myArr.pop()

console.log(myArr)

myArr.unshift(9) // fisrt me add kara 
myArr.unshift()  // pehla position delete ho jayega

console.log(myArr.includes(9)); // return in bool
console.log(myArr.indexOf(3));

const newArr = myArr.join() // join the arr but its type is string
console.log(typeof(newArr)) 
console.log(newArr) 



console.log(myArr)



// -----------SLICE AND SPLICE

console.log("A ", myArr)
const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);  // splice me original arry manipulte ho jata hai
console.log(myn2)