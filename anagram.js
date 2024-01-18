let s1="listen"
let s2="silent"
if(s1.length!=s2.length)
console.log("false")
let res1=s1.split("").sort().join("")
let res2=s2.split("").sort().join("")
if(res1==res2)
console.log("true")
else
console.log("false")