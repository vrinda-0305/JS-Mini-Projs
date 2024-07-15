//singleton
//Object.create()

//object literals

const mySym=Symbol("key1")


const JsUser = {
    name:"Vrinda",
    "full name": "Vrinda Sabharwal",
    [mySym]:"key1" ,
    age: 21,
    isLoggedIn:false,
    LastLoginDays:["Monday","Tuesday"]
}

console.log(JsUser.name);
console.log(JsUser["name"]);//key values are treated as strings

console.log(JsUser["full name"]);

console.log(JsUser[mySym]);
console.log(typeof mySym);
