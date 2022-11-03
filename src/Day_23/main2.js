// Day 23

// Exercise 2


const divKey = document.querySelector('#key')
const divKeyCode = document.querySelector('#keyCode')
const span = document.querySelector('span')

divKey.textContent = 'You pressed '

document.addEventListener('keydown' ,e => {
    e.preventDefault()
    
    span.textContent = e.key
    
})