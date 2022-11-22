// Day 27

// Portfolio


const techTeach = ['HTML','CSS', 'JAVASCRIPT']

const techs = document.querySelector('.techs')
const skillsDiv = document.createElement('div')
const spanTech = document.createElement('span')



let counter = 0;
function spanChange() {
  spanTech.innerHTML = techTeach[counter];
  counter++;
  if (counter >= techTeach.length) {
    counter = 0;
    
  }
}



techs.textContent = 'The technologies I teach  '
spanTech.style.fontSize ='60px'

techs.appendChild(spanTech)
const changeSpanOfTech =  setInterval(() => {
    const getColor = '#'+(Math.random()*11).toString(16).slice(2,8)
    spanTech.style.color = getColor
    spanChange()
    
}, 1000);
