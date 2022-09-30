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

// Way 1

// let a = Object.values(users)
// let names = Object.keys(users)
// let skillsNum = []
// let result = []
// for (let i= 0; i <a.length; i++){
//   skillsNum.push(a[i].skills.length)
//   result.push([names[i],skillsNum[i]])

// }
// let max = Math.max(...skillsNum)
// let index = skillsNum.indexOf(max)
// console.log(result[index])

// Way 2

// let person
// let max = 0
// for (const property in users) {
//   if (users[property].skills.length > max) {
//     max = users[property].skills.length
//     person = property
    
//   }
// }
// console.log(person)

// 2- Count logged in users, count users having greater than equal to 50 points from the following object.

// let arr = []
// for (const property in users) {
//   if (users[property].points == 50) {
//     arr.push(property)
//   }
// }

// console.log(arr + ' and count: '+ arr.length)



// 3- Find people who are MERN stack developer from the users object

// let mern1 = 'MongoDB'
// let mern2 = 'Express'
// let mern3 = 'React' 
// let mern4 = 'Node'
// let arr = []
// for (const property in users) {
//   if (users[property].skills.includes(mern1)&& users[property].skills.includes(mern2) &&users[property].skills.includes(mern3)&&users[property].skills.includes(mern4)){
//     arr.push(property)
//   }
// }
// console.log(arr)

// 4- Set your name in the users object without modifying the original users object

// users.Hakan =  {
//   email: 'hakan@hakan.com',
//   skills: ['HTML', 'CSS', 'JavaScript'],
//   age: 34,
//   isLoggedIn: false,
//   points: 40
// }

// console.log(users)

// 5- Get all keys or properties of users object

// Way 1

// console.log(Object.keys(users))
// 

// Way 2

// let keys = Object.keys(users)
// 
// console.log(keys)


// 6- Get all the values of users object

// Way 1

// let values = Object.values(users)
// console.log(values)

// Way 2

// console.log(Object.values(users))

// 7- Use the countries object to print a country name, capital, populations and languages.

// const countries = {
//   Turkey: {
//     capital: 'Ankara',
//     population: 85,
//     language:'Turkish'
//   },
//   Greece: {
//     capital: 'Athens',
//     population: 10,
//     language: 'Greek'
//   },
//   Italy: {
//     capital: 'Rome',
//     population: 60,
//     language:'Italian'
//   }
// }

// console.log(countries)

// Exercises: Level 3


// 1- Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

// const personAccount = {
//   firstName: 'Hakan',
//   lastName: 'FIRAT',
//   incomes: {
//     accountInfo: 'incomes',
//     addIncome: 500,
//     totalIncome: 500

//   },
//   expenses:{
//     accountInfo :'expenses',
//     addExpense : 300,
//     totalExpense : 300
    
// },
//   accountBalance: totalIncome-totalExpense
// }

// 2- **** Questions:2, 3 and 4 are based on the following two arrays:users and products (). Imagine you are getting the above users collection from a MongoDB database. 

// 2.a - Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.

// 2.b - Create a function called signIn which allows user to sign in to the application



