// for in loop : almost similar to for of loop, also iterate on object and arrays
// iterate over properties of object 

// this loop operates on keys

// note : for..in loop  allow to iterate over object other-wise object are non-iterable
// (object.keys and object.values and object.entries) allow to iterate over the properties of an object. 

const myObj = {
    js : "javascript",
    cpp : "c++",
    py : "python"
}

for (const key in myObj) {
    console.log(`${key} is the extension of ${myObj[key]}`);   
}

// Note : in above example ${key} provide the key of object
// and ${myObj[key]} provide the value of object


// for in with array

const languages = [ "python", "javascript", "c plus plus"]

for (const key in languages){
    console.log(languages[key])
}


// Map with for in


const map = new Map()

map.set("name", "Nitesh")
map.set("address", "jaipur")
map.set("email", "nitesh@gmail.com")
map.set("dress", "jaipur")

// console.log(map);

for ( const [key] in map){
    console.log(key);  // Map is not iterable by for..in
} 