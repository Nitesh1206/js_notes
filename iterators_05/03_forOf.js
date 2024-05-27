// for of loop

// work on iterable 
// ["", "", ""] 
// [{}, {}, {}]

const heros = ["thor", "captain america", "ironman"]
for (const hero of heros) {
    console.log(hero);
}

const desihero = "Shaktiman"
for (const indian of desihero){
    console.log(indian);
}

// Note : for of is useful when we are working with values instead of indexs and keys
// it operates on values


// Map object

// Map hold key value pairs
// Map remember the original insertion order and iterate in sequence/ insertion order
// Map hold the unique values of keys (a key in map occurs once )
// key value pair insert using set() method

const map = new Map()

map.set("name", "Nitesh")
map.set("address", "jaipur")
map.set("email", "nitesh@gmail.com")
map.set("dress", "jaipur") // key should be unique but value can be duplicate

console.log(map);

for (const key of map) {
    console.log(key);
}

for (const [key] of map) {
    console.log(key);
}

for (const [key, value] of map) {
    console.log(`${key} =: ${value}`);
}


// iteration on object

const movies = {
    movie_one : "Marvels",
    movies_two : "DC"
}
for (const movie of movies)
console.log(movie); // output : error (movies is not iterable) bcoz bcoz objects are not iterable by for of 
