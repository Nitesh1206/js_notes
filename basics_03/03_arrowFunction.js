const user = {
    name : "Nitesh",
    email : "nitesh@gmail.com",
    city : "ajmer",

    welcomeMessage : function(){
        console.log(`Hi ${this.name} welcome to the chai aur code`);
        console.log(this); // this refer to the current context of object
    }
}

// user.welcomeMessage()
// user.name = "vipul"
// user.welcomeMessage()

console.log(this); // ( output : {} ) here this refer empty object as a global object in node environment

// Note : in browser this refer to window object as a global object


// function code(){
//     let chai = "dev.com"
//     console.log(this.chai); // output : undefine / this work with object context
// }
// code()

const myFunc = () => {
    console.log(this); // output : {} / this is also give empty object
}

myFunc()

// const add = (one , two) => {
//     return one + two
// }

// console.log(add(3,5));


//  const add = (one , two) =>  one + two  // implicit return / you can also write like this if single line of statment


const add = (one , two) => (one + two) // another method
console.log(add(3,5));

// note : if use curly braces then return keyword is mandotry

const addMore = (one , two) => ({name : "nitesh"}) // this method is very useful when returning an object 
console.log(addMore(3,5));