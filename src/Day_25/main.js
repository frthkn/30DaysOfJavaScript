// Day 25

// Countries Data App

import {countries_data as countries} from '/src/Data/data.js'

// Get Elements

const btnPop = document.querySelector('.population')
const btnLang = document.querySelector('.languages')
const graphTitle = document.querySelector('h4')
const div = document.querySelector('#stat')
const subtitle = document.querySelector('.subtitle')



// get data from countries

// Langs
const mostTenSpokenLang = Object.entries(countries.reduce((langs,obj)=> {obj.languages.forEach(x => langs.push(x));
    return langs
  },[]).reduce((key,lang)=>{
    key[lang] = (key[lang] ?? 0)+1;
    return key
  }, {})).sort((a,b)=> b[1]-a[1]);

const mostSpokenTenLangName = mostTenSpokenLang.slice(0,10).flatMap((s => s[0]))
const mostSpokenTenLangCount = mostTenSpokenLang.slice(0,10).flatMap((s => s[1]))

// Pops

const mostTenPopName = countries.sort((z,y)=> y.population-z.population).slice(0,10).flatMap((k => k.name))
const mostTenPopNumber = countries.sort((z,y)=> y.population-z.population).slice(0,10).flatMap((k => k.population))

const worldPop = countries.flatMap((k => k.population)).reduce((f,h)=> f+h,0)
mostTenPopName.unshift('World')
mostTenPopNumber.unshift(worldPop)


//console.log(mostTenPop)

// add event listener to button

btnPop.addEventListener('click', population)
btnLang.addEventListener('click', languages)

// create elements and functions

subtitle.textContent ='Currently, We have '+ countries.length+' countries'



function languages(){
    div.innerHTML=''
    graphTitle.textContent ='10 Most spoken languages in the world'
    
    for (let index = 0; index < mostSpokenTenLangName.length; index++) {
        let lang = document.createElement('div')
        let name = document.createElement('span')
        let barLang = document.createElement('span')
        let num = document.createElement('span')
        name.setAttribute('class', 'nameLang')
        num.setAttribute('class', 'numLang')
        lang.setAttribute('class', 'lang')
        barLang.setAttribute('class', 'barlang-'+Number(mostSpokenTenLangCount[index]+9))
        name.textContent = mostSpokenTenLangName[index]
        num.textContent =  mostSpokenTenLangCount[index]
        barLang.textContent=''
        lang.appendChild(name)
        lang.appendChild(barLang)
        lang.appendChild(num)
        div.appendChild(lang)
    }
    
}




function population(){
    div.innerHTML=''
    graphTitle.textContent ='10 Most populated countries in the world'
    
    for (let index = 0; index < mostTenPopName.length; index++) {
        let pop = document.createElement('div')
        let name = document.createElement('span')
        let barPop = document.createElement('span')
        let num = document.createElement('span')
        name.setAttribute('class', 'namePop')
        num.setAttribute('class', 'numPop')
        pop.setAttribute('class','pop')
        barPop.setAttribute('class', 'barpop-'+mostTenPopNumber[index].toString().slice(0,3))
        name.textContent = mostTenPopName[index]
        num.textContent =  mostTenPopNumber[index].toLocaleString()
        barPop.textContent=''
        pop.appendChild(name)
        pop.appendChild(barPop)
        pop.appendChild(num)
        div.appendChild(pop)
    }

    
}


