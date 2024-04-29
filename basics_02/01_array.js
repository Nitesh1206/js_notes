// arrays

const myArray = [2, 4, 5, 1, 0, 6]
const heroes = ["CaptainAmerica", "IronMan", "Hulk", "Thor", "SpiderMan", "DoctorStrange", "BlackPanther"]

console.log(heroes[0]);

const array1 = new Array(1, 2, 7, 9, 0) // another method to define the array
console.log(array1);


// array methods

heroes.push("WinterSoldier") // add a new element at the end of an array
console.log(heroes);

heroes.pop()
console.log(heroes) //  remove last element of an array

heroes.unshift("Falcon")
console.log(heroes);  // add a new element at the beginning of an array, but it is not good to use 
                      //  with large element array, bcoz it shift all the element and index will change 

heroes.shift()
console.log(heroes);  // remove the first element of an array

console.log(heroes.includes("HULK")); //  check whether the value is present in the array or not and give boolean result 

console.log(heroes.indexOf("SpiderMan"));



const newArray = myArray.join() // this method will join the array change the array into string and its typeof too

console.log(newArray);  // output = 2,4,5,1,0,6
console.log(typeof newArray);

console.log(myArray);
console.log(typeof myArray);


// another way to join an array 

console.log(myArray.join('')); // output = 245106
console.log(myArray.join('-'));  // output = 2-4-5-1-0-6


// slice and splice method

const one = myArray.slice(1,4); // slice method does not include the last mention index value
console.log(one);      // ( output : [ 4, 5, 1 ] ) and it does not manipulate the original array
console.log(myArray);  // ( output : [ 2, 4, 5, 1, 0, 6 ] ) origial array after slice

const two = myArray.splice(1,4) // splice method include the last mention index value
console.log(two);      // ( output : [ 4, 5, 1, 0 ] ) and it manipulate the original array
console.log(myArray);  // ( output : [ 2, 6 ] ) original array after splice
