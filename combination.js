const prompt = require('prompt-sync')()
let combination = (str) =>{
    let array =[];
    for(let i=0;i<str.length;i++){
        for(let j=0;j<str.length+1;j++){
            array.push(str.slice(i,j));
        }
    }
    return array
}
let str = prompt("Enter the value ")
console.log(combination(str))