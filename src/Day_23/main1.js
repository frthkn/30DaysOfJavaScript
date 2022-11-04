// Day 23

// Number Generator Exercise

const div  = document.querySelector('div')

const input = document.querySelector('input').addEventListener('keydown',e =>{
    if(typeof e.key !='number'){
        const p = document.createElement('p')
        p.textContent = 'input value must be number'
    }
})
