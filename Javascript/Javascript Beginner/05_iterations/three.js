// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5,6]

for (const num of arr) {  // for of
    console.log(num);
}

const greetings = "Hello world"
for(const greet of greetings){
    console.log(`Each char is ${greet}`)
}


// MAPS

const map = new Map()
map.set('In', "India")
map.set('USA', "United state of America")
map.set('In', "France")

console.log(map);
// timestamp : 11:14