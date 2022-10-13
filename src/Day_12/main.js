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
console.log(distance)

