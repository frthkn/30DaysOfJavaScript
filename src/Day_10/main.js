// Day 10

import {countries_data} from './data.js'

// Exercises: Level 1

// 1- create an empty set

const emptySet = new Set()



// 2- Create a set containing 0 to 10 using loop

const zeroToTenArr = [0,1,2,3,4,5,6,7,8,9,10]
const zeroToTenSet = new Set()
for (const i of zeroToTenArr) {
    zeroToTenSet.add(i)
}

// 3- Remove an element from a set

zeroToTenSet.delete(0)

// 4- Clear a set

zeroToTenSet.clear()

// 5- Create a set of 5 string elements from array

const stringForSet = new Set()
stringForSet.add('one')
stringForSet.add('two')
stringForSet.add('three')
stringForSet.add('four')
stringForSet.add('five')


// 6- Create a map of countries and number of characters of a country

const countries = ['Finland', 'Sweden', 'Norway']

const mapOfCountries = new Map()
for (const c of countries) {
    mapOfCountries.set(c, c.length)
  
}

// Exercises:Level 2

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]

// 1- Find a union b

const aUnionB = new Set((a.concat(b)).sort((a,b)=> a-b))

// 2- Find a intersection b

const B = new Set(b)
const aIntersectionB = a.filter((num)=> B.has(num)) 


// 3- Find a with b
const A = new Set(a)
const aWithB = a.filter((num)=> !B.has(num)) // [ 8, 9 ]
const bWithA = b.filter((num)=> !A.has(num)) // [ 3, 7 ]


// Exercises:Level 3

// 1- How many languages are there in the countries object file.

const flatLang = Object.entries(countries_data).flatMap(num=> num[1].languages)
const setLang = new Set(flatLang)
//console.log(setLang.size) // 124



// 2- *** Use the countries data to find the 10 most spoken languages:

// const countLang = flatLang.reduce((allLang, name) => {
//   const currCount = allLang[name] ?? 0;
//   return {
//     ...allLang,
//     [name]: currCount + 1,
//   };
// }, {});

// const mostSpokenLanguages = Object.entries(countLang).sort((x,y)=> y[1]-x[1]) 

// function mostSpokenTenLanguages (mostSpokenLanguages,num){
//   return mostSpokenLanguages.slice(0,num)
// }

// console.log(mostSpokenTenLanguages(mostSpokenLanguages,10))
// console.log(mostSpokenTenLanguages(mostSpokenLanguages,3))

const newArr1 = Object.entries(countries_data).flatMap((lang => lang[1].languages)).sort()
const newArr2 = new Set(newArr1)
console.log(newArr1)

