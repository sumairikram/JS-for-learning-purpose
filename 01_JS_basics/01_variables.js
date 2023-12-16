const accountId = 33102
let accountEmail = "sumair@gmail.com"
var accountPassword = "12345"
accountCity = "Faisalabad" // also used to declear variable but not prefer

let accountState;

// const details
// jb hum variable as a const create kerty hai
// to us ko change nahi ker skty
// agar change kia to for example 
// accountId = 2
// to ye error generate ker dain ga


// let details
accountEmail = "asad@gmail"
// let ko hum block scope or functional scope mai use ker skty hai 
// for example first block mai accountEmail = "sumair@gmail.com" ye hai
// or second block mai accountEmail = "asad@gmail" ye hai to second block ki value
// first block mai available accountEmail ki value se replace nahi ho gi

if (true) {
    let accountEmail = "firstIf"
    console.log("let with First if",accountEmail);
if (true) {
    let accountEmail = "firstIfWithInIf"
    console.log("let with First if WithInIf",accountEmail);
}
    
    
}
if (true) {
    let accountEmail = "SecondIf"
    console.log("let with Second if",accountEmail);
}


if (true) {
    var accountPassword = "firstIf"
    console.log("Var with First if",accountPassword);

    if (true) {
        accountPassword = "firstIfWithInIf"
        console.log("var with First if WithInIf",accountPassword);
    }
}
if (true) {
    accountPassword = "SecondIf"
    console.log("Var with Second if",accountPassword);
}

if (true) {
    var accountCity = "firstIf"
    console.log("Var with First if",accountCity);

    if (true) {
        var accountCity = "firstIfWithInIf"
        console.log("var with First if WithInIf",accountCity);
    }
}
if (true) {
    var accountCity = "SecondIf"
    console.log("Var with Second if",accountCity);
}

if (true) {
    let accountCity = "firstIf"
    console.log("let with First if",accountCity);

    if (true) {
        let accountCity = "firstIfWithInIf"
        console.log("let with First if WithInIf",accountCity);
    }
}
if (true) {
    let accountCity = "SecondIf"
    console.log("let with Second if",accountCity);
}


// var details
accountPassword = "34333"
// var ko hum prefre nahi kerty q ky is mai block scope or functional scope ka issue ata hai


// accountCity details
accountCity = "Lahore"

console.log(accountId);
console.log(typeof(accountId));

console.log(accountEmail);
console.log(typeof(accountEmail));

console.log(accountPassword);
console.log(typeof(accountPassword));

console.log(accountCity);
console.log(typeof(accountCity));
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);


