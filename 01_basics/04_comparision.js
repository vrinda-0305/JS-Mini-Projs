console.log(2>1) //regular comparision
console.log(2!=2)

console.log("2">1) //JS converts and checks for numeric values
console.log("2"==2)

//confusing cases in undefined and null

console.log(null>0)
console.log(null == 0)
console.log(null>=0) //implicitly convert null to 0 in case of comparision operators not equality

//strict check

console.log("2" === 2)