const accountId = 1445533
let accountEmail = "rahul@gmail.com"
var accountPassword = "12345"
accountCity = "Bihar"  // ek variable to aise v likh skteh ho

// accountId = 2  // not allowed
// accountId = 2
accountEmail = "ramu@gmail.com"
accountPassword = "54321"
accountCity = "Jharkhand"

console.log(accountId); // isse ek bar hi print ho ga

/*
  # Prefer not to use VAR
  because of issue in block scope and functional scope

*/


let accountState  // if you will not assign the value it will be undefined
console.table([accountId, accountEmail,accountPassword, accountCity,accountState])
