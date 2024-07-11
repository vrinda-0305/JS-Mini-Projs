const number=400
console.log(number);

//using new keyword for object Number
const balance=new Number(400.28567);
console.log(balance);

//functions or properties on Number
console.log(balance.toFixed(3));
console.log(balance.toPrecision(4));

//separate zeroes/numbers for easy count, en-IN- commas as per Indian numbering system else US based
const hundreds=10000005;
console.log(hundreds.toLocaleString('en-IN'));

//+++++++Math+++++++

console.log(Math.abs(-5));
console.log(Math.round(23.45));
//ceil,floor.min,max

//random- generates values between 0 and 1
console.log(Math.random());
console.log(Math.floor(Math.random()*10)+1);//between 0 and 10 

min=10
max=20
//between max and min
console.log(Math.floor(Math.random()*10)+1)+min;