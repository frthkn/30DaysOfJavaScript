// Day 22 

// Exercises: Level 1

// 1-Create a div container on HTML document and create 100 to 100 numbers dynamically and append to the container div.

//   1.1- Even numbers background is green
//   1.2- Odd numbers background is yellow
//   1.3- Prime numbers background is red


document.querySelector('body').style.margin = '20px'
document.querySelector('body').style.padding = '20px'
document.querySelector('body').style.fontFamily =' sans-serif'
document.querySelector('body').style.justifyContent = 'center'

// div style

document.querySelector('div').style.display ='grid'
document.querySelector('div').style.gap = '8px'
document.querySelector('div').style.gridTemplateColumns = '80px 80px 80px 80px 80px 80px'
document.querySelector('div').style.gridTemplateRows = '50px 50px 50px 50px 50px 50px'
document.querySelector('div').style.justifyContent = 'center'

document.querySelectorAll('.nums').forEach((el=> el.style.backgroundColor = 'white'))
document.querySelectorAll('.nums').forEach((el=> el.style.border = 'solid'))
document.querySelectorAll('.nums').forEach((el=> el.style.justifyContent = 'center'))
document.querySelectorAll('.nums').forEach((el=> el.style.padding = '8px'))



//{

    
    // el[i].style.display ='grid'
    // el[i].style.gridTemplateColums ='80px 80px 80px'
    // el[i].style.gridTemplateRows ='50px 50px'
    // el[i].style.backgroundColor ='red'
//})
