// Day 22 


// Exercises: Level 1

// 1-Create a div container on HTML document and create 100 to 100 numbers dynamically and append to the container div.

//   1.1- Even numbers background is green
//   1.2- Odd numbers background is yellow
//   1.3- Prime numbers background is red

document.querySelector('h2').style.textAlign = 'center'

document.querySelector('h3').style.textAlign = 'center'
document.querySelector('h3').style.textDecorationLine = 'underline'

document.querySelector('h5').style.textAlign = 'center'
document.querySelector('h5').style.textDecorationLine = 'underline'

document.querySelector('body').style.margin = '20px'
document.querySelector('body').style.padding = '20px'
document.querySelector('body').style.fontFamily =' sans-serif'


// div style


document.querySelector('div').style.display ='grid'
document.querySelector('div').style.gap = '8px'
document.querySelector('div').style.gridTemplateColumns = 'repeat(6, 100px)'
document.querySelector('div').style.gridTemplateRows = 'repeat(17, 100px)'
document.querySelector('div').style.justifyContent = 'center'

let div
for (let index = 0; index < 102; index++) {
    div = document.createElement('div')
    div.className = 'nums'
    div.textContent = index  
    document.querySelector('.pnumbers').appendChild(div)
}


document.querySelectorAll('.nums').forEach((el=> el.style.backgroundColor = 'white'))
document.querySelectorAll('.nums').forEach((el=> el.style.border = 'solid'))
document.querySelectorAll('.nums').forEach((el=> el.style.padding = '35px'))
document.querySelectorAll('.nums').forEach((el,i)=> {
    if(i == 2 || i == 3 || i == 5 || i == 7 || i == 11 || i == 13 || i == 17 || i == 19 || i == 23 || i == 29 || i == 31 || i == 37 || i == 41 || i == 43 || i == 47 || i == 53 || i == 59 || i == 61 || i == 67 || i == 71 || i == 73 || i == 79 || i == 83 || i == 89 || i == 97 || i == 101){
        el.style.backgroundColor ='red'
    }else if(i%2 == 0){
        el.style.backgroundColor ='green'
    }else {
        el.style.backgroundColor ='yellow'
    }
})
 

