const accountId = 144553
let accountEmail = "sharanyaag30@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accoutState;

// accountId = 2

// prefer not to use var 
// because of issue in block scope and functional scope

accountEmail = "abcd@.com"
accountPassword = "21212121212"
accountCity = "Bengaluru"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accoutState])