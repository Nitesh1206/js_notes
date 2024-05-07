function add(num1, num2){
    console.log(num1 + num2);
}

add(1, 5)

// another way

function addNumber(number1, number2){
    return number1 + number2  // to get a return value
}

const sum = addNumber(3, 9) // calling a function
console.log(sum);

// note : function call will only execute the function
// to get any return value from function we need to use return keyword


function addAnotherNumber(number1, number2){
    let result = number1 + number2 
    return result; // return value using a variable
    console.log("nitesh"); // this console doesn't work, bcoz after getting the return keyword, function do not execute the rest code and skip the execution
}

const sum_2 = addAnotherNumber(4, 9) 
console.log(sum_2);


// another example

function greeting(user){
    return `hello ${user} welcome to chai and js`
}

console.log(greeting("nitesh"))

// how to hold infinite value in function parameter

function calculateCartValue(...num){ // rest operator is use to hold multiple value in a functions parameter
    return num
}
console.log(calculateCartValue(50, 20, 10));  // output : [ 50, 20, 10 ]

function cart(val1, val2, ...num){
    return num
}
console.log(cart(20, 40, 90, 10)); // output : [ 90, 10 ]

// note : rest operator create an array of passed parameter 


// using of objects and arrays inside a function

const newOrder = {
    category : "Shoes",
    price : 999
}

function order(placeOrder){
    console.log(`your ${placeOrder.category} are of ${placeOrder.price} rupees`)
}
order(newOrder); // instead of reference you can also pass the direct object here
order({
    category : "Shoes",
    price : 999
}) // we can also pass or declare object directly in function calling without a variable

const cancelOrder = ["shirt", "jacket", "shorts"]

function myPreviousOrder(rejected){
    return rejected[2];
}

console.log(myPreviousOrder(cancelOrder)) // instead of reference you can also pass the direct array here
console.log(myPreviousOrder(["shirt", "jacket", "shorts"])) // you can pass an array without variable also, like this