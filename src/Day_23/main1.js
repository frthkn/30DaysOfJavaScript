// Day 23

// Number Generator Exercise

const p = document.querySelector('p')
const inputa = document.querySelector('input')
const button = document.querySelector('button')
p.style.color = 'red'
inputa.addEventListener('input',(e) =>{
   p.textContent = e.target.value
})

