
// Day 9

import {countries_data} from '/src/Data/data.js'



// Exercises: Level 1

const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombi',
  'Comoros',
  'Congo (Brazzaville)',
  'Congo',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor (Timor Timur)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia, The',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, North',
  'Korea, South',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia and Montenegro',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe'
]
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook', 'Hakan']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]


// 1- Explain the difference between forEach, map, filter, and reduce.

// forEach => this method executes a provided function once for each array element. 
// map => this method creates a new array populated with the results of calling a provided function on every element in the calling array. 
// filter =>  this method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
// reduce => easy way to understand this method, it is return the sum of all the elements in an array:

// 2- Define a callback function before you use it in forEach, map, filter or reduce.

// const callback = (n) => {
//   return n*n
// }

// 3- Use forEach to console.log each country in the countries array.

//let country = countries.forEach((country => console.log(country)))
//console.log(country)

// 4- Use forEach to console.log each name in the names array.

// let name = names.forEach((name => console.log(name)))
// console.log(name)

// 5- Use forEach to console.log each number in the numbers array.

// let number = numbers.forEach((number => console.log(number)))
// console.log(number)

// 6- Use map to create a new array by changing each country to uppercase in the countries array.

// let uppercaseCountry = countries.map((country => console.log(country.toUpperCase())))
// console.log(uppercaseCountry)

// 7- Use map to create an array of countries length from countries array.

// let create = countries.map((item => Array(item.length)))
// console.log(create)

// 8- Use map to create a new array by changing each number to square in the numbers array

// let square = numbers.map((item => item*item))
// console.log(square)

// 9- Use map to change to each name to uppercase in the names array

// let uppercaseName = names.map((name => console.log(name.toUpperCase())))
// console.log(uppercaseName)

// 10- Use map to map the products array to its corresponding prices.

// let correspondingPrices = products.map((item) => { return `${item.product}: ${item.price}`})
// console.log(correspondingPrices)

// 11- Use filter to filter out countries containing land.

// let filterLand = countries.filter((item) => item.match(/land/gi))
// console.log(filterLand)

// 12- Use filter to filter out countries having six character.

// let sixCharacter = countries.filter((item) => item.length == 6)
// console.log(sixCharacter)

// 13- Use filter to filter out countries containing six letters and more in the country array.

// let sixCharacterAndMore = countries.filter((item) => item.length >= 6)
// console.log(sixCharacterAndMore)

// 14- Use filter to filter out country start with 'E';

// let startWithE = countries.filter((item) => item.startsWith('E',0))
// console.log(startWithE)

// 15- Use filter to filter out only prices with values.

// let onlyPricesWithValue = products.filter((item =>  (item.price != ' ') && (item.price != '') ))
// console.log(onlyPricesWithValue)

// 16- Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

// function getStringLists(...arr){
//   return arr

// }
// console.log(getStringLists(1,2,3,4))
// console.log(getStringLists('Hakan',2,3,4))
// console.log(getStringLists('Hakan','Fırat','Turkey'))

// 17- Use reduce to sum all the numbers in the numbers array.

// let sum = numbers.reduce((i ,j) => {return i+j})
// console.log(sum)

// 18- Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries

// Way 1

// countries.unshift('Estonia')
// const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });
// countries.pop() // Turkey is not one of north European countries :)
// let concatenateCountry =  countries.reduce(() =>  (console.log(formatter.format(countries),' are north European countries.') ))
// console.log(concatenateCountry)

// Way 2
// If you don't wanna get result and undefined you use this

// countries.pop() // Turkey is not one of north European countries :)
// countries.unshift('Estonia')
// let concatenateCountry =  countries.reduce(() => { return `${countries.slice(0,countries.length-1)} and ${countries.slice(-1)} are north European countries.`}) 
// console.log(concatenateCountry.replaceAll(',',', '))

// 19- Explain the difference between some and every

// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value. 
// The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array. 

// 20- Use some to check if some names' length greater than seven in names array

// let nameGreaterThanSeven = names.some((name)=> name.length>=7 ? 1:0)
// console.log(nameGreaterThanSeven)

// 21- Use every to check if all the countries contain the word land

// let containLand = countries.every((word)=> word.matchAll(/land/g))
// console.log(containLand)

// 22- Explain the difference between find and findIndex.

// The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned. 
// The findIndex() method returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned. 

// 23- Use find to find the first country containing only six letters in the countries array

// let firstContainingOnlySixLetters = countries.find((n) => n.length==6)
// console.log(firstContainingOnlySixLetters)

// 24- Use findIndex to find the position of the first country containing only six letters in the countries array

// let firstPositionContainingOnlySixLetters = countries.findIndex((n) => n.length==6)
// console.log(firstPositionContainingOnlySixLetters)

// 25- Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.

// let findPositionOfNorway = countries.findIndex((n) => n=='Norway')
// console.log(findPositionOfNorway)


// 26- Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.

// let findPositionOfRussia = countries.findIndex((n) => n=='Russia')
// console.log(findPositionOfRussia)

// Exercises: Level 2

// 1- Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))

// let assingZeroToEmptyPrice = products.filter((a)=> {if((a.price == '') || (a.price == ' ')){a.price =0}})
// let totalPrice = products.map((item => item.price)).reduce((first, end) => (first+end))
// console.log(totalPrice)

// 2- Find the sum of price of products using only reduce reduce(callback))

// const totalPriceWithOnlyReduce = products.reduce((item1,item2,a)=> {
//   if((products[a].price == '') || (products[a].price == ' ')){
//     products[a].price = 0
//   }
// })
// const sumPrice = products.reduce((a,b)=> b.price+a,0)
// console.log(sumPrice)

// 3- Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).


// function categorizeCountries(){
//   const obj = {}
//   obj.fiveLength = countries.filter((item => item.length == 5 ))
//   obj.containLand = countries.filter((item => item.includes('land')))
//   obj.findEndWithA = countries.filter((item => item.endsWith('a')))
//   return obj
  
// }
// console.log(categorizeCountries())

// 4- Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.


// function callByWordAndNumber(){
//   const letters =  countries.map((item => item.charAt(0))).reduce((old, cur) => {
//   old[cur] = (old[cur] || 0) +1;
//   return old;
// }, {})
//   return letters
// }
// console.log(callByWordAndNumber())


// 5- Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array

// function getFirstTenCountries(){
//   return countries.slice(0,10)

// }
// console.log(getFirstTenCountries())

// 6- Declare a getLastTenCountries function which which returns the last ten countries in the countries array.

// function getLastTenCountries(){
//   return countries.slice(countries.length-10,countries.length)

// }
// console.log(getLastTenCountries())

// 7- Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)

// function mostUseWord(letter){  
//   return countries.filter((item => item.toLowerCase().includes(letter.toLowerCase()))) 
// }
// console.log(mostUseWord('ia'))
// console.log(mostUseWord('Al'))
// console.log(mostUseWord('F'))



// Exercises: Level 3

// 1- Use the countries information, in the data folder. Sort countries by name, by capital, by population


function sortCountries(){
  
  const sortName = countries_data.map(nam => nam.name ).sort((a,b) => a.localeCompare(b)).forEach(n => console.log(n))  
  const sortPopulation = countries_data.map(pop => pop.population ).sort((k,l)=> l-k).forEach(p => console.log(p))
  const sortCapital = countries_data.map(cap => cap.capital ).sort((i,t)=> i.localeCompare(t)).forEach(c => console.log(c)) 
  return 'end of list'
  
}
console.log(sortCountries())



// 2- *** Find the 10 most spoken languages:

// Way 1

// const getlang = []
// for (const key in countries_data) {
//   getlang.push(countries_data[key].languages) 
// }

// const countedLang = getlang.flat().reduce((allLang, name) => {
//   const currCount = allLang[name] ?? 0;
//   return {
//     ...allLang,
//     [name]: currCount + 1,
//   };
// }, {});

// const countries = Object.entries(countedLang).sort((a,b)=> b[1]-a[1]) 

// function mostSpokenTenLanguages(countries,num){
  
//   return countries.slice(0,num)
// }
// console.log(mostSpokenTenLanguages(countries,10))
// console.log(mostSpokenTenLanguages(countries,3))

// Way 2

// const mostPopulatedTenCountries = Object.entries(countries_data.reduce((langs,obj)=> {obj.languages.forEach(x => langs.push(x));
//   return langs
// },[]).reduce((key,lang)=>{
//   key[lang] = (key[lang] ?? 0)+1;
//   return key
// }, {})).sort((a,b)=> b[1]-a[1]);
// console.log(mostPopulatedTenCountries.slice(0,10))
// console.log(mostPopulatedTenCountries.slice(0,3))



// 3- *** Use countries_data.js file create a function which create the ten most populated countries

// const newCountries = countries_data
// for (const key in newCountries) {
// 	delete newCountries[key].capital
// 	delete newCountries[key].languages
//   }

// function mostPopulatedTenCountries(newCountries,num){
//   let sorting = newCountries.sort((a,b)=> b.population-a.population)
//   return sorting.slice(0,num)
// }
// console.log(mostPopulatedTenCountries(newCountries,10))
// console.log(mostPopulatedTenCountries(newCountries,3))


// 4- *** Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object. Check the output below.

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

const statistics = {}
statistics.Count = ages.length
statistics.Sum = ages.reduce((a,b)=> a+b) 
statistics.Min = Math.min(...ages)
statistics.Max = Math.max(...ages)
statistics.Range = statistics.Max-statistics.Min
statistics.Mean = Math.ceil(statistics.Sum/ages.length)
const sort = ages.sort((a,b)=> a-b)
statistics.Median = sort[Math.floor(sort.length/2)]
statistics.Mode = {}
const countedAges = ages.reduce((allAges, age) => {
  const currCount = allAges[age] ?? 0;
  return {
    ...allAges,
    [age]: currCount + 1,
  };
}, {});
const count = Object.values(countedAges)
const mode = Object.keys(countedAges)
statistics.Mode.mode = parseInt(mode[2])
statistics.Mode.count = Math.max(...count)
let sqrt = ages.map((item => Math.abs(item-statistics.Mean)))
let sqrtSum =0
for (const iterator of sqrt) {
  sqrtSum += (iterator*iterator)
}
statistics.Variance = sqrtSum/sqrt.length
statistics.StdDev = parseFloat(Math.sqrt(statistics.Variance).toFixed(1))
let sum = []
for (const iterator of count) {
  sum.push((iterator*100)/25)
}
let parseMode = []
for (const iterator of mode) {
  parseMode.push(parseInt(iterator))
  
}

let newArr = []
for (const i in sum,parseMode) {
  newArr.push([sum[i],parseMode[i]])
  
}

statistics.FreqDis = newArr

statistics.Describe = function(){
 console.log('Count:', statistics.Count)
 console.log('Sum:', statistics.Sum)
 console.log('Min:', statistics.Min)
 console.log('Max:', statistics.Max)
 console.log('Range:', statistics.Range)
 console.log('Mean:', statistics.Mean)
 console.log('Median:', statistics.Median)
 console.log('Mode:', statistics.Mode)
 console.log('Variance:', statistics.Variance)
 console.log('Standart Deviation:', statistics.StdDev)
 console.log('Frequency Distribution:', statistics.FreqDis)
 return 0

}

// console.log('Count:', statistics.Count)
// console.log('Sum:', statistics.Sum)
// console.log('Min:', statistics.Min)
// console.log('Max:', statistics.Max)
// console.log('Range:', statistics.Range)
// console.log('Mean:', statistics.Mean)
// console.log('Median:', statistics.Median)
// console.log('Mode:', statistics.Mode)
// console.log('Variance:', statistics.Variance)
// console.log('Standart Deviation:', statistics.StdDev)
// console.log('Frequency Distribution:', statistics.FreqDis)

//console.log(statistics.Describe())

