// Day 14

// The section is has no exercises that is why I will show some example, here it is

// try/catch statement

// The try/catch statement marks a block of statements to try, and specifies one or more responses should an exception be thrown. If an exception is thrown, the try...catch statement catches it. 

// The finally block

// The finally block contains statements to be executed after the try and catch blocks execute. Additionally, the finally block executes before the code that follows the try…catch…finally statement. 

try {
    const lastName = 'Hakan'
    const fullName = firstName + ' ' + lastName
  } catch (err) {
    console.log('Name of the error', err.name)
    console.log('Error message', err.message)
  } finally {
    console.log('In any case I will be executed')
  }



//   throw statement

//   Use the throw statement to throw an exception. A throw statement specifies the value to be thrown

try {
    throw new Error('Whoops!');
  } catch (e) {
    console.error(`${e.name}: ${e.message}`);
  }
  


// Some Error types

// ReferenceError

// Creates an instance representing an error that occurs when de-referencing an invalid reference.

const firstName = 'Hakan'
const fullName = firstName + ' ' + lastName
console.log(fullName)


// SyntaxError

// Creates an instance representing a syntax error.

// const square = 2 x 2
// console.log(square)
// console.log('Hello, world");


// TypeError

//  Creates an instance representing an error that occurs when a variable or parameter is not of a valid type.

// ;const num = 10
// console.log(num.toLowerCase())



