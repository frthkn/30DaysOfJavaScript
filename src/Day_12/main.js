// Day 12

// Exercises: Level 1


// 1- Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’

const text = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
const totalAnnualIncome = text.match(/\d+/g).map((el => +(el))).reduce((acc, prev) =>  acc+prev ,0)

//console.log('Total annual income of the person: ',totalAnnualIncome, 'Euro')


// 2- The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.

const points = [4,-4,0,-3,-1,-12,8]
const sortPoints = points.sort((x,y) => {return x-y})
const distance = Math.abs(sortPoints[0])+sortPoints[sortPoints.length-1]
//console.log(distance)

// 3- Write a pattern which identify if a string is a valid JavaScript variable

function isValidVariable(varName){
  
    let regex1 = /^[A-z$]/
    let regex2 = /[-,?;*:]\b/g
    
    if(varName == ''|| varName == 'null' || !varName.match(regex1) || varName.match(regex2)){
        return false
    }else {
      
        return true
    }
    
}
// console.log('first letter is num: ',isValidVariable('1Hakanname'))
// console.log('first letter is space: ',isValidVariable(' Hakanname1'))
// console.log('first letter is punctuation mark: ',isValidVariable('?Hakanname1'))
// console.log('first letter is dashed line: ',isValidVariable('Hakan-name1'))
// console.log('first letter is semicolon: ',isValidVariable(';Hakanname1'))
// console.log('first letter is tag mark: ',isValidVariable('#Hakanname1'))
// console.log('first letter is null: ',isValidVariable('null'))
// console.log('first letter is empty: ',isValidVariable(''))
// console.log(isValidVariable('Hakanname1'))
// console.log(isValidVariable('Hakan_name1'))
// console.log(isValidVariable('HakanName1'))
// console.log(isValidVariable('HakanName'))
// console.log('first letter is underline: ',isValidVariable('_Hakanname1'))
// console.log('first letter is dollar mark: ',isValidVariable('$Hakanname1'))

// Exercises: Level 2

// 1- Write a function called tenMostFrequentWords which get the ten most frequent word from a string

const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`

function tenMostFrequentWords(paragraph ,num){
    const convertToArr = paragraph.match(/([a-z])\w+|I/gi)
    const count = {}
    const find = convertToArr.flatMap(num=> num).forEach((el => {count[el] = (count[el] ?? 0)+1}))
    const sorted = Object.entries(count).sort((h,f)=> f[1]-h[1])
    return sorted.slice(0,num)
}

// console.log(tenMostFrequentWords(paragraph))
// console.log(tenMostFrequentWords(paragraph,10))

// Exercises: Level 3

// 1- Write a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.

const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
const clenSentence = sentence.replace(/[^A-z\s]/gi, '').match(/([A-z])\w+|[I,a]/gi)
console.log(clenSentence)

function threeMostFrequentWords(sentence ,num){
    const count = {}
    const find = clenSentence.flatMap(num=> num).forEach((el => {count[el] = (count[el] ?? 0)+1}))
    const sorted = Object.entries(count).sort((h,f)=> f[1]-h[1])
    return sorted.slice(0,num)
}
//console.log(threeMostFrequentWords(sentence,3))


