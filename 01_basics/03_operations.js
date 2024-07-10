let str1="Hello"
let str2=" Vrinda"

//console.log(str1+str2)

//console.log(typeof str1)
let num=3

let stringnum=String(num)
//console.log(typeof stringnum)//convert explicitly to string
//console.log(stringnum)

let num2= "33abc"

let stringnum2=Number(num2)//explicitly to number

//console.log(typeof stringnum2) // type is number
//console.log(stringnum2) //value is Nan(not a number)

let stringnum3=Number(undefined) 
//null case gives value as 0, undefined-NaN
//console.log(stringnum3)

let num1,num4
num1=num2=2+3

console.log(num2)
