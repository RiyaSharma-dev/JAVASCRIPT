// const tinderUser = new Object() =  singleton

//  Non-singleton = literal object

const  tinderUser =  {} 

tinderUser.id = "123abc"
tinderUser.name = "Riya"
tinderUser.isLoggenIn = false

// console.log(tinderUser);


tinderUser.hello = function(){
    console.log(`hello ${this.name} you can do it, believe yourself `);
    
}

tinderUser.hello()

const regularUser = {
    email: "some@gamil.com",

   fullname: {
         userfullname:{
            firstname: "Riya",
            Lastname: "Sharma"
         }
    },



}




// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "a",
    4: "b"
}

const obj4 = {
    5: "a",
    6: "b"
}

// const obj3 = {obj1, obj2}

// const obj3 =  Object.assign({},obj1, obj2, obj4)

 const obj3 = {...obj1, ...obj2, ...obj4 } // spread operater
// console.log(obj3);



const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));   = change into array
// console.log(Object.values(tinderUser));     "
// console.log(Object.entries(tinderUser));    "

// console.log(tinderUser.hasOwnProperty('name'));
// console.log(tinderUser.hasOwnProperty('isLoggenIn'));


const  course = {

    course: "javascript",

    price: "999",

   courseInstructor: "Hitesh"

}

// console.log(course.courseInstructor);

// De-structure

const {courseInstructor: instructor} = course
const{price: reprice}= course

// console.log(reprice);
// console.log(instructor);

// console.log(course);



//जब भी API data send/receive करती है तो वो mostly JSON text format me hota
//  है — इस JSON based data exchange ko ही hum generally JSON API बोल देते हैं।

// json= javascript object notation

// JSON = text format

// us text me 2 main non-primitive “container shapes” dikhte हैं:

// JSON container	explanation
// { }	object (key-value)
// [ ]	array (list)





