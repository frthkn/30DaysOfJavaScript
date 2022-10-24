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

const getTagFourPContent = document.querySelectorAll('p')
const setFourPragraph = getTagFourPContent[3].innerHTML = 'Fourth Paragraph'
// console.log(setFourPragraph)

// 6- Set id and class attribute for all the paragraphs using different attribute setting methods

const setAttributeToAllPTag = document.querySelectorAll('p')
const setClass = setAttributeToAllPTag.forEach((i => i.setAttribute('class', 'newClass')))
const setId = setAttributeToAllPTag.forEach((i => i.setAttribute('id', 'newID')))

// console.log(setAttributeToAllPTag)


// Exercise: Level 2


// 1- Change style of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)

const changeStyleBgColor = document.querySelectorAll('p').forEach((c => c.style.backgroundColor ='yellow'))
const changeStyleColor = document.querySelectorAll('p').forEach((c => c.style.color ='blue'))
const changeStyleFontFamily = document.querySelectorAll('p').forEach((c => c.style.fontFamily ='cursive'))

// Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
// Set text content, id and class to each paragraph


// Exercise: Level 3