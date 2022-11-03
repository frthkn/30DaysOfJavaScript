// Day 23

// Exercise 2


const divKey = document.querySelector('#key')
const divKeyCode = document.querySelector('#keyCode')
const span = document.querySelector('span')



divKey = document.addEventListener('keydown' ,e => {
    divKey.textContent = 'You pressed '
    e.preventDefault()
    span.innerHTML = e.key[0].toUpperCase()+e.key.slice(1)
    divKey.appendChild(span)
    span.style.color = 'green'
    divKeyCode.textContent = e.code.charCodeAt()
    
})
