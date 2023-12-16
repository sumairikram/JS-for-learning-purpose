let uName = "Sumair"
let age = 15
let score = undefined
let salary = null
let isMale = true

let userName = Number(uName);
// userNmae is a number but the value is NaN
console.log(typeof(userName), "Value of userName", userName)


let userNameBol = Boolean(uName);
// userNameBol is a boolean but the value is NaN
console.log(typeof(userNameBol), "Value of userNameBol", userNameBol)

let realSalary = Number(salary)
// realSalary is a number but the value is 0
console.log("Value of realSalary", realSalary)


let realScore = Number(score)
// realScore is a number but the value is NaN
console.log("Value of realScore", realScore)


console.log("Type of Salary", typeof  salary)
console.log("Type of Salary", typeof(salary))
// Type of Salary is object

console.log("Value of salary", salary);
// Value of salary is null



console.log("Type of score", typeof  score)
console.log("Type of score", typeof(score))
// Type of score is undefined
console.log("Value of score", score);
// Value of score is undefined


console.log("Type of Age", typeof  age)
// Type of Age is number



console.log(typeof uName, userName, age, score, realScore, salary, realSalary, isMale);
// is terha likhny se just uName variable ki type btai ga baqi variables ki value print kry ga

console.log(typeof(uName), typeof(userName), typeof(age), typeof(score),  typeof(realScore), typeof(salary),  typeof(realSalary), typeof(isMale) );


console.log(uName, userName,age, score, realScore, salary, realSalary, isMale)
