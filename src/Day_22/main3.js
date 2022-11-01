// Day 22

// Exercises: Level 3

// Day 22

import {hknChallenges} from './info.js'

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

const arrTitles0 = []
const arrTitles1 = []
hknChallenges.author.titles.forEach((el => arrTitles0.push(el[0])))
hknChallenges.author.titles.forEach((el => arrTitles1.push(el[1])))


// Create Elements

const h2 = document.createElement('h2')
const h4 = document.createElement('h4')
const labelDate = document.createElement('label')
const span = document.createElement('span')


// Set Attribute h2

h2.textContent = hknChallenges.challengeTitle+' in '
h2.className ='title1'
h2.style.textAlign ='center'

// Set Attribute h4

h4.textContent = hknChallenges.challengeSubtitle
h4.style.textDecorationLine ='underline'
h4.className ='title2'
h4.style.textAlign ='center'

// Set Attribute h6

const changeColorOfTime =  setInterval(() => {
    const getColor = '#'+(Math.random()*11).toString(16).slice(2,8)
    const d = new Date()
    let options = { year: 'numeric', month: 'long', day: 'numeric', hour12: false }
    labelDate.textContent= new Intl.DateTimeFormat('en-US', options).format(d)+' '+d.toLocaleTimeString()
    labelDate.style.backgroundColor = getColor
    
}, 1000);


const divDate = document.createElement('div')
labelDate.style.display ='inline'
labelDate.style.fontSize ='18px'
labelDate.style.fontFamily ='cursive'
divDate.style.textAlign ='center'
divDate.appendChild(labelDate)


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
h2.appendChild(span)
body.appendChild(divDate)
body.appendChild(div)



// body style
body.style.maxWidth = '960px'
body.style.maxHeight = '960px'
body.style.fontSize = '1em'
body.style.fontFamily = 'fangsong'
body.style.margin = 'auto'
body.style.padding = 'auto'


// main div style

div.style.fontSize ='16px'
div.style.paddingBlock ='50px'



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

label01.style.textDecoration ='underline'

div00.style.display ='grid'
div00.style.gap ='10%'
div00.style.margin ='3px'
div00.style.backgroundColor ='green'
div00.style.alignItems ='center'
div00.style.gridTemplateColumns ='repeat(3, 1fr)'
div00.style.lineHeight ='100px'


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

label11.style.textDecoration ='underline'

div01.style.display ='grid'
div01.style.gap ='10%'
div01.style.margin ='3px'
div01.style.backgroundColor ='yellow'
div01.style.alignItems ='center'
div01.style.gridTemplateColumns ='repeat(3, 1fr)'
div01.style.lineHeight ='100px'



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
div02.style.columnGap ='10%'
div02.style.margin ='3px'
div02.style.backgroundColor ='red'
div02.style.alignItems ='center'
div02.style.gridTemplateColumns ='repeat(3, 1fr)'
div02.style.lineHeight ='100px'

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
div03.style.gap ='10%'
div03.style.margin ='3px'
div03.style.backgroundColor ='red'
div03.style.alignItems ='center'
div03.style.gridTemplateColumns ='repeat(3, 1fr)'
div03.style.lineHeight ='100px'



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
div04.style.gap ='10%'
div04.style.margin ='3px'
div04.style.backgroundColor ='red'
div04.style.alignItems ='center'
div04.style.gridTemplateColumns ='repeat(3, 1fr)'
div04.style.lineHeight ='100px'

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
div05.style.gap ='10%'
div05.style.margin ='3px'
div05.style.backgroundColor ='red'
div05.style.alignItems ='center'
div05.style.gridTemplateColumns ='repeat(3, 1fr)'
div05.style.lineHeight ='100px'


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
div06.style.gap ='10%'
div06.style.margin ='3px'
div06.style.backgroundColor ='red'
div06.style.alignItems ='center'
div06.style.gridTemplateColumns ='repeat(3, 1fr)'
div06.style.lineHeight ='100px'


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
div07.style.gap ='10%'
div07.style.margin = '3px'
div07.style.backgroundColor ='red'
div07.style.alignItems ='center'
div07.style.gridTemplateColumns ='repeat(3, 1fr)'
div07.style.lineHeight ='100px'



// div author


const divAuthor = document.createElement('div')
const h2ForInfo = document.createElement('h2')
const btn1 = document.createElement('button')
const i1 = document.createElement('i')
const btn2 = document.createElement('button')
const i2 = document.createElement('i')
const btn3 = document.createElement('button')
const i3 = document.createElement('i')
const pInfo = document.createElement('p')
const a1 = document.createElement('a')
const a2 = document.createElement('a')
const a3 = document.createElement('a')
h2ForInfo.textContent = hknChallenges.author.firstName+' '+hknChallenges.author.lastName
pInfo.textContent = hknChallenges.author.bio
a1.setAttribute('href', 'https://www.linkedin.com/in/hakanfirat')
a1.appendChild(i1)
a2.setAttribute('href', 'https://twitter.com/hknfrtt')
a2.appendChild(i2)
a3.setAttribute('href', 'https://github.com/frthkn')
a3.appendChild(i3)

i1.className = 'fa fa-linkedin'
i2.className = 'fa fa-twitter'
i3.className = 'fa fa-github'

btn1.style.fontSize ='30px'
btn2.style.fontSize ='30px'
btn3.style.fontSize ='30px'

a1.style.backgroundColor = '#000000'
a1.style.color = '#FFFFFF'
a2.style.backgroundColor = '#000000'
a2.style.color = '#FFFFFF'
a3.style.backgroundColor = '#000000'
a3.style.color = '#FFFFFF'

btn1.style.backgroundColor = '#000000'
btn1.style.color = '#FFFFFF'
btn2.style.backgroundColor = '#000000'
btn2.style.color = '#FFFFFF'
btn3.style.backgroundColor = '#000000'
btn3.style.color = '#FFFFFF'

btn1.style.margin = '5px'
btn2.style.margin = '5px'
btn3.style.margin = '5px'

btn1.style.border = 'none'
btn2.style.border = 'none'
btn3.style.border = 'none'

btn1.style.borderRadius = '4px'
btn2.style.borderRadius = '4px'
btn3.style.borderRadius = '4px'



divAuthor.style.textAlign ='center'

divAuthor.appendChild(h2ForInfo)
btn1.appendChild(a1)
btn2.appendChild(a2)
btn3.appendChild(a3)
divAuthor.appendChild(btn1)
divAuthor.appendChild(btn2)
divAuthor.appendChild(btn3)
divAuthor.appendChild(pInfo)
div.appendChild(divAuthor)


// div titles-skills-qualifications
const divMainInfo = document.createElement('div')
const labTitles = document.createElement('label')
const labSkills = document.createElement('label')
const labQualifications = document.createElement('label')
const dlTitles = document.createElement('dl')
const dlSkills = document.createElement('dl')
const dlQualifications = document.createElement('dl')

dlTitles.appendChild(labTitles)
dlSkills.appendChild(labSkills)
dlQualifications.appendChild(labQualifications)

let optTitles
for (let index = 0; index < arrTitles0.length; index++) {
    optTitles = document.createElement('dt')
    optTitles.textContent = arrTitles0[index] +' '+arrTitles1[index]
    dlTitles.appendChild(optTitles)
    
}

let optSkills,iSkills
for (let index = 0; index < hknChallenges.author.skills.length; index++) {
    optSkills = document.createElement('dt')
    iSkills = document.createElement('i')
    iSkills.setAttribute('class','fa solid fa check square fill')
    optSkills.textContent = iSkills+' '+hknChallenges.author.skills[index]
    dlSkills.appendChild(iSkills)
    dlSkills.appendChild(optSkills)
    
}

let optQualifications
for (let index = 0; index < hknChallenges.author.qualifications.length; index++) {
    optQualifications = document.createElement('dt')
    optQualifications.textContent = hknChallenges.author.qualifications[index]
    dlQualifications.appendChild(optQualifications)
    
}

const boldTitles = document.createElement('b')
const boldSkills = document.createElement('b')
const boldQualifications = document.createElement('b')

boldTitles.textContent ='Titles'
boldSkills.textContent ='Skills'
boldQualifications.textContent ='Qualifications'




labTitles.appendChild(boldTitles)
labSkills.appendChild(boldSkills)
labQualifications.appendChild(boldQualifications)
divMainInfo.appendChild(dlTitles)
divMainInfo.appendChild(dlSkills)
divMainInfo.appendChild(dlQualifications)
div.appendChild(divMainInfo)


divMainInfo.style.display ='grid'
divMainInfo.style.alignItems ='left'
divMainInfo.style.gridTemplateColumns ='repeat(3, 1fr)'

// keywords

const divKeywords = document.createElement('div')
const labelKeywords = document.createElement('label')
labelKeywords.textContent ='Keywords'
labelKeywords.style.fontWeight ='bold'
labelKeywords.style.display='inline block'
labelKeywords.style.margin ='20px 900px 10px 0'

divKeywords.appendChild(labelKeywords)
const arrKeywords = []
hknChallenges.keywords.flatMap((el => arrKeywords.push(el)))
let spanKeywords
for (let index = 0; index < arrKeywords.length; index++) {
    spanKeywords = document.createElement('span')
    spanKeywords.textContent = '  #'+arrKeywords[index]+' '
    spanKeywords.style.backgroundColor = '#'+(Math.random()*11).toString(16).slice(2,8)
    spanKeywords.style.margin = '5px 0 0 13px'
    spanKeywords.style.padding = '15px'
    spanKeywords.style.borderRadius = '15px'     
    divKeywords.appendChild(spanKeywords)
}
divKeywords.style.lineHeight ='20px'
divKeywords.style.flexWrap ='wrap'
divKeywords.style.display ='inline flex'
      
div.appendChild(divKeywords)
