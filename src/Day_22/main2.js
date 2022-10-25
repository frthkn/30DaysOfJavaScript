// Day 22 

import {countries_data} from '/src/Data/data.js'


// Exercises: Level 2

// 1- Use the countries array to display all the countries.

document.querySelector('h1').style.textAlign = 'center'

document.querySelector('h3').style.textAlign = 'center'
document.querySelector('h4').style.textAlign = 'center'
document.querySelector('h5').style.textAlign = 'center'
document.querySelector('h5').style.marginBottom = '200px'


document.querySelector('body').style.margin = '20px'
document.querySelector('body').style.padding = '20px'
document.querySelector('body').style.fontFamily =' sans-serif'
document.querySelector('body').style.backgroundColor ='#ffef99'

// document.querySelector('div').style.display ='grid'
// document.querySelector('div').style.gap = '8px'
// document.querySelector('div').style.gridTemplateColumns = 'repeat(6, 100px)'
// document.querySelector('div').style.gridTemplateRows = 'repeat(17, 100px)'
// document.querySelector('div').style.justifyContent = 'center'



const names = Object.entries(countries_data).map((el => el[1].name)).sort((a,b)=> a.localeCompare(b))

for (let i = 0; i < names.length; i++) {
    const div = document.createElement('div')
    div.className = 'country'
    div.textContent = names[i].toUpperCase()
    document.querySelector('.countries-wrapper').appendChild(div)
    
}

document.querySelector('h3').innerHTML = 'Total Number Of Countries: '+ names.length

document.querySelector('.countries-wrapper').style.display ='grid'
document.querySelector('.countries-wrapper').style.gap = '8px'
document.querySelector('.countries-wrapper').style.gridTemplateColumns = 'repeat(6, 200px)'
document.querySelector('.countries-wrapper').style.gridTemplateRows = 'repeat(43, 200px)'
document.querySelector('.countries-wrapper').style.justifyContent = 'center'

document.querySelectorAll('.country').forEach((el=> el.style.backgroundColor = '#0b7d5b'))
document.querySelectorAll('.country').forEach((el=> el.style.border = 'solid #85bead '))
document.querySelectorAll('.country').forEach((el=> el.style.textAlign = 'center'))
document.querySelectorAll('.country').forEach((el=> el.style.padding = '60px'))
