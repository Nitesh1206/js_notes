// 2. using object constructor (singleton)

const obj = new Object()

obj.name = "nitesh"  // way to add values in a object
obj.address = "jaipur"
obj.active = false

console.log(obj);

// nesting of object

const userDetail = {
    email : "nitesh@gmail.com",
    name : {
        fullName : {
            firstName : "Nitesh",
            lastName : "Tak"
        }
    }
}

console.log(userDetail.name.fullName.lastName);

const obj_1 = {1 : "a", 2: "b"}
const obj_2 = {3 : "c", 4: "d"}

const obj_3 = {obj_1, obj_2} // this method put the above two object in another object and create nested obj
console.log(obj_3);  // output : { obj_1: { '1': 'a', '2': 'b' }, obj_2: { '3': 'c', '4': 'd' } }

const my_obj = {5 : "e", 6: "f"}
const my_obj_1 = {7 : "g", 8: "h"}

const my_obj_2 = Object.assign({}, my_obj, my_obj_1) // right way to merge two objects
console.log(my_obj_2);  // output : { '5': 'e', '6': 'f', '7': 'g', '8': 'h' }

// * NOTE : here {} empty paranthesis is a target object where all the source object will merge
// and rest of the object is source object , (my_obj and my_obj_1)
// if you do not provide the {} empty object, so in that case the first object becomes the target object


// modern way of merge two or more object, the spread way
const new_obj = {...my_obj, ...my_obj_1}
console.log("new", new_obj);


const users = [
    {
        id : 1,
        name : "nitesh"
    },
    {
        id : 2,
        name : "vipul"
    },
    {
        id : 3,
        name : "sunny"
    }
]

console.log(users[1].name);


console.log(obj);
// these both method create an array of object keys and values
console.log(Object.keys(obj));
console.log(Object.values(obj)); 

console.log(Object.entries(obj));  // output : [ [ 'name', 'nitesh' ], [ 'address', 'jaipur' ], [ 'active', false ] ]
// this method create an array of multiple arrays, and its elements are every key value pair of object.


console.log(obj.hasOwnProperty("address"));  // check whether the property is available or not and result (true/false)


// ************ Object Destructuring *************

const course = {
    courseName : "js notes",
    fee : 1000,
    courseInstructor : "Hitesh sir",
}

// console.log(course.fee); regular method 

const {courseName, fee} = course
const {courseInstructor : instructor} = course  // you can change the name of the property while destructuring

console.log(fee);
console.log(instructor);