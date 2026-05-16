// Basics comparison 
console.log(2>1);  
console.log(2>=1);  
console.log(2<1);  
console.log(2==1);       
console.log(2!=1);       



console.log(null > 0);  // false (here is assignment operator)
console.log(null == 0); // false
console.log(null >= 0); // true (because here is comparison operator and null is converted to number which is 0 . so it is true)


console.log(undefined == 0);
console.log(undefined < 0);
console.log(undefined > 0);

// Strict check -> === (check both datatype and numbers)
console.log("2"===2);