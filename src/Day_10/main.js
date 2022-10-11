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

// console.log(stringForSet)

// 6- Create a map of countries and number of characters of a country

const countries = ['Finland', 'Sweden', 'Norway']

const mapOfCountries = new Map()
for (const c of countries) {
    mapOfCountries.set(c, c.length)
  
}

// console.log(mapOfCountries)

// Exercises:Level 2

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]

// 1- Find a union b

const aUnionB = new Set((a.concat(b)).sort((a,b)=> a-b))
// console.log(aUnionB)

// 2- Find a intersection b

const B = new Set(b)
const aIntersectionB = a.filter((num)=> B.has(num)) 
//console.log(aIntersectionB)


// 3- Find a with b

const A = new Set(a)
const aWithB = a.filter((num)=> !B.has(num)) 
const bWithA = b.filter((num)=> !A.has(num)) 
// console.log(aWithB) // [ 8, 9 ]
// console.log(bWithA) // [ 3, 7 ]


// Exercises:Level 3

// 1- How many languages are there in the countries object file.

const flatLang = Object.entries(countries_data).flatMap(num=> num[1].languages)
const setLang = new Set(flatLang)
// console.log(setLang.size) // 123



// 2- *** Use the countries data to find the 10 most spoken languages:

const count = {}
flatLang.forEach((el => {
    count[el] = (count[el] || 0)+1
}))

const mostSpokenLanguages = Object.entries(count).sort((f,h) => h[1]-f[1])

function mostSpokenTenLanguages (mostSpokenLanguages,num){
  return mostSpokenLanguages.slice(0,num)
}

console.log(mostSpokenTenLanguages(mostSpokenLanguages,10))
console.log(mostSpokenTenLanguages(mostSpokenLanguages,3))