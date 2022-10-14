// Day 13

import {countries_data} from '/src/Data/data.js'

// Exercises: Level 1


// 1- Display the countries array as a table

const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]

console.table(countries)

// 2- Display the countries object as a table

console.table(countries_data)

// 3- Use console.group() to group logs

console.group('countries')
console.log(countries)
console.groupEnd()

// Exercises: Level 2


// 1- 10 > 2 * 10 use console.assert()

console.assert(10> 2*10) // Assertion failed

// 2- Write a warning message using console.warn()

console.warn('The "warn" activated')

// 3- Write an error message using console.error()

console.error('This is an error message')

// Exercises: Level 3

// 1- Check the speed difference among the following loops: while, for, for of, forEach

console.time('While loop')
let k =0
while (k<countries.length) {
    console.log(countries[k][0], countries[k][1])
    k++
} 
console.timeEnd('While loop')

console.log('\n')

console.time('For loop')
for (let i = 0; i < countries.length; i++) {
    console.log(countries[i][0], countries[i][1])
  }
console.timeEnd('For loop')

console.log('\n')


console.time('For of loop')
for (const [name, city] of countries) {
  console.log(name, city)
}
console.timeEnd('For of loop')

console.log('\n')

console.time('ForEach loop')
countries.forEach(([name, city]) => {
  console.log(name, city)
})
console.timeEnd('ForEach loop')