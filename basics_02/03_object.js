// there are two ways to create an object (1. literal and 2. constructor)
// 1. literal = is not singleton 
// 2. constructor = is singleton

// Object.create = (constructor method)



// 1. using object literals  (non singleton)

const user = {
    name : "Nitesh",
    "father name" : "Nandlal Tak",
    age : 27,
    email : "nitesh@gmail.com",
    address : "Ajmer",
    isLogin : false,
    lastLogin : ["wednesday", "Friday"]
}

// behind the scene object keys are read and store as string by js

// two ways to access the value of an object
console.log(user.age);
console.log(user["address"]); // in this case the key should be given as string format bcoz behind the scene it read as string

console.log(user["father name"]); // this way is useful when you want to access the key with space

user.address = "jaipur"  // to change the value of a key
// Object.freeze(user)  // freeze the object to prevent from any changes

user.address = "ahmedabad"
console.log(user);

// adding a function as an object key

user.greeting = function(){
    console.log("hello user");
}

console.log(user.greeting());

user.greeting_two = function(){
    console.log(`hello ${this.name} welcome to chai aur code`);
}
console.log(user.greeting_two());