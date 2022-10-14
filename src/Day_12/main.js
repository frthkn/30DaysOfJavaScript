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
console.log('first letter is num: ',isValidVariable('1Hakanname'))
console.log('first letter is space: ',isValidVariable(' Hakanname1'))
console.log('first letter is punctuation mark: ',isValidVariable('?Hakanname1'))
console.log('first letter is dashed line: ',isValidVariable('Hakan-name1'))
console.log('first letter is semicolon: ',isValidVariable(';Hakanname1'))
console.log('first letter is tag mark: ',isValidVariable('#Hakanname1'))
console.log('first letter is null: ',isValidVariable('null'))
console.log('first letter is empty: ',isValidVariable(''))
console.log(isValidVariable('Hakanname1'))
console.log(isValidVariable('Hakan_name1'))
console.log(isValidVariable('HakanName1'))
console.log(isValidVariable('HakanName'))
console.log('first letter is underline: ',isValidVariable('_Hakanname1'))
console.log('first letter is dollar mark: ',isValidVariable('$Hakanname1'))

