// Day 23

// Exercise 2


const body = document.querySelector('body')

const label = document.querySelector('.showKeyCode')
label.textContent = 'Press any keyboard key'
label = document.addEventListener('keydown' ,e => {
    e.preventDefault()
    h1.textContent = 'You pressed '+e.key 
    span.textContent = e.code.codePointAt()
    
})