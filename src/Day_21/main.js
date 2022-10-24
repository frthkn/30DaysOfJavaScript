// Day 21

// Exercise: Level 1

// 1- Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name

const getTagP1= document.querySelector('p')

// console.log(getTagP1)

// 2- Get each of the the paragraph using document.querySelector('#id') and by their id

// const getTagPById= document.querySelectorAll('#p').forEach(p => console.log(p))


// 3- Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name

//const getTagPByTagName= document.querySelectorAll('p').forEach(p => console.log(p))

// 4- Loop through the nodeList and get the text content of each paragraph

//const getTagPContent = document.querySelectorAll('p').forEach((i => console.log(i.innerText)))

// 5- Set a text content to paragraph the fourth paragraph,Fourth Paragraph

// const getTagFourPContent = document.querySelectorAll('p')
// const setFourPragraph = getTagFourPContent[3].innerHTML = 'Fourth Paragraph'

// 6- Set id and class attribute for all the paragraphs using different attribute setting methods

// const setAttributeToAllPTag = document.querySelectorAll('p')
// const setClass = setAttributeToAllPTag.forEach((i => i.setAttribute('class', 'newClass')))
// const setId = setAttributeToAllPTag.forEach((i => i.setAttribute('id', 'newID')))

// console.log(setAttributeToAllPTag)


// Exercise: Level 2


// 1- Change style of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)

// const changeStyleBgColor = document.querySelectorAll('p').forEach((c => c.style.backgroundColor ='yellow'))
// const changeStyleColor = document.querySelectorAll('p').forEach((c => c.style.color ='blue'))
// const changeStyleFontFamily = document.querySelectorAll('p').forEach((c => c.style.fontFamily ='cursive'))

// 2- Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color

// const getTagAllP= document.querySelectorAll('p').forEach((p,i) => {
//   if(i ==0 || i == 2) {
//     p.style.color = 'green'
//   }else{
//     p.style.color = 'red'
//   }
// } )

// 3- Set text content, id and class to each paragraph

// const setAttributeToAllPTag = document.querySelectorAll('p')
// const setClass = setAttributeToAllPTag.forEach((i => i.setAttribute('class', 'lastClass')))
// const setId = setAttributeToAllPTag.forEach((i => i.setAttribute('id', 'lastID')))
// const setContent = setAttributeToAllPTag.forEach((p, i) =>{
//   if (i ==0){
//     p.innerText ='This P One'
//   }else if (i ==1){
//     p.innerText ='This P Two'
//   }else if (i ==2){
//     p.innerText ='This P Three'
//   }else if (i ==3){
//     p.innerText ='This P Four'
//   }
// })


// Exercise: Level 3

// DOM: Mini project 1



// 1- Develop the following application, use the following HTML elements to get started with. You will get the same code on starter folder. Apply all the styles and functionality using JavaScript only.

// 1.1- The year color is changing every 1 second

//const changeColorOfYear = document.

// 1.2- The date and time background color is changing every on seconds
// 1.3- Completed challenge has background green
// 1.4- Ongoing challenge has background yellow
// 1.5- Coming challenges have background red
