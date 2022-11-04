// Day 23

// Number Generator Exercise

const div  = document.querySelector('div')
const label = document.querySelector('.enterNum')
const input = document.querySelector('input').addEventListener('blur',e =>{
    if(e.target ==='string'){
        label.innerText = 'input value must be number'
    }
})
