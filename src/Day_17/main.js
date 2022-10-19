// Day 17

// Exercises: Level 1

// 1- Store you first name, last name, age, country, city in your browser localStorage.
// You can assing these variables on your browser 

localStorage.setItem('firstName', 'Hakan'),
localStorage.setItem('lastName', 'Fırat'),
localStorage.setItem('age', 34),
localStorage.setItem('country', 'Turkey'),
localStorage.setItem('city', 'Ankara')

// Exercises: Level 2

// Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.

const student = {
    firstName : 'Hakan',
    lastName : 'Fırat',
    age: 34,
    country : 'Turkey',
    skills : ['HTML', 'CSS', 'JS'],
}
// console.log(student)
localStorage.setItem('student',JSON.stringify(student))
let studentParse = JSON.parse(localStorage.getItem('student'), undefined,4)
// console.log(studentParse)

// Exercises: Level 3

// 1- Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

const personAccount = {
    firstName : 'Hakan',
    lastName : 'Fırat',
    incomes : [500,100,45000],
    expenses: [1000,300,200,700],
    totalIncome : function(){
        return incomes.reduce((i,n)=> i+n,0)
    }, 
    totalExpense :function(){
        return expenses.reduce((i,n)=> i+n,0)
    },     
    addIncome: function(incomes){
        return incomes.push(incomes)
    }, addExpense: function(expenses){
        return expenses.push(expenses)
    },
    accountBalance: function(totalIncome,totalExpense){
        return totalIncome-totalExpense
    },
    accountInfo: function(firstName,lastName,accountBalance){
        
        return `Name: ${firstName} Lastname: ${lastName}, Account Balance: ${accountBalance}`
    },
}

localStorage.setItem('personAccount', personAccount)
