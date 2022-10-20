// Day 18

const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// Exercises: Level 1

// 1- Read the countries API using fetch and print the name of country, capital, languages, population and area.

const url = 'https://restcountries.com/v2/all'
fetch(url)
  .then(response => response.json())
  .then(data => {
    const dataArr = []
    for (const key in data) {
       dataArr.push(['name',data[key].name, 'capital',data[key].capital, 'languages',data[key].languages, 'population',data[key].population, 'area',data[key].area] )
    }
    // console.log(dataArr)
  })
  .catch(error => console.error(error))

const fetchData = async () => {
    try {
      const response = await fetch(countriesAPI)
      const countries = await response.json()
      const countriesArr = []
        for (const key in countries) {
            countriesArr.push(['name',countries[key].name, 'capital',countries[key].capital, 'languages',countries[key].languages, 'population',countries[key].population, 'area',countries[key].area] )
        }
        console.log(countriesArr)
    } catch (err) {
      console.error(err)
    }
  }
  // console.log('async and await')
  // fetchData()


// Exercises: Level 2

// 2- Print out all the cat names in to catNames variable.

const catNames = async () => {
    try {
      const response = await fetch(catsAPI)
      const cats = await response.json()
      const catsArr = []
      for (const key in cats) {
            catsArr.push(['name',cats[key].name] )
      }
        console.log(catsArr)
    } catch (err) {
      console.error(err)
    }
  }
// catNames()


// Exercises: Level 3


// Read the cats api and find the average weight of cat in metric unit.
// Read the countries api and find out the 10 largest countries
// Read the countries api and count total number of languages in the world used as officials.
