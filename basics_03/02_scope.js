// *****************  Scope  *******************

function one(){
    let a = "marvel"

    function two(c){
        let b = "avengers"
        console.log(`${b} is a ${c} part of ${a} movies`);
    }
    return two()
}
one()





// ******************  mini hoisting ***********************

console.log(sum1(2,8)); // the normal function can call before declaration

function sum1(a,b){ // this is the normal function declaration
    return a+b
}

// console.log(sum2(5,4)); // we can't call the function before declaration in this kind of function declaration

const sum2 = function(c,d){ // declaration of a function with expression (holding a function in variable)
    return c+d
}