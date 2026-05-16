const name = "Rahul"
const repoCount = 50

// console.log(name + repocount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('hiteshhc')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

// remember the string method

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "  hitesh   "
console.log(newStringOne)
console.log(newStringOne.trim());

const url = "https://hitest.com/histe%20dfg"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'))