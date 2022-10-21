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



