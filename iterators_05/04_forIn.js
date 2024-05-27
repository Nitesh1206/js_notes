// for in loop : almost similar to for of loop, also iterate on object and arrays

// this loop operates on keys

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