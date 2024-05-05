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
