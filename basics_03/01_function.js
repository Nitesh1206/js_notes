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