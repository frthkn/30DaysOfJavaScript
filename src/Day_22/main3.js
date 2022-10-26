// Day 22

// Exercises: Level 3

import {hknChallenges} from '.info.js/'

console.log(hknChallenges)


document.querySelector('body').style.width ='auto'
document.querySelector('body').style.height ='auto'
document.querySelector('body').style.fontSize = '1em'
document.querySelector('body').style.textAlign = 'center'
document.querySelector('body').style.margin = '10%'
document.querySelector('body').style.rowGap = '5px'

document.querySelector('span').style.fontSize = '1.5em'

document.querySelector('h2').style.display = 'grid'
document.querySelector('h2').style.justifyContent = 'center'
document.querySelector('h2').style.alignItems = 'center'
document.querySelector('h2').style.padding = '1%'
document.querySelector('h2').style.margin = '2%'
document.querySelector('h2').style.textDecorationLine =' underline'

document.querySelector('h3').style.display = 'inline-block'
document.querySelector('h3').style.justifyContent = 'center'
document.querySelector('h3').style.padding = '2%'
document.querySelector('h3').style.margin = '2%'
document.querySelector('h3').style.alignItems = 'center'


document.querySelectorAll('ul>li').forEach(element => element.style.display= 'grid')
document.querySelectorAll('ul>li').forEach(element => element.style.fontSize= '20px')
document.querySelectorAll('ul>li').forEach(element => element.style.textAlign = 'left')
document.querySelectorAll('ul>li').forEach(element => element.style.border ='solid 0.2em')
document.querySelectorAll('ul>li').forEach(element => element.style.padding ='2%')
document.querySelectorAll('ul>li').forEach(element => element.style.margin ='2%')


// The year color is changing every 1 second

const changeColorOfYear =  setInterval(() => {
    const getColor = '#'+(Math.random()*11).toString(16).slice(2,8)
    const d = new Date()
    const getH3 = document.querySelector('h3').innerHTML = d.toDateString()+' '+ d.toLocaleTimeString()
    document.querySelector('span').style.backgroundColor = getColor
    document.querySelector('h3').style.backgroundColor = getColor
    
    
}, 1000);

// The date and time background color is changing every on seconds

const changeColorOfTime =  setInterval(() => {
    const getColor = '#'+(Math.random()*11).toString(16).slice(2,8)
    const d = new Date()
    const getH3 = document.querySelector('h3').innerHTML = d.toDateString()+' '+ d.toLocaleTimeString()
    document.querySelector('h3').style.backgroundColor = getColor
    
}, 1000);

document.querySelectorAll('ul>li').forEach((el, i) => {
    if (i ==0){
        el.style.backgroundColor ='green'
    }else if (i ==1){
        el.style.backgroundColor ='yellow'
    }else{
        el.style.backgroundColor ='red'
    }
})