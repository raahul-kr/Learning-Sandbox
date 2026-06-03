// for of

// ["", "", ""] // arr 
// [{}, {}, {}] // object

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
map.set('In', "India") // this will not print bcoz map is for unique
map.set('USA', "United state of America")
map.set('Fr', "France")

console.log(map);

// printing map via for of loop

for(const key of map){
    console.log(key)
}

// can print differently
for(const [key,value] of map){  // deconstruct
    console.log(key, ':-', value)
}


// NOTE: - map is iteratable but object is not