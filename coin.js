const prompt=require('prompt-sync')()
let coin = (n)=>{
    while(n>0){
        if(n>=a[0]){
            arr.push(a[0])
            n=n-a[0]
        }
        else if(n>=a[1]){
            arr.push(a[1])
            n=n-a[1]
        }
        else if(n>=a[4]){
            arr.push(a[4])
            n=n-a[4]
        }
    }
    return arr
    
}
let arr = []
let n = prompt("Enter the Sum ")
let l = prompt("Enter the no of element ")
let a=[]
for(let i=0;i<5;i++){
    a[i]=prompt()
}
coin(n)
console.log(arr)