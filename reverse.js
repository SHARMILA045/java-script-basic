const prompt = require('prompt-sync')()
let n = prompt("Enter the value")
let res=n.split("").reverse().join("")
console.log(res)