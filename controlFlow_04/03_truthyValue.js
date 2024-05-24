// Truthy values : when their is no condition applied but assumed that it is a true value

const userEmail = "nitesh@gmail.com"

if(userEmail){
    console.log("email is correcy");
}else{
    console.log("no email found");
}


// truthy values

// "0", " ", "false", "[]", "{}", function(){}

// falsy values
// false, 0, -0, Nan, undefine, null, bigint 0n, ""


// way to check array is empty or not

const emptyArray = []

if(emptyArray.length === 0){
    console.log("array is empty");
}

// way to check object is empty or not

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("object is empty");
}


// for interview purpose

// false == 0 is true
// false === 0 is false
// false == "" is true
// false === "" is false
// 0 == "" is true
// 0 === "" is false


// Nullish coalescing operator (??) : null undefined

// this opreator is created for null and undefined 
// this operator is use for safety check while accessing data from api
// if the calling value is null or undefined then handle accordingly in application

let val1;

// val1 = 5 ?? 8
// val1 = null ?? undefined  // output : undefined
val1 = undefined ?? 5 // output : 5
val1 = null ?? 7 // output : 7

console.log(val1);