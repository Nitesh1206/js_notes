let todayDate = new Date()
console.log(todayDate);
console.log(typeof todayDate); // output = object

console.log(todayDate.toString()); // (output : Sat Apr 27 2024 20:06:38 GMT+0000) display the date in string readable format

console.log(todayDate.toDateString());  // (output : Sat Apr 27 2024) 

console.log(todayDate.toLocaleString()); // (output : 4/27/2024, 8:05:56 PM)

console.log(todayDate.toLocaleDateString()); // (output : 4/27/2024)

console.log(todayDate.toLocaleTimeString()); // (output : 8:10:06 PM)

console.log(todayDate.toTimeString());  // (output : 20:11:04 GMT+0000)


let realDate = new Date(2024, 3, 28)
console.log(realDate.toDateString()); // (output : Sun Apr 28 2024)

let myTimeStamp = Date.now()
console.log(myTimeStamp);

console.log(realDate.getDay());


let customizeDate = realDate.toLocaleString("default", {
    weekday : "long",
    timeZone : "UTC"
})  
console.log(customizeDate.weekday);  // toLocaleSting can also be use as object to customize the date

