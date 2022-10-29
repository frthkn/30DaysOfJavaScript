// Day 22

import {hknChallenges} from './Day_22/info.js'

// Get body and div

const body = document.querySelector('body')
const div = document.querySelector('div')

// Get Content  detail, status and summary 

const arrNameForDetail = []
const arrTopic = []
const arrNameForLi = []
const arrStatus = []
hknChallenges.challenges.forEach((el => arrNameForDetail.push(el.name.slice(11))))
hknChallenges.challenges.forEach((el => arrTopic.push(el.topics)))
hknChallenges.challenges.forEach((el => arrNameForLi.push(el.name)))
hknChallenges.challenges.forEach((el => arrStatus.push(el.status)))

// Create Elements

const h2 = document.createElement('h2')
const h4 = document.createElement('h4')
const h5 = document.createElement('h5')
const span = document.createElement('span')


// Set Attribute h2

h2.textContent = hknChallenges.challengeTitle+' in '
h2.className ='title1'

// Set Attribute h4

h4.textContent = hknChallenges.challengeSubtitle
h4.style.textDecorationLine ='underline'
h4.className ='title2'

// Set Attribute h6

const changeColorOfTime =  setInterval(() => {
    const getColor = '#'+(Math.random()*11).toString(16).slice(2,8)
    const d = new Date()
    const getH5 = document.querySelector('h5').innerHTML = d.toDateString()+' '+ d.toLocaleTimeString()
    document.querySelector('h5').style.backgroundColor = getColor
    
}, 1000);

h5.textContent = changeColorOfTime
h5.style.display ='inline'
h5.style.gridColumn ='1'
h5.className ='title3'
h5.style.margin = '3%'
h5.style.padding = '1%'
h5.style.fontSize = '16px'

// Set Attribute span

const changeColorOfYear =  setInterval(() => {
    const getColor = '#'+(Math.random()*11).toString(16).slice(2,8)
    document.querySelector('span').style.backgroundColor = getColor
    
}, 1000);

span.textContent = hknChallenges.challengeYear
span.style.backgroundColor = changeColorOfYear
span.className = 'span-year'




// Append Elements to body

body.appendChild(h2)
body.appendChild(h4)
body.appendChild(h5)
h2.appendChild(span)
body.appendChild(div)


// body style
body.style.display = 'block'
body.style.maxWidth = '960px'
body.style.maxHeight = '960px'
body.style.fontSize = '1em'
body.style.fontFamily = 'fangsong'
body.style.textAlign = 'center'
body.style.margin = 'auto'
body.style.padding = 'auto'


// main div style
div.style.display ='grid'
div.style.gap ='2px'
div.style.padding ='50px'


// create divs

// div 0

const div00 = document.createElement('div')
const label01 = document.createElement('label')
const label02 = document.createElement('label')
const label03 = document.createElement('label')
const detail00 = document.createElement('details')
const summary00 = document.createElement('summary')
let option00
for (let index = 0; index < arrTopic[0].length; index++) {
    option00 = document.createElement('option')
    option00.className = 'option00'+index
    option00.textContent = arrTopic[0][index]
    detail00.appendChild(option00)

}

summary00.textContent = arrNameForDetail[0]
label01.textContent = arrNameForLi[0]
label03.textContent = arrStatus[0]

detail00.appendChild(summary00)
label02.appendChild(detail00)
div00.appendChild(label01)
div00.appendChild(label02)
div00.appendChild(label03)
div.appendChild(div00)

div00.style.display ='grid'
div00.style.backgroundColor ='green'
div00.style.alignItems ='center'
div00.style.gridTemplateColumns ='repeat(3, 1fr)'


// div 1

const div01 = document.createElement('div')
const label11 = document.createElement('label')
const label12 = document.createElement('label')
const label13 = document.createElement('label')
const detail01 = document.createElement('details')
const summary01 = document.createElement('summary')
let option01
for (let index = 0; index < arrTopic[1].length; index++) {
    option01 = document.createElement('option')
    option01.className = 'option00'+index
    option01.textContent = arrTopic[1][index]
    detail01.appendChild(option01)

}

summary01.textContent = arrNameForDetail[1]
label11.textContent = arrNameForLi[1]
label13.textContent = arrStatus[1]

detail01.appendChild(summary01)
label12.appendChild(detail01)
div01.appendChild(label11)
div01.appendChild(label12)
div01.appendChild(label13)
div.appendChild(div01)

div01.style.display ='grid'
div01.style.backgroundColor ='yellow'
div01.style.alignItems ='center'
div01.style.gridTemplateColumns ='repeat(3, 1fr)'



// div 2


const div02 = document.createElement('div')
const label21 = document.createElement('label')
const label22 = document.createElement('label')
const label23 = document.createElement('label')
const detail02 = document.createElement('details')
const summary02 = document.createElement('summary')
let option02
for (let index = 0; index < arrTopic[2].length; index++) {
    option02 = document.createElement('option')
    option02.className = 'option00'+index
    option02.textContent = arrTopic[2][index]
    detail02.appendChild(option02)

}

summary02.textContent = arrNameForDetail[2]
label21.textContent = arrNameForLi[2]
label23.textContent = arrStatus[2]

detail02.appendChild(summary02)
label22.appendChild(detail02)
div02.appendChild(label21)
div02.appendChild(label22)
div02.appendChild(label23)
div.appendChild(div02)

div02.style.display ='grid'
div02.style.backgroundColor ='red'
div02.style.alignItems ='center'
div02.style.gridTemplateColumns ='repeat(3, 1fr)'


// div 3

const div03 = document.createElement('div')
const label31 = document.createElement('label')
const label32 = document.createElement('label')
const label33 = document.createElement('label')
const detail03 = document.createElement('details')
const summary03 = document.createElement('summary')
let option03
for (let index = 0; index < arrTopic[3].length; index++) {
    option03 = document.createElement('option')
    option03.className = 'option00'+index
    option03.textContent = arrTopic[3][index]
    detail03.appendChild(option03)

}

summary03.textContent = arrNameForDetail[3]
label31.textContent = arrNameForLi[3]
label33.textContent = arrStatus[3]

detail03.appendChild(summary03)
label32.appendChild(detail03)
div03.appendChild(label31)
div03.appendChild(label32)
div03.appendChild(label33)
div.appendChild(div03)

div03.style.display ='grid'
div03.style.backgroundColor ='red'
div03.style.alignItems ='center'
div03.style.gridTemplateColumns ='repeat(3, 1fr)'



// div 4

const div04 = document.createElement('div')
const label41 = document.createElement('label')
const label42 = document.createElement('label')
const label43 = document.createElement('label')
const detail04 = document.createElement('details')
const summary04 = document.createElement('summary')
let option04
for (let index = 0; index < arrTopic[4].length; index++) {
    option04 = document.createElement('option')
    option04.className = 'option00'+index
    option04.textContent = arrTopic[4][index]
    detail04.appendChild(option04)

}

summary04.textContent = arrNameForDetail[4]
label41.textContent = arrNameForLi[4]
label43.textContent = arrStatus[4]

detail04.appendChild(summary04)
label42.appendChild(detail04)
div04.appendChild(label41)
div04.appendChild(label42)
div04.appendChild(label43)
div.appendChild(div04)

div04.style.display ='grid'
div04.style.backgroundColor ='red'
div04.style.alignItems ='center'
div04.style.gridTemplateColumns ='repeat(3, 1fr)'


// div 5

const div05 = document.createElement('div')
const label51 = document.createElement('label')
const label52 = document.createElement('label')
const label53 = document.createElement('label')
const detail05 = document.createElement('details')
const summary05 = document.createElement('summary')
let option05
for (let index = 0; index < arrTopic[5].length; index++) {
    option05 = document.createElement('option')
    option05.className = 'option00'+index
    option05.textContent = arrTopic[5][index]
    detail05.appendChild(option05)

}

summary05.textContent = arrNameForDetail[5]
label51.textContent = arrNameForLi[5]
label53.textContent = arrStatus[5]

detail05.appendChild(summary05)
label52.appendChild(detail05)
div05.appendChild(label51)
div05.appendChild(label52)
div05.appendChild(label53)
div.appendChild(div05)

div05.style.display ='grid'
div05.style.backgroundColor ='red'
div05.style.alignItems ='center'
div05.style.gridTemplateColumns ='repeat(3, 1fr)'


// div 6

const div06 = document.createElement('div')
const label61 = document.createElement('label')
const label62 = document.createElement('label')
const label63 = document.createElement('label')
const detail06 = document.createElement('details')
const summary06 = document.createElement('summary')
let option06
for (let index = 0; index < arrTopic[6].length; index++) {
    option06 = document.createElement('option')
    option06.className = 'option00'+index
    option06.textContent = arrTopic[6][index]
    detail06.appendChild(option06)

}

summary06.textContent = arrNameForDetail[6]
label61.textContent = arrNameForLi[6]
label63.textContent = arrStatus[6]

detail06.appendChild(summary06)
label62.appendChild(detail06)
div06.appendChild(label61)
div06.appendChild(label62)
div06.appendChild(label63)
div.appendChild(div06)

div06.style.display ='grid'
div06.style.backgroundColor ='red'
div06.style.alignItems ='center'
div06.style.gridTemplateColumns ='repeat(3, 1fr)'


// div 7

const div07 = document.createElement('div')
const label71 = document.createElement('label')
const label72 = document.createElement('label')
const label73 = document.createElement('label')
const detail07 = document.createElement('details')
const summary07 = document.createElement('summary')
let option07
for (let index = 0; index < arrTopic[7].length; index++) {
    option07 = document.createElement('option')
    option07.className = 'option00'+index
    option07.textContent = arrTopic[7][index]
    detail07.appendChild(option07)

}

summary07.textContent = arrNameForDetail[7]
label71.textContent = arrNameForLi[7]
label73.textContent = arrStatus[7]

detail07.appendChild(summary07)
label72.appendChild(detail07)
div07.appendChild(label71)
div07.appendChild(label72)
div07.appendChild(label73)
div.appendChild(div07)

div07.style.display ='grid'
div07.style.backgroundColor ='red'
div07.style.alignItems ='center'
div07.style.gridTemplateColumns ='repeat(3, 1fr)'



// div for info


const divInfo = document.createElement('div')
divInfo.textContent = hknChallenges.author.firstName+' '+hknChallenges.author.lastName
div.appendChild(divInfo)


