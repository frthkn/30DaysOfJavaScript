
import { countries_data as countries } from '/src/Data/data.js'

//add event listener

const filterInput = document.querySelector('#inputSearch')
const grid = document.querySelector('.grid')





// get value from another file
function addElement() {

    for (let i = 0; i < countries.length; i++) {
        let div = document.createElement('div');

        div.className = 'item'
        div.innerHTML = `
        <div class="itemChild">
            <img src="${countries[i].flag}" class="img">
            <div class="text">
                <h3 class="countryName">${countries[i].name}</h3><br>
                <span class="capitalName">Capital: <span class="capitals"> ${countries[i].capital}</span></span><br>
                <span class="langName">Language: <span class="langs"> ${countries[i].languages}</span></span><br>
                <span class="populationName">Population: <span class="popultationNum">${countries[i].population}</span></span>
            </div>
        </div
        `
        grid.appendChild(div)


    }

}

addElement()


const mostTenSpokenLang = Object.entries(countries.reduce((langs, obj) => {
    obj.languages.forEach(x => langs.push(x));
    return langs
}, []).reduce((key, lang) => {
    key[lang] = (key[lang] ?? 0) + 1;
    return key
}, {})).sort((a, b) => b[1] - a[1]);

const mostSpokenTenLangName = mostTenSpokenLang.slice(0, 10).flatMap((s => s[0]))
const mostSpokenTenLangCount = mostTenSpokenLang.slice(0, 10).flatMap((s => s[1]))

// Pops

const mostTenPopName = countries.sort((z, y) => y.population - z.population).flatMap((k => k.name))
const mostTenPopNumber = countries.sort((z, y) => y.population - z.population).flatMap((k => k.population))

const worldPop = countries.flatMap((k => k.population)).reduce((f, h) => f + h, 0)
mostTenPopName.unshift('World')
mostTenPopNumber.unshift(worldPop)

let widthNums = []
function createBarWidth() {
    let mostNumber = countries.sort((p, s) => s.population - p.population).flatMap((r => r.population))
    const worldPop = countries.flatMap((k => k.population)).reduce((f, h) => f + h, 0)
    widthNums.unshift(worldPop.toString() / 100000000)
    for (let index = 0; index < mostNumber.length; index++) {

        widthNums.push(+(mostNumber[index].toString() / 100000000))

    }

}
createBarWidth()



const bars = document.querySelector('.bars')
for (let l = 0; l < mostTenPopNumber.length; l++) {
    let bar = document.createElement('div')
    bar.innerHTML = `
    <div class="bar">
        <span id="cName">${mostTenPopName[l]}</span><span class="barSpace" style="width:${widthNums[l]}% ;"></span><span id="popNum">${new Intl.NumberFormat().format(mostTenPopNumber[l])}</span>
    </div>
    
    
    `
    bars.appendChild(bar)

}

const barBtnP = document.querySelector('.barBtnP')

function pop() {
    bars.innerHTML = ''
    barBtnP.innerHTML = '10 Most Populated Countries'
    for (let l = 0; l < 11; l++) {
        let bar = document.createElement('div')
        bar.innerHTML = `
    <div class="bar">
        <span id="cName">${mostTenPopName[l]}</span><span class="barSpace" style="width:${widthNums[l]}% ;"></span><span id="popNum">${new Intl.NumberFormat().format(mostTenPopNumber[l])}</span>
    </div>
    
    
    `
        bars.appendChild(bar)

    }
}

function lang() {

    bars.innerHTML = ''
    barBtnP.innerHTML = '10 Most Spoken Languages '

    for (let l = 0; l < mostSpokenTenLangName.length; l++) {
        let bar = document.createElement('div')
        bar.innerHTML = `
    <div class="bar">
        <span id="cName">${mostSpokenTenLangName[l]}</span><span class="barSpace" style="width:${mostSpokenTenLangCount[l]}% ;"></span><span id="popNum">${mostSpokenTenLangCount[l]}</span>
    </div>
    
    
    `
        bars.appendChild(bar)

    }
}

const btnBarPop = document.querySelector('.btn-barPop')
const btnBarLang = document.querySelector('.btn-barLang')
btnBarPop.addEventListener('click', pop)
btnBarLang.addEventListener('click', lang)

filterInput.addEventListener('keyup', filterProducts);

// callback function 
function filterProducts() {
    let count = 0
    let filterValue = filterInput.value.toUpperCase();
    let item = grid.querySelectorAll('.item')
    let inputCount = document.querySelector('.inputCount')
    let bar = document.querySelectorAll('.bar')
    
    for (let i = 0; i < item.length; i++) {
        let span = item[i].querySelector('.countryName');
        let pop = bar[i].querySelector('#cName')

        if (span.innerHTML.toUpperCase().indexOf(filterValue)>-1) {
            item[i].style.display = "initial";
            if (item[i].style.display = 'flex') count++;
            inputCount.innerHTML = count + ' countries satisfied search criteria';
            
          

        } else {
            item[i].style.display = "none";
        }
        if (pop.innerHTML.toUpperCase().match(filterValue)) {
            bar[i].style.display = 'flex'



        } else {
            bar[i].style.display = 'none'

        }

    }
}

const sortName = document.querySelector('.btn-name')
const sortCap = document.querySelector('.btn-cap')
const sortPop = document.querySelector('.btn-pop')

sortName.addEventListener('click', sortNames)

function sortNames() {
    
    let filterValue = filterInput.value.toUpperCase();
    let getNameI = document.querySelector('#btn-name')
    let getCapI = document.querySelector('#btn-cap')
    let getPopI = document.querySelector('#btn-pop')
    getCapI.className=''
    getPopI.className=''
    if(getNameI.className===''){
        getNameI.setAttribute('class','fa-solid fa-arrow-down-long')
        grid.innerHTML=''
        const sortAZ = countries.filter((e => e.name.toUpperCase().includes(filterValue) ==1)).sort((p, s) => p.name.localeCompare(s.name))
        for (let i = 0; i < sortAZ.length; i++) {
            let div = document.createElement('div');
    
            div.className = 'item'
            div.innerHTML = `
            <div class="itemChild">
                <img src="${sortAZ[i].flag}" class="img">
                <div class="text">
                    <h3 class="countryName">${sortAZ[i].name}</h3><br>
                    <span class="capitalName">Capital: <span class="capitals"> ${sortAZ[i].capital}</span></span><br>
                    <span class="langName">Language: <span class="langs"> ${sortAZ[i].languages}</span></span><br>
                    <span class="populationName">Population: <span class="popultationNum">${sortAZ[i].population}</span></span>
                </div>
            </div
            `
            grid.appendChild(div)
    
    
        }
    }else if(getNameI.className='fa-solid fa-arrow-down-long'){
        getNameI.setAttribute('class','fa-solid fa-arrow-up-long')
        grid.innerHTML=''
        const sortZA = countries.filter((e => e.name.toUpperCase().includes(filterValue) ==1)).sort((p, s) => s.name.localeCompare(p.name))
        for (let i = 0; i < sortZA.length; i++) {
            let div = document.createElement('div');
    
            div.className = 'item'
            div.innerHTML = `
            <div class="itemChild">
                <img src="${sortZA[i].flag}" class="img">
                <div class="text">
                    <h3 class="countryName">${sortZA[i].name}</h3><br>
                    <span class="capitalName">Capital: <span class="capitals"> ${sortZA[i].capital}</span></span><br>
                    <span class="langName">Language: <span class="langs"> ${sortZA[i].languages}</span></span><br>
                    <span class="populationName">Population: <span class="popultationNum">${sortZA[i].population}</span></span>
                </div>
            </div
            `
            grid.appendChild(div)
    
    
        }
     }


}

sortCap.addEventListener('click', sortCaps)

function sortCaps() {
    let getCapI = document.querySelector('#btn-cap')
    let getNameI = document.querySelector('#btn-name')
    let getPopI = document.querySelector('#btn-pop')
    getNameI.className=''
    getPopI.className=''
    
    let filterValue = filterInput.value.toUpperCase();
    if(getCapI.className===''){
        getCapI.setAttribute('class','fa-solid fa-arrow-down-long')
        grid.innerHTML=''
        const sortAZ = countries.filter((e => e.name.toUpperCase().includes(filterValue)==1)).sort((p, s) => p.capital>s.capital)
        for (let i = 0; i < sortAZ.length; i++) {
            let div = document.createElement('div');
    
            div.className = 'item'
            div.innerHTML = `
            <div class="itemChild">
                <img src="${sortAZ[i].flag}" class="img">
                <div class="text">
                    <h3 class="countryName">${sortAZ[i].name}</h3><br>
                    <span class="capitalName">Capital: <span class="capitals"> ${sortAZ[i].capital}</span></span><br>
                    <span class="langName">Language: <span class="langs"> ${sortAZ[i].languages}</span></span><br>
                    <span class="populationName">Population: <span class="popultationNum">${sortAZ[i].population}</span></span>
                </div>
            </div
            `
            grid.appendChild(div)
    
    
        }
    }else if(getCapI.className='fa-solid fa-arrow-down-long'){
        getCapI.setAttribute('class','fa-solid fa-arrow-up-long')
        grid.innerHTML=''
        const sortZA = countries.filter((e => e.name.toUpperCase().includes(filterValue)==1)).sort((p, s) => s.capital>p.capital)
        for (let i = 0; i < sortZA.length; i++) {
            let div = document.createElement('div');
    
            div.className = 'item'
            div.innerHTML = `
            <div class="itemChild">
                <img src="${sortZA[i].flag}" class="img">
                <div class="text">
                    <h3 class="countryName">${sortZA[i].name}</h3><br>
                    <span class="capitalName">Capital: <span class="capitals"> ${sortZA[i].capital}</span></span><br>
                    <span class="langName">Language: <span class="langs"> ${sortZA[i].languages}</span></span><br>
                    <span class="populationName">Population: <span class="popultationNum">${sortZA[i].population}</span></span>
                </div>
            </div
            `
            grid.appendChild(div)
    
    
        }
     }


}

sortPop.addEventListener('click', sortPops)

function sortPops() {
    let getCapI = document.querySelector('#btn-cap')
    let getPopI = document.querySelector('#btn-pop')
    let getNameI = document.querySelector('#btn-name')
    getCapI.className=''
    getNameI.className=''
    let filterValue = filterInput.value.toUpperCase();
    if(getPopI.className===''){
        getPopI.setAttribute('class','fa-solid fa-arrow-down-long')
        grid.innerHTML=''
        const sortAZ = countries.filter((e => e.name.toUpperCase().includes(filterValue)==1)).sort((p, s) => p.population-s.population)
        for (let i = 0; i < sortAZ.length; i++) {
            let div = document.createElement('div');
    
            div.className = 'item'
            div.innerHTML = `
            <div class="itemChild">
                <img src="${sortAZ[i].flag}" class="img">
                <div class="text">
                    <h3 class="countryName">${sortAZ[i].name}</h3><br>
                    <span class="capitalName">Capital: <span class="capitals"> ${sortAZ[i].capital}</span></span><br>
                    <span class="langName">Language: <span class="langs"> ${sortAZ[i].languages}</span></span><br>
                    <span class="populationName">Population: <span class="popultationNum">${sortAZ[i].population}</span></span>
                </div>
            </div
            `
            grid.appendChild(div)
    
    
        }
    }else if(getPopI.className='fa-solid fa-arrow-down-long'){
        getPopI.setAttribute('class','fa-solid fa-arrow-up-long')
        grid.innerHTML=''
        const sortZA = countries.filter((e => e.name.toUpperCase().includes(filterValue) ==1)).sort((p, s) => s.population-p.population)
        for (let i = 0; i < sortZA.length; i++) {
            let div = document.createElement('div');
    
            div.className = 'item'
            div.innerHTML = `
            <div class="itemChild">
                <img src="${sortZA[i].flag}" class="img">
                <div class="text">
                    <h3 class="countryName">${sortZA[i].name}</h3><br>
                    <span class="capitalName">Capital: <span class="capitals"> ${sortZA[i].capital}</span></span><br>
                    <span class="langName">Language: <span class="langs"> ${sortZA[i].languages}</span></span><br>
                    <span class="populationName">Population: <span class="popultationNum">${sortZA[i].population}</span></span>
                </div>
            </div
            `
            grid.appendChild(div)
    
    
        }
     }


}