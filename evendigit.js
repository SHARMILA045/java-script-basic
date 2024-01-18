const prompt = require('prompt-sync')()
let n = prompt('Enter the value ')
let input = prompt('Enter the values ')
let array = input.split(" ")
for(let i=0;i<n;i++){
    if(array[i].length%2==0)
    console.log(array[i])
}