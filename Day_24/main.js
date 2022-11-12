// Day 24 

// Mini Project Solar System

// get elements

const mass = document.querySelector('input')
const btn = document.querySelector('button')
const select = document.querySelector('select')
const img = document.querySelector('img')
const div = document.querySelector('#calc')




// create elements

const p0 = document.createElement('label')
const p1 = document.createElement('p')


p0.style.display ='flex'
p0.style.alignItems ='center'
p0.style.justifyContent ='center'
p0.style.fontSize ='17px'
p0.style.fontWeight ='bold'
p0.style.color='white'
p0.style.width ='500px'
p0.style.height = '80px'



p1.style.display ='flex'
p1.style.alignItems ='center'
p1.style.justifyContent ='center'
p1.style.color='white'
p1.style.fontWeight ='bolder'
p1.style.backgroundColor = 'rgba(250, 235, 215, 0.35)'
p1.style.fontSize ='20px'
p1.style.width ='140px'
p1.style.height = '140px'
p1.style.borderRadius ='100% 100% 100% 100%'
p1.style.padding ='auto'



const imgName = ['earth','jupiter','mars','mercury','moon','neptune', 'pluto','saturn','uranus','venus']
let valForSelect
for (let index = 0; index < imgName.length; index++) {
    valForSelect = document.createElement('option') 
    valForSelect.textContent = imgName[index]
    valForSelect.setAttribute('value', imgName[index])
    select.appendChild(valForSelect)
}


btn.addEventListener('click', calcWeight)

function calcWeight() {
    div.appendChild(p0)
    let val = mass.value
    p1.textContent =''
    
    if(!val){
        p0.textContent ='Mass is required'
        img.src = ''
    }else if(val<0){
        p0.textContent='Mass must be greather then 0'
        img.src = ''
    }else if(val.match(/\D/)){
        p0.textContent='Mass must be number'
        img.src = ''
    }else if(select.options[0].selected){
        p0.textContent='You did not choose planet yet'
        img.src = ''
    }else{
        if (select.options[1].selected) {
            img.src = './img/earth.png'
            p0.textContent = 'The weight of the object on '+imgName[0].toLocaleUpperCase()
            p1.textContent = (Number(val)*9.80).toFixed(2)+' N'
        }else if(select.options[2].selected){
            img.src = './img/jupiter.png'
            p0.textContent = 'The weight of the object on '+imgName[1].toLocaleUpperCase()
            p1.textContent = (Number(val)*23.10).toFixed(2)+' N'
        }else if(select.options[3].selected){
            img.src = './img/mars.png'
            p0.textContent = 'The weight of the object on '+imgName[2].toLocaleUpperCase()
            p1.textContent = (Number(val)*3.70).toFixed(2)+' N'
        }else if(select.options[4].selected){
            img.src = './img/mercury.png'
            p0.textContent = 'The weight of the object on '+imgName[3].toLocaleUpperCase()
            p1.textContent = (Number(val)*3.70).toFixed(2)+' N'
        }else if(select.options[5].selected){
            img.src = './img/moon.png'
            p0.textContent = 'The weight of the object on '+imgName[4].toLocaleUpperCase()
            p1.textContent = (Number(val)*1.60).toFixed(2)+' N'
        }else if(select.options[6].selected){
            img.src = './img/neptune.png'
            p0.textContent = 'The weight of the object on '+imgName[5].toLocaleUpperCase()
            p1.textContent = (Number(val)*11.0).toFixed(2)+' N'
        }else if(select.options[7].selected){
            img.src = './img/pluto.png'
            p0.textContent = 'The weight of the object on '+imgName[6].toLocaleUpperCase()
            p1.textContent = (Number(val)*0.70).toFixed(2)+' N'
        }else if(select.options[8].selected){
            img.src = './img/saturn.png'
            p0.textContent = 'The weight of the object on '+imgName[7].toLocaleUpperCase()
            p1.textContent = (Number(val)*9.0).toFixed(2)+' N'
        }else if(select.options[9].selected){
            img.src = './img/uranus.png'
            p0.textContent = 'The weight of the object on '+imgName[8].toLocaleUpperCase()
            p1.textContent = (Number(val)*8.70).toFixed(2)+' N'
        }else if(select.options[10].selected){
            img.src = './img/venus.png'
            p0.textContent = 'The weight of the object on '+imgName[9].toLocaleUpperCase()
            p1.textContent = (Number(val)*8.90).toFixed(2)+' N'
        }
        
        
        div.appendChild(p1)
    }

   
    
    
}
