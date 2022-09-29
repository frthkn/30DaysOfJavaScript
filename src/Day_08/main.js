// Day 8

let users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
  

// Exercises: Level 1


// 1- Create an empty object called dog

// const dog = {}

// 2- Print the the dog object on the console

// console.log(dog)

// 3- Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof

// const dog = {name : 'Lucky',
// legs : 4,
// color : 'black',
// age : 5,
// bark : function(){
//     return 'woof woof'
// }

// }
// 4- Get name, legs, color, age and bark value from the dog object

// console.log(dog)

// 5- Set new properties the dog object: breed, getDogInfo

// dog.breed = 'Dingo'
// dog.getDogInfo = function(){
//     return `Dog name: ${dog.name}, breed: ${dog.breed}, age: ${dog.age}, color: ${dog.color} and legs: ${dog.legs}`

// }
// console.log(dog.getDogInfo())

// Exercises: Level 2

// 1- Find the person who has many skills in the users object.

for(let key in users){
  let arr = [key]
  if(users[key] instanceof Object){
    for (const keya in users) {
      if (users.hasOwnProperty.call(users, keya)) {
        const element = users[keya];
        
      }
    }
  }
 }
 

// Count logged in users, count users having greater than equal to 50 points from the following object.