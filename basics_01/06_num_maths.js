//   ******************************* number *************************************

let marks = 89  // in this case js automatically detect the variable type (typeof is number)
console.log(marks);

let totalMarks = new Number(342);  // in this case we strictly define the variable as number type (typeof is object)
console.log(totalMarks);

console.log(totalMarks.toString().charAt(1)) // can convert number into string and apply string methods


let price = 199.8999
console.log(price.toFixed(2)); // (output 199.90) round up at return the value basis of input

console.log(price.toPrecision(4)) // (output 199.9) return the number of value on the basis of input result may vary


let rupees = new Number(10000000) 
console.log(rupees.toLocaleString('en-IN')) // (output 10,000,000) 

console.log(typeof rupees)  // (typeof object)

let amount = rupees.valueOf();
console.log(amount);
console.log(typeof amount);  // (typeof number) re-change the typeof of number object


// ***************************  Math  **********************************

