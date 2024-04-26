let name = "nitesh"  // one way to declare a string

console.log(`${name} learning to become a front-end dev`)


let fullName = new String("Nitesh Tak")  // with new keyword act as string object nd bracket () = is called constructor

console.log(fullName); // with this way you can work with string methods.
console.log(fullName[2]);  // get the value of index 2
console.log(fullName.__proto__); // its a syntax to get the prototype, output is object



//  ************* some string methods/functions *********************
// these string method never change the original values 

console.log(fullName.length);
console.log(fullName.charAt(5));
console.log(fullName.toUpperCase());