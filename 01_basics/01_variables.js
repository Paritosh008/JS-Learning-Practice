const accountId = 123456
let accountEmail = "paritosh123@gmail.com"
var accountPassword = "123"
accountCity = "Mumbai"

let accountstate

//accountId = 23 //not allowed

accountEmail = "paritosh@gmail.com"
accountPassword = "9"
accountCity = "Bengaluru"

/*

Prefer not to use var
because of issue in block scope and functional scope.
*/

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountstate])
