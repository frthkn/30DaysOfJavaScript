// Day 22

// Exercises: Level 3

import {hknChallenges} from './info.js'

const body = document.querySelector('body')

// create h1,h2, h3 span and add body

const h1 = document.createElement('h1')
h1.textContent = hknChallenges.description+' in '

const span = document.createElement('span')
span.className ='spanYear'
span.textContent = hknChallenges.challengeYear
h1.appendChild(span)

const h2 = document.createElement('h2')
h2.textContent = hknChallenges.challengeSubtitle

const h3 = document.createElement('h3')

body.appendChild(h1)
body.appendChild(h2)
body.appendChild(h3)

// The year color is changing every 1 second

const changeColorOfYear =  setInterval(() => {
    const getColor = '#'+(Math.random()*11).toString(16).slice(2,8)
    const d = new Date()
    const getH3 = document.querySelector('h3').innerHTML = d.toDateString()+' '+ d.toLocaleTimeString()
    document.querySelector('.spanYear').style.backgroundColor = getColor
    
}, 1000);

// The date and time background color is changing every on seconds

const changeColorOfTime =  setInterval(() => {
    const getColor = '#'+(Math.random()*11).toString(16).slice(2,8)
    const d = new Date()
    const getH3 = document.querySelector('h3').innerHTML = d.toDateString()+' '+ d.toLocaleTimeString()
    document.querySelector('h3').style.backgroundColor = getColor
    
}, 1000);

document.querySelector('body').style.width ='auto'
document.querySelector('body').style.height ='auto'
document.querySelector('body').style.fontSize = '1em'
document.querySelector('body').style.textAlign = 'center'
document.querySelector('body').style.margin = '5%'
document.querySelector('body').style.rowGap = '2px'

document.querySelector('span').style.fontSize = '1.5em'

document.querySelector('h2').style.display = 'grid'
document.querySelector('h2').style.justifyContent = 'center'
document.querySelector('h2').style.alignItems = 'center'
document.querySelector('h2').style.padding = '1%'
document.querySelector('h2').style.margin = '1%'
document.querySelector('h2').style.textDecorationLine =' underline'

document.querySelector('h3').style.display = 'inline-block'
document.querySelector('h3').style.justifyContent = 'center'
document.querySelector('h3').style.padding = '1%'
document.querySelector('h3').style.margin = '1%'
document.querySelector('h3').style.alignItems = 'center'


// create ul>li


function createItem(name) {
    let li = document.createElement('li');
    li.textContent = name;
    return li;
}
const ul = document.createElement('ul')
const div = document.querySelector('div')
body.appendChild(div)
div.appendChild(ul)
const arrNameForLi = []
hknChallenges.challenges.forEach((el => (arrNameForLi.push(el.name))))
for (let index = 0; index < arrNameForLi.length; index++) {
    ul.appendChild(createItem(arrNameForLi[index]))
}

document.querySelectorAll('ul>li').forEach(element => element.style.display= 'grid')
document.querySelectorAll('ul>li').forEach(element => element.style.fontSize= '15px')
document.querySelectorAll('ul>li').forEach(element => element.style.textAlign = 'left')
document.querySelectorAll('ul>li').forEach(element => element.style.border ='solid 0.2em')
document.querySelectorAll('ul>li').forEach(element => element.style.padding ='2%')
document.querySelectorAll('ul>li').forEach(element => element.style.margin ='2%')
document.querySelectorAll('ul>li').forEach((element,i)=> element.setAttribute('id','li'+i))


function createSelect() {
    let select = document.createElement('select');
    select.className = 'slct'
    return select;
}
function createOption() {
    let option = document.createElement('option');
    return option;
}
const arrTopics = []
hknChallenges.challenges.forEach((el=> arrTopics.push(el.topics)))
document.querySelectorAll('ul>li').forEach((element,i)=> element.appendChild(createSelect()).setAttribute('id', 'slct'+i))



for (let index = 0; index < arrTopics[0].length; index++) {
    document.querySelectorAll('#slct0').forEach((element)=> element.appendChild(createOption()).setAttribute('id', 'python'+index))
    document.querySelectorAll('#python'+index).forEach((element)=> element.textContent = arrTopics[0][index])
}




document.querySelectorAll('ul>li').forEach((el, i) => {
    if (i ==0){
        el.style.backgroundColor ='green'
    }else if (i ==1){
        el.style.backgroundColor ='yellow'
    }else{
        el.style.backgroundColor ='red'
    }
})