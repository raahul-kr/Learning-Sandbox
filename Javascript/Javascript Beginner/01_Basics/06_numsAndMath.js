const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

// toString() = method; .length = property hai;
console.log(balance.toString().length);
// toFixed se decimal wla value dekteh hai
console.log(balance.toFixed(1));

const otherNumber = 123.89893
// toPrecision se starting se hi count hota hai
console.log(otherNumber.toPrecision(3)); // output 124 aaega


const hunderds = 10000000
console.log(hunderds.toLocaleString());  // output 10,000,000
console.log(hunderds.toLocaleString('en-IN'));  // output 1,00,00,000


// **************************ALL MATHS LIBRARY*******************************

// TYPE     console.log(Math); in console of chrome
console.log(Math);
console.log(Math.abs(-4)); // change the -ve to +ve
console.log(Math.round(4.6));  // do the round off part
console.log(Math.ceil(4.2));  // agar 4 se thoda v bada hai toh upper value will be the output
console.log(Math.floor(4.2));  // vice-versa of ceil
console.log(Math.min(2,4,1,5,8))
console.log(Math.min(2,4,1,5,8))

// some important

console.log(Math.random()); // Gives the value between 0-1
console.log((Math.random()*10) +1)
console.log(Math.floor(Math.random()*10)+1)


const min =10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min)