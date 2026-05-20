// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// nested way
const regularUser = {
    email : "some@gmail.com",
    fullname: {
        userfullname : {
            firstname: "ramu",
            lastname: "kr"
        }
    }
}

// object k andar object
console.log(regularUser.fullname.userfullname.firstname);

// assigning the object
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// method 1
// const obj3 = { obj1, obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4)

// method 2
const obj3 = {...obj1, ...obj2}  // spread
console.log(obj3);


//=====================================================
//    THESE ARE IMP TERMS 


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

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



//Object de-structure
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

// random user api : https://randomuser.me/
// json formater : https://jsonformatter.org/