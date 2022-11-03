// Day 23

// Exercise 2

const mainDiv = document.querySelector('div')
const divKey = document.querySelector('#key')
const span = document.querySelector('span')
const divKeyCode = document.createElement('div')
divKeyCode.style.width = '200px'
divKeyCode.style.height ='200px'
divKeyCode.style.display = 'flex'
divKeyCode.style.flexWrap ='wrap'
divKeyCode.style.justifyContent ='center'
divKeyCode.style.alignContent ='center'
divKeyCode.style.fontSize='50px'



divKey = document.addEventListener('keydown' ,e => {
    divKey.textContent = 'You pressed '
    e.preventDefault()
    span.innerHTML = e.key[0].toUpperCase()+e.key.slice(1)
    divKey.appendChild(span)
    span.style.color = 'green'
    divKeyCode.textContent = e.code.charCodeAt()
    mainDiv.appendChild(divKeyCode)

    
})
