// reduce : it iterate over an array and reduce it to a single value
// take accumulator and currentValue as an argument

const myArr = [1, 2, 3, 4]

const newVal = myArr.reduce(function (accum, curVal) {
    console.log(`${accum} and ${curVal}`);
    return accum + curVal
}, 0)

console.log(newVal);

// Note : here 0 is initial value that is hold by accum (accumulator)
// if initial value is not provide then it take index 0 as an initial value and iteration start form the index 1
// the given initial value is use only in first iteration 



// another example

const myCourse = [
    {
        name : "Chai aur js",
        price : 1499
    },
    {
        name : "Chai aur react",
        price : 1999
    },
    {
        name : "Chai aur python",
        price : 2999
    },
    {
        name : "Chai aur DSA",
        price : 3999
    }
]

const cartTotal = myCourse.reduce((accum, item) => accum + item.price, 0)
console.log(cartTotal);