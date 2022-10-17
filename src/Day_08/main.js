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
  
// const users = [
//   {
//       _id: 'ab12ex',
//       username: 'Alex',
//       email: 'alex@alex.com',
//       password: '123123',
//       createdAt:'08/01/2020 9:00 AM',
//       isLoggedIn: false
//   },
//   {
//       _id: 'fg12cy',
//       username: 'Asab',
//       email: 'asab@asab.com',
//       password: '123456',
//       createdAt:'08/01/2020 9:30 AM',
//       isLoggedIn: true
//   },
//   {
//       _id: 'zwf8md',
//       username: 'Brook',
//       email: 'brook@brook.com',
//       password: '123111',
//       createdAt:'08/01/2020 9:45 AM',
//       isLoggedIn: true
//   },
//   {
//       _id: 'eefamr',
//       username: 'Martha',
//       email: 'martha@martha.com',
//       password: '123222',
//       createdAt:'08/01/2020 9:50 AM',
//       isLoggedIn: false
//   },
//   {
//       _id: 'ghderc',
//       username: 'Thomas',
//       email: 'thomas@thomas.com',
//       password: '123333',
//       createdAt:'08/01/2020 10:00 AM',
//       isLoggedIn: false
//   }
//   ];

  const products = [
{
  _id: 'eedfcf',
  name: 'mobile phone',
  description: 'Huawei Honor',
  price: 200,
  ratings: [
    { userId: 'fg12cy', rate: 5 },
    { userId: 'zwf8md', rate: 4.5 }
  ],
  likes: []
},
{
  _id: 'aegfal',
  name: 'Laptop',
  description: 'MacPro: System Darwin',
  price: 2500,
  ratings: [],
  likes: ['fg12cy']
},
{
  _id: 'hedfcg',
  name: 'TV',
  description: 'Smart TV:Procaster',
  price: 400,
  ratings: [{ userId: 'fg12cy', rate: 5 }],
  likes: ['fg12cy']
}
]


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

// const checkUser = () => {
//   let input = prompt('','name')
//   for (const i in users) {
//     if(users[i].username === input) {
//       return `You already have an account`
//     }
//   }
//     users[users.length] ={_id : Math.floor(Math.random()*(1000001*1000001)).toString(36).slice(2),
//     username : (input).toString(),
//     email : input.toLowerCase()+'@'+input.toLowerCase()+'.com',
//     password : (input).toString().toLowerCase(),
//     createdAt : '30/09/2022',
//     isLoggedIn : false
//   }
//   console.log(users)
//   return `${input} added to object` 
  
// }

// console.log(checkUser())


// 2.b - Create a function called signIn which allows user to sign in to the application

// function signIn(){
//   let n = prompt('','name')
//   let p = prompt('','pass')
//   for (const key in users) {
//       if((users[key].username == n) && (users[key].password == p )) {
//         return users[key]
//       }else if(!(users[key].username == n) && (users[key].password == p )){
//         return `Username or password is wrong`
//       }
//   }
//   return `Try again`
// }

// console.log(signIn())

// 3- The products array has three elements and each of them has six properties. 
// 3.a - Create a function called rateProduct which rates the product 

// function rateProduct(){
//   for (const key in products) {
//     if (Object.hasOwnProperty.call(products, key)) {
//       const element = products[key];
//       console.log(element.name, [element.ratings])
//     }
//   }
//   return true
// }

// console.log(rateProduct())

// 3.b- Create a function called averageRating which calculate the average rating of a product

// function averageRating(name){
//   let n = name.toLowerCase()
//   let arr = [0]
//   let sum = 0
//   let average = 0
//   for (const key in products) {
//     let element = products[key]
//     if (n == element.name.toLowerCase()) {
//       for (const i in element.ratings) {
//         arr.push(element.ratings[i].rate)
//       }
//     }
//    }
//    if (arr.length ==1) {
//     return 0
    
//    }else{
//     for (const i of arr) {
//       sum +=i
//      }
//      let num =  arr.length-1
//      average = sum/num
//    }
   
//    return average
// }
// console.log(averageRating('Mobile PHone'))

// 4- Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.

// function likeProduct(){
//   let element
//   for (const key in products) {
//     element = products[key];
//     if(element.likes.length == 0){
//       element.likes.push(Math.floor(Math.random()*(1000001*1000001)).toString(36).slice(2))
//       console.log(element.likes)
//     }else if(element.likes.length != 0){
//       element.likes.pop()
//       console.log(element.likes)
//     }
//   }
//   return 1 // Just I don't wanna get undefined
// }
// console.log(likeProduct())