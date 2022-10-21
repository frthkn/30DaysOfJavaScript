// Day 19

// Exercises: Level 1

// 1- Create a closure which has one inner function

function outerHasOneFunc(){
  const sayHi = 'Hello'
  function innerOne (){
    return `${sayHi} world!`
  }

  return innerOne()
}

// console.log(outerHasOneFunc())

// Exercises: Level 2

// 1- Create a closure which has three inner functions


function outerHasThreeFunc(){
  const sayHi = 'Hello'
  function innerFuncOne (){
    return `${sayHi} world!`
  }
  function innerFuncTwo(){
    return `How are you`
  }

  function innerFuncThree(){
    return `What is your favorite game`
  }

  return {
    funcOne:innerFuncOne(),
    funcTwo: innerFuncTwo(),
    funcThree: innerFuncThree()
  }
}

// console.table('\n',
//   outerHasThreeFunc().funcOne,'\n', 
//   outerHasThreeFunc().funcTwo,'\n',
//   outerHasThreeFunc().funcThree
// )

// Exercises: Level 3

// 1-Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. 
// It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. 
// Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

function personAccount(itemIncome, itemExpense){
  const firstName ='Hakan'
  const lastName = 'Fırat'
  const incomes = [100,200,300,400]
  const expenses = [100,200,300]

  function totalIncome(){
    return incomes.reduce((a,b)=> a+b,0)
  }

  function totalExpense(){
    return expenses.reduce((a,b)=> a+b,0)
  }
  
  function accountInfo(){
    return `${firstName} ${lastName}`
  }
  
  function addExpense(){
    return expenses.push(itemExpense)
  }

  function addIncomes(){
    return incomes.push(itemIncome)
  }

  function accountBalance(){
    return totalIncome()-totalExpense()
  }
 
  return {
    addIncomes: addIncomes(),
    addExpense : addExpense(),
    'Account Info' : accountInfo(),
    'Account Balance' : accountBalance()
  }
}

// console.log(personAccount(0,0))
// console.log(personAccount(100,300))