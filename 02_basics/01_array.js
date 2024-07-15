const myArr=[0,1,2,3,4]
//array is resizable,hetrogenous and zero indexed

const names=["Sam","Meera"]

//second way to declare array
const arr2=new Array(1,2,3,4)

//passed through shallow copy-reference
//not deep copy- pass by value

arr2.push(6)
console.log(arr2);
arr2.pop()

//insert at begining
arr2.unshift(9)
console.log(arr2);
arr2.shift()
console.log(arr2);

// array functions slice vs splice
console.log(arr2);
console.log(arr2.slice(1,2));
console.log(arr2);
console.log(arr2.splice(1,2));
console.log(arr2);