// method to merge two arrays

const marvel_movies = ["Avengers", "Infinity War","Endgame"]
const dc_movies = ["Wonder women", "Batman vs Superman", "Man of steel"]

marvel_movies.push(dc_movies);  // this method add one array as an element of another array.
// console.log(marvel_movies); // ( output : ['Avengers', 'Infinity War', 'Endgame', [ 'Wonder women', 'Batman vs Superman', 'Man of steel' ]] )
// it push the value into existing array and manipulate the original array.

const marvel_heroes = ["Deadpool", "Wolverine", "Moonnight"]
const dc_heros = ["Aqua Men", "Flesh", "Shazam"]

const all_super_heros = marvel_heroes.concat(dc_heros) // this method concat or merge two arrays
// console.log(all_super_heros);  // ( output : [ 'Deadpool', 'Wolverine', 'Moonnight', 'Aqua Men', 'Flesh', 'Shazam' ] )
// this method return the new array and does not manipulate the original array.

console.log(typeof all_super_heros);

// spread operator (most used method in present days)

const all_new_heros = [...marvel_heroes, ...dc_heros] // this will also merge the two arrays
console.log(all_new_heros);

const nested_array = [1, 3, 5, [0, 1], 9, [2, 7, [4, 6], 10]]  // this method will remove the nesting and spreadout an array as a single array
console.log(nested_array.flat(2));  // output : [ 1, 3, 5, 0, 1, 9, 2, 7, 4, 6, 10 ]


// method to convert other datatype value into an array

console.log(Array.isArray("Nitesh")); // (output: false) this method check the given value is array or not
console.log(Array.from("Nitesh")); // convert an string into an array

console.log(Array.from({name: "Nitesh"})); //  ( output : [] ) it display an empty array
// we need to specify either key or either value of object so that this method can convert array on basis of those values


let one = 1000
let two = 2000
let three = 3000

console.log(Array.of(one, two , three));  // ( output: [ 1000, 2000, 3000 ] ) this method will convert any multiple value into a set of element of array