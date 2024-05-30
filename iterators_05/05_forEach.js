const languages = ["python", "js", "cpp", "java", "php"]

// languages.forEach( function (item){
//     console.log(item); // method 1 for callback function
// })

// languages.forEach((item) => {
//     console.log(item); // method 2 for callback function
// })


function printLang(item){
    console.log(item);
}

languages.forEach(printLang) // you can pass a function as reference in forEach parameter

languages.forEach( (item, index, arr) => { // we have access of index and whole array as well in parameter
    console.log(item, index, arr);
})

languages.forEach(item => { // another method for callback
    console.log(`my fav lang is ${item}`); 
});


// foreach with array of object

const myLanguage = [
    {
        name : "javaScript",
        extension : ".js"
    },
    {
        name : "java",
        extension : ".java"
    },
    {
        name : "python",
        extension : ".py"
    }
]

myLanguage.forEach((item) => {
    console.log(item.extension);
})