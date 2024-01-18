const prompt = require('prompt-sync')()
let n=prompt("Enter a number")
let v=prompt("values")
let res=v.split(" ")
let l=prompt("rotate value")
for(let i=0;i<l-1;i++){
    res.unshift(res.pop())
}
console.log(res)