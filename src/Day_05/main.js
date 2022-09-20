// Day 5 

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

// Reverse the array using reverse() method
// Slice out the first 3 companies from the array
// Slice out the last 3 companies from the array
// Slice out the middle IT company or companies from the array
// Remove the first IT company from the array
// Remove the middle IT company or companies from the array
// Remove the last IT company from the array
// Remove all IT companies

// Exercise: Level 2

// Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

// First remove all the punctuations and change the string to array and count the number of words in the array