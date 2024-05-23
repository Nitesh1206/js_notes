// (IIFE) = Immediately Invoked Function Expression
// IIFE are the functions that execute immediately

// Note : sometime global scope create the pollution, to remove the pollution of global scope variable and declaration we use IIFE

// to create an IIFE we wrap the function defination into a paranthesis.
// semicolon is necessary after every IIFE funtion if we write two or more IIFE 

(function card(info){
    console.log(info);
})("Hello");

( (greeting) => {
    console.log(greeting);
})("good morning")
