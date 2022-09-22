// Exercises:Day 6

// Exercises: Level 1

// 1-Iterate 0 to 10 using for loop, do the same using while and do while loop

// For loop

// for(let i = 0;i < 11;i++){
//     console.log('This is for loop: '+i)
// }

// While loop

// let i = 0
// while(i <11){
//     console.log('This is while: '+i)
//     i++
// }

// Do While Loop

// let i = 0

// do {
    
//     console.log('This is Dowhile: '+i)
//     i++
// } while (i<11);


// 2- Iterate 10 to 0 using for loop, do the same using while and do while loop

// For loop

// for(let i = 10;i >=0;i--){
//     console.log('This is for loop: '+i)
// }

// While loop

// let i = 10
// while(i>=0){
//     console.log('This is while: '+i)
//     i--
// }

// Do While Loop

// let i = 10

// do {
    
//     console.log('This is Dowhile: '+i)
//     i--
// } while (i>=0);


// 3- Iterate 0 to n using for loop

// let n = 8

// for (let i=0; i<=n; i++){
//     console.log(i)
// }

// 4- Write a loop that makes the following pattern using console.log():

//     #
//     ##
//     ###
//     ####
//     #####
//     ######
//     #######

// let x;
// for(let i = 1; i<9; i++){
//     for(let j = 1; j<i; j++){
//         x =x+('#')
//     }
//     console.log(x)
//     x ='';

// }

// 5- Use loop to print the following pattern:

// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100

// for(let i =0; i <11; i++){
//     console.log(i + ' x ' + i + ' = ' + i*i)
// }

// 6- Using loop print the following pattern

//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000

// console.table('i ' +  ' i^2 ' +  'i^3')
// for(let i =0; i <11; i++){
    
//     console.log(i + '  ' + i*i + '  ' + i*i*i)
// }

// 7- Use for loop to iterate from 0 to 100 and print only even numbers

// for(let i =0; i <101; i++){
//     if ((i%2) == 0){
//         console.log(i)
//         continue
//     }

// }

// 8- Use for loop to iterate from 0 to 100 and print only odd numbers

// for(let i =0; i <100; i++){
//     if ((i%2) != 0){
//         console.log(i)
//         continue
//     }

// }


// 9- Use for loop to iterate from 0 to 100 and print only prime numbers

// let prime
// for(let i =2; i <101; i++){
//     prime = 1
//     for(let j = 2; j<=i/2; j++){
//         if(i%j == 0){
//             prime =0
//             break
//         }
//     }
//     if(prime ==1){
//         console.log(i)
//     }
// }

// 10- Use for loop to iterate from 0 to 100 and print the sum of all numbers.

// let sum = 0

// for(let i = 0; i<101; i++){
//     sum += i
// }

// console.log('The sum of all numbers from 0 to 100 is: '+sum)

// 11- Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

// let sumEvens = 0
// let sumOdds = 0
// for(let i =0; i <100; i++){
//     if ((i%2) != 0){
//         sumEvens += i
//         continue
//     }

// }

// for(let i =0; i <101; i++){
//     if ((i%2) == 0){
//         sumOdds += i
//         continue
//     }

// }

// console.log('The sum of all evens from 0 to 100 is: ' + sumEvens+ '. And the sum of all odds from 0 to 100 is: ' +sumOdds)


// 12- Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

// let sumEvens = 0
// let sumOdds = 0
// for(let i =0; i <100; i++){
//     if ((i%2) != 0){
//         sumEvens += i
//         continue
//     }

// }

// for(let i =0; i <101; i++){
//     if ((i%2) == 0){
//         sumOdds += i
//         continue
//     }

// }
// let arr =[]
// arr.push(sumEvens, sumOdds)
// console.log(arr)

// 13- Develop a small script which generate array of 5 random numbers

// let arr = []
// for(let i= 0; i<6;i++){
//     let a = Math.floor(Math.random()*100)
//     arr.push(a)
    
// }
// console.log(arr)

// 14- Develop a small script which generate array of 5 random numbers and the numbers must be unique

// let arr = []
// for(let i= 0; i<6;i++){
//     let a = Math.floor(Math.random()*Date.now())
//     arr.push(a)
    
// }
// console.log(arr)

// 15- Develop a small script which generate a six characters random id:

// let id = (new Date()).getTime().toString(26).slice(3)
// console.log(id)

// Exercises: Level 2

// 1- Develop a small script which generate any number of characters random id:

// let id = (Math.random()*Date.now()*100000).toString(16)
// console.log(id)

//2- Write a script which generates a random hexadecimal number.

// let id = Math.floor(Math.random()*Date.now())
// let hex = '#'+id.toString(36).slice(2)
// console.log(hex)

// 3- Write a script which generates a random rgb color number.

// let num1 = Math.floor(Math.random()*256)
// let num2 = Math.floor(Math.random()*256)
// let num3 = Math.floor(Math.random()*256)
// let rgbNum = 'rgb('+num1 +',' + num2 +','+num3+')'

// console.log(rgbNum)

// 4- Using the above countries array, create the following new array.

 let countries = ['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya']
// let text = countries.toString().toUpperCase()
// let re = /\w+/g
// console.log(text.match(re,'&$,'))

// 5- Using the above countries array, create an array for countries length'.

// let count = []
// for(let i = 0; i < countries.length; i++){
//     count.push(countries[i].length)   
//   }
// console.log(count)

// 6- Use the countries array to create the following array of arrays:

// let newArr = []
// for(let i = 0; i < countries.length; i++){
//     newArr.push([[countries[i],countries[i].slice(0,3).toUpperCase(),countries[i].length]])   
// }
// console.log(newArr)

// 7-In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

// let getElement = countries.toString()
// let words= getElement.match(/...land/gi)
// console.log(words)


// 8-In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

// let getElement = countries.toString()
// let words= getElement.match(/.....ia|......ia/gi)
// console.log(getElement);
// console.log(words)

// Using the above countries array, find the country containing the biggest number of characters.

// Ethiopia

// Using the above countries array, find the country containing only 5 characters.

// ['Japan', 'Kenya']

// Find the longest word in the webTechs array

// Use the webTechs array to create the following array of arrays:

// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]

// An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

// Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

// This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

// Print all the elements of array as shown below.

//   const fullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB']
//   ]

//   HTML
//   CSS
//   JS
//   REACT
//   NODE
//   EXPRESS
//   MONGODB

// Exercises: Level 3

// 1- Copy countries array(Avoid mutation)
// Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
// Sort the webTechs array and mernStack array
// Extract all the countries contain the word 'land' from the countries array and print it as array
// Find the country containing the hightest number of characters in the countries array
// Extract all the countries contain the word 'land' from the countries array and print it as array
// Extract all the countries containing only four characters from the countries array and print it as array
// Extract all the countries containing two or more words from the countries array and print it as array
// Reverse the countries array and capitalize each country and stored it as an array
