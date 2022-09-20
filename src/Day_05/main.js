// Day 5 

import {countries} from './countries.js'
import {webTechs} from './web_techs.js'

// Exercise: Level 1

// 1- Declare an empty array

// let arr1 = []
// let arr2 = Array(10)

// 2- Declare an array with more than 5 number of elements

// let fiveNumbers = [1, 2, 3, 4, 5, 6, 7]

// 3- Find the length of your array

// console.log(fiveNumbers.length)

// 4- Get the first item, the middle item and the last item of the array

// let getMiddle = Math.floor(fiveNumbers.length/2)
// console.log(fiveNumbers[0])
// console.log(fiveNumbers[getMiddle])
// console.log(fiveNumbers[6])

// 5- Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

// let mixedDataTypes = [true, {}, 1, 3.2,'Apple', []]
// console.log(mixedDataTypes.length)

// 6- Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// 7- Print the array using console.log()

// console.log(itCompanies)

// 8- Print the number of companies in the array

// console.log(itCompanies.length)

// 9- Print the first company, middle and last company

// let getMiddle = Math.floor(itCompanies.length/2) 
// let getLast = itCompanies.length-1
// console.log(itCompanies[0])
// console.log(itCompanies[getMiddle])
// console.log(itCompanies[getLast])

// 10- Print out each company

// for(let eachCompany of itCompanies) {
//     console.log(eachCompany) 
// }


// 11- Change each company name to uppercase one by one and print them out

// for(let eachCompany of itCompanies) {
//     console.log(eachCompany.toUpperCase()) 
// }

// 12- Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

// let string = itCompanies.slice(0,itCompanies.length-1)+ ' and '+itCompanies[6]+ ' are big IT companies.'

// console.log(string)

// 13- Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

// Way 1

// let check1 = 'Apple'
// let check2 = 'Asus'
// itCompanies.includes(check1)
// ? console.log('There is '+check1+' into the IT companies.') : console.log('There is not '+check1+' into the IT companies.')

// itCompanies.includes(check2)
// ? console.log('There is '+check2+' into the IT companies.') : console.log('There is not '+check2+' into the IT companies.')

// Way 2

// let check1 = 'Apple'
// let check2 = 'Asus'

// for(let i = 0; i < itCompanies.length; i++){
//     if (itCompanies.includes(check1)){
//         console.log('There is '+check1+' into the IT companies.')
        
//     }else {
//         console.log('There is not '+check1+' into the IT companies.')
//     }
// }


// 14- Filter out companies which have more than one 'o' without the filter method

// let re = /o?o{2,2}|o.o/gi
// for(var i = 0; i < itCompanies.length; i++)
// {
//     if(itCompanies[i].match(re))
//     {
//         console.log(itCompanies[i])
//     }
// }

// 15- Sort the array using sort() method

// let shortArr = itCompanies.sort()
// console.log(shortArr)

// 16- Reverse the array using reverse() method

// let reverseArr = itCompanies.reverse()
// console.log(reverseArr)

// 17- Slice out the first 3 companies from the array

// let sliceArr = itCompanies.slice(0,3)
// console.log(sliceArr)

// 18- Slice out the last 3 companies from the array

// let sliceLastArr = itCompanies.slice(itCompanies.length-3)
// console.log(sliceLastArr)

// 19- Slice out the middle IT company or companies from the array

// let findMiddle = Math.floor(itCompanies.length/2)
// let sliceMiddleArr = itCompanies.slice(findMiddle,findMiddle+1)
// console.log(sliceMiddleArr)

// 20- Remove the first IT company from the array
// Way 1

// let removeFirstElement = itCompanies.shift()
// console.log(itCompanies)

// Way 2

//  let removeFirstElement = itCompanies.slice(1,)
//  console.log(removeFirstElement)

// 21- Remove the middle IT company or companies from the array

// let findMiddle = Math.floor(itCompanies.length/2)
// let removeMiddleElement1 = itCompanies.slice(0,3)
// let removeMiddleElement2 = itCompanies.slice(4,)
// let removeMiddleElement = removeMiddleElement1.concat(removeMiddleElement2)
// console.log(removeMiddleElement)

// 22- Remove the last IT company from the array

// let removeLastElement = itCompanies.slice(0,itCompanies.length-1)
// console.log(removeLastElement)

// 23- Remove all IT companies

// let removeAll = itCompanies.splice(0,)
// console.log(itCompanies)

// Exercise: Level 2

// 1- Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

// console.log(countries) // from countries.js
// console.log(webTechs) // from web_tech.js

// 2- First remove all the punctuations and change the string to array and count the number of words in the array


let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'.replace(/ /g,',')


