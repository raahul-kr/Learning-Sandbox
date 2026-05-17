// Dates ki baate

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23)  // jan start from 0
let mrCreateDate1 = new Date("2023-01-14")  // yyyy mm dd
let myCreateDate2 = new Date("01-14-2023")  // mm dd yyyy
let myCreatedDate3 = new Date(2023, 0, 23, 5, 3)  // date + time


console.log(myCreatedDate.toLocaleString())
console.log(myCreatedDate3.toLocaleString())


//  TIME STAMP

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());



// have to research more for this 

// `${newDate.getDay()} and the time
newDate.toLocaleString('default',{
    weekday: "long",
    timeSone: ''
})