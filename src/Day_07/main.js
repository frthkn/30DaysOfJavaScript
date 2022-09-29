// Day 7

// Exercises: Level 1

// 1- Declare a function fullName and it print out your full name.

// function fullName(){
//     return 'Hakan FIRAT'
// }
// console.log(fullName())

// 2- Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

// function fullName(firstName, lastName){
//     return firstName +' '+ lastName
// }
// console.log(fullName('Hakan','FIRAT'))

// 3- Declare a function addNumbers and it takes two two parameters and it returns sum.

// function addNumbers(a,b){
//     return a+b
// }

// console.log(addNumbers(5,10))

// 4- An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

// function perimeterOfRectangle(length,width){
//     let area = length*width
//     return area
// }

// console.log(perimeterOfRectangle(10,8))

// 5- A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

// function perimeterOfRectangle(length,width){
//     let area = (length+width)*2
//     return area
// }

// console.log(perimeterOfRectangle(10,8))

// 6- A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

// function volumeOfRectPrism(length, weight,height){
//     let prism = length*weight*height
//     return prism
// }
// console.log(volumeOfRectPrism(2,3,4));

// 7- Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

// function areaOfCircle(r){
//     let area = Math.PI*r
//     return area
// }

// console.log(areaOfCircle(5));

// 8- Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

// function circumOfCircle(r){
//     let circumference = 2*Math.PI*r
//     return circumference
// }

// console.log(circumOfCircle(3))

// 9- Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

// function calculatedDensity(mass, volume){
//     let density = mass/volume
//     return density
// }

// console.log(calculatedDensity(10,5))

// 10- Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

// function calcSpeed(distance, time) {
//     let speed = distance/time // the time has to be hour, not minute
//     return speed
// }

// console.log(calcSpeed(240,4))

// 11- Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

// function calcWeight(mass, gravity = 9.81){
//     let weight = mass*gravity
//     return weight
// }

// console.log(calcWeight(10))

// 12- Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

// function convertCelsiusToFahrenheit(oC){
//     let oF = (oC*(9/5))+32
//     return oF
// }

// console.log(convertCelsiusToFahrenheit(30))

// 13- Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

//     The same groups apply to both men and women.
//     Underweight: BMI is less than 18.5
//     Normal weight: BMI is 18.5 to 24.9
//     Overweight: BMI is 25 to 29.9
//     Obese: BMI is 30 or more

// function calcBMI(weight,height){
//     let bmi = weight/(height*height)
//     if(bmi<18.5){
//         console.log('You BMI is underweight')
//     }else if(bmi> 18.5 && bmi<24.9){
//         console.log('You BMI is normal weight')
//     }else if(bmi> 25 && bmi<29.9){
//         console.log('You BMI is Overweight')
//     }else{
//         console.log('You BMI is Obese')
//     }
//     return bmi
// }

// console.log(calcBMI(80,1.67))

// 14- Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

// function checkSeason(month){
    
//     switch(month){
//         case 'January' :
//         case 'February':
//         case 'December':
//             console.log('The season is Winter')
//             break
//         case 'March' :
//         case 'April':
//         case 'May':
//             console.log('The season is Spring')
//             break
//         case 'June' :
//         case 'July':
//         case 'August':
//             console.log('The season is Summer')
//             break
//         case 'September' :
//         case 'October':
//         case 'November':
//             console.log('The season is Autumn')
//             break
//     }
//     return month

// }

// console.log(checkSeason('November'))

// 15- Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

// function findMax(a,b,c) {
//     return Math.max(a,b,c)
// }

// console.log(findMax(-150,-2,-110))

// Exercises: Level 2



// 1- Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

// function solveLinEquation(a,b,c){
//     let solve = a+'x'+'+'+b+'y'+'+'+c+' = '+0
//     if(a==1 && b ==1){
//         return 'x+y+'+c+' = '+0
//     }else if( a ==1){
//         return 'x+'+b+'y+'+c+' = '+0
//     }else if(b==1){
//         return a+'x+y+'+c+' = '+0
//     }
//     return solve
// }
// console.log(solveLinEquation(1,1,5))
// '\n'
// console.log(solveLinEquation(1,3,5))
// '\n'
// console.log(solveLinEquation(4,1,5))

// 2- Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

// function solveQuadEquation(a,b,c){
//     let sqrt = Math.sqrt(b*b-4*a*c)
//     let solve1 = ((-b+sqrt)/2*a)
//     let solve2 = ((-b-sqrt)/2*a)
//     let solve = `{${solve1}, ${solve2}}`
//     if(a == 0){
//         console.log(" a can not be equal zero(0)" )
//         return `{0}`
//     } else if(solve1 === solve2) {
//         return `{${solve1}}`
//     }
//     return solve
    
// }
// console.log(solveQuadEquation(0,-1,-2))
// console.log(solveQuadEquation(1,-1,-2))
// console.log(solveQuadEquation(1, 4, 4))
// console.log(solveQuadEquation(1, 7, 12))

// 3- Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

// function printArray(...arr){
//     return arr
// }

// console.log(printArray(1,'a'))

// 4- Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

// function showDateTime(){
//     let d = new Date()
//     let c = `${d.getDate()}/0${d.getMonth()+1}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`
//     return c
// }
// console.log(showDateTime())

// 5- Declare a function name swapValues. This function swaps value of x to y.

// function swapValues(a,b){
//     [a,b] = [b,a]
//     return `a = ${a}, b = ${b}`
// }
// console.log(swapValues(10,20))
// console.log(swapValues('string',true))


// 6- a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

// let reverseArray = ([1, 2, 3, 4, 5]).reduceRight(function(first,end) {
//     first.push(end)
//     return first
// }, []);

// console.log(reverseArray)

// 7- Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

// function capitalizeArray(){
//     let arr = ['a','red','home']
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(arr[i].toUpperCase())
//     }
//     return newArr
// }
// console.log(capitalizeArray())

// 8- Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

// function addItem(...arg){
//     return arg 
// }

// console.log(addItem(8,9,10,11))
// console.log(addItem('Hakan'))
// console.log(addItem('JS'))

// 9- Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

// function removeItem(index){
//     let arr = []
//     arr.pop(index)
//     return arr
// }

// console.log(removeItem(5,7,8,9,10))

// 10- Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

// function sumOfNumbers(a){
//     let sum = 0

//     if (a === 0){
//         console.log('the number has to ve great than zero(0)')
//     }else if(a>0){
//         for(let i=0; i<=a; i++){
//             sum +=i
//         }
//     }
//     return sum
// }

// console.log(sumOfNumbers(0)) 
// console.log(sumOfNumbers(15))
// console.log(sumOfNumbers(10))

// 11- Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

// function sumOfOdds(n){
//     let sum = 0
//     if((n%2) == 0){
//         let total = n/2
//         sum =total*total 
//     }else if((n%2) != 0){
//         let total = (n+1)/2
//         sum =total*total
//     }
//     return sum
// }
// console.log(sumOfOdds(9)) 
// console.log(sumOfOdds(10)) 


// 12- Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

// function sumOfEven(n){
//     let sum = 0
//     if((n%2) == 0){
//         let total = (n/2)*((n/2)+1)
//         sum =total 
//     }else if((n%2) != 0){
//         let total = ((n-1)/2)*(((n-1)/2)+1) 
//         sum =total
//     }
//     return sum
// }
  
// console.log(sumOfEven(6))
// console.log(sumOfEven(7)) 
 
// 13- Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

// function evensAndOdds(n){
//     let sumOfEven = 0
//     let sumOfOdds = 0
//     if((n%2) == 0){
//         let total1 = (n/2)
//         let total2 = (n/2)
//         sumOfOdds = total1
//         sumOfEven =  total2+1
//     }else if((n%2) != 0){
//         let total1 = (n+1)/2
//         let total2 = (n+1)/2
//         sumOfOdds = total1
//         sumOfEven = total2
//     }
//     return `The number of odds are ${sumOfOdds} \nThe number of evens are ${sumOfEven}`
// }
  
// console.log(evensAndOdds(100))

// 14- Write a function which takes any number of arguments and return the sum of the arguments

// function sumOfArgs(...args){
//     let sum = 0
//     for(let i =0; i<args.length; i++){
//         sum += args[i]
//     }
//     return sum

// }

// console.log(sumOfArgs(1,2,3))
// console.log(sumOfArgs(1,2,3,4))

// 15- Write a function which generates a randomUserIp.

// function randomUserIp(){
//     return `${Math.floor(Math.random()*256)}.${Math.floor(Math.random()*256)}.${Math.floor(Math.random()*256)}.${Math.floor(Math.random()*256)}`
// }
//  console.log(randomUserIp())

// 16- Write a function which generates a randomMacAddress

// function randomMacAddress(){
    
//     let min = 1
//     let max = 10
//     let chr1 = Math.random().toString(16)
//     let num1 = Math.floor(Math.random()*(max-min)+min)
//     let chr2 = Math.random().toString(16)
//     let num2 = Math.floor(Math.random()*(max-min)+min)
//     let chr3 = Math.random().toString(16)
//     let num3 = Math.floor(Math.random()*(max-min)+min)
//     let chr4 = Math.random().toString(16)
//     let num4 = Math.floor(Math.random()*(max-min)+min)
//     let chr5 = Math.random().toString(16)
//     let num5 = Math.floor(Math.random()*(max-min)+min)
//     let chr6 = Math.random().toString(16)
//     let num6 = Math.floor(Math.random()*(max-min)+min)

//     return `${num1}${chr1.slice(2,3)}:${num2}${chr2.slice(2,3)}:${num3}${chr3.slice(2,3)}:${num4}${chr4.slice(2,3)}:${num5}${chr5.slice(2,3)}:${num6}${chr6.slice(2,3)}`
// }
//  console.log(randomMacAddress())
 
 
// 17- Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

// function randomHexaNumberGenerator(){
//     let chr1 = Math.random().toString(16)
   
//     return `#${chr1.slice(2,8)}`
// }
//  console.log(randomHexaNumberGenerator())

// 18- Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

// function userIdGenerator(){
//     let chr1 = Math.random().toString(36)
   
//     return `${chr1.slice(2,9)}`
// }
//  console.log(userIdGenerator())

// Exercises: Level 3

// 1- Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

// function userIdGeneratedByUser(){
//     let howManyId = prompt('','How many has to be ID')
//     let numChr = prompt('','How many character has to be ID')
    
//     for (let i = 0; i < howManyId; i++) {
//         let num = Math.floor(Math.random()*10000001).toString(36).slice(2)+Math.floor(Math.random()*1000001*100000001)+Math.floor(Math.random()*1000001*100000001)+Math.floor(Math.random()*10000001).toString(16).slice(2)+Math.floor(Math.random()*1000001*100000001)
//         console.log(num.slice(0,numChr))    
        
//     }
//     return `Generated ${howManyId} ID with ${numChr} characters`
// }
//  console.log(userIdGeneratedByUser())


// 2- Write a function name rgbColorGenerator and it generates rgb colors.

// function rgbColorGenerator(){
//     let num1, num2,num3
//     num1 = Math.floor(Math.random()*256)
//     num2 = Math.floor(Math.random()*256)
//     num3 = Math.floor(Math.random()*256)
//     return `rgb(${num1},${num2},${num3})`
// }

// console.log(rgbColorGenerator())

// 3- Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

// function arrayOfHexaColors(){
//     let arr = []
//     let randomNum = Math.floor(Math.random()*10)+1
//     for (let i = 1; i <=randomNum; i++) {
//         let hexNum = Math.random().toString(16).slice(2,8)
//         arr.push('#'+hexNum)
//     }
//     return arr
// }
//  console.log(arrayOfHexaColors())

// 4- Write a function arrayOfRgbColors which return any number of RGB colors in an array.

// function arrayOfRgbColors(){
//     let arr = []
//     let randomNum = Math.floor(Math.random()*10)+1
//     for (let i = 1; i <=randomNum; i++) {
//         let rgbNum1 = Math.floor(Math.random()*256)
//         let rgbNum2 = Math.floor(Math.random()*256)
//         let rgbNum3 = Math.floor(Math.random()*256)
//         arr.push('rgb('+rgbNum1+','+rgbNum2+','+rgbNum3+')')
//     }
//     return arr
// }
//  console.log(arrayOfRgbColors())
 


// 5- Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.

// function convertHexaToRgb(){
//     let hexNumber = '#aabbcc'
//     let rgbNum1= hexNumber.slice(1,3)
//     let rgbNum2= hexNumber.slice(3,5)
//     let rgbNum3= hexNumber.slice(5,7)
//     return `rgb(${parseInt(rgbNum1,16)}, ${parseInt(rgbNum2,16)},${parseInt(rgbNum3,16)})`

// }
// console.log(convertHexaToRgb())

// 6- Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

// function convertRgbToHexa(){
//     let getHexnumber1 = 255
//     let getHexnumber2 = 255
//     let getHexnumber3 = 255
    
//     return `#${getHexnumber1.toString(16)}${getHexnumber2.toString(16)}${getHexnumber3.toString(16)}`
// }
//  console.log(convertRgbToHexa())

// 7- Write a function generateColors which can generate any number of hexa or rgb colors.

// function generateColors(string,num){
//     let arr = []
//     if (string == 'hexa'){
//             let getHexnumber1 = Math.floor(Math.random()*256)
//             let getHexnumber2 = Math.floor(Math.random()*256)
//             let getHexnumber3 = Math.floor(Math.random()*256)
//             for (let index = 1; index <=num; index++) {
//                 arr.push('#'+getHexnumber1.toString(16)+getHexnumber2.toString(16)+getHexnumber3.toString(16))
                
//             }
//     }else if(string == 'rgb'){
//         for (let i = 1; i <=num; i++) {
//             let rgbNum1 = Math.floor(Math.random()*256)
//             let rgbNum2 = Math.floor(Math.random()*256)
//             let rgbNum3 = Math.floor(Math.random()*256)
//             arr.push('rgb('+rgbNum1+','+rgbNum2+','+rgbNum3+')')
//         }

//     }
//     return arr
// }
// console.log(generateColors('hexa',3))
// console.log(generateColors('rgb',2))

// 8- Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

// function shuffleArray(arr){
//     arr = [1,2,3,4,5].sort(() => Math.random() - 0.5)
//     return arr
// }
// console.log(shuffleArray())



// 9- Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

// function factorial(n){
//     if(n==0){
//         return 1
//     }
//     return (n != 1) ? n *factorial(n - 1) : 1
// }
// console.log(factorial(5))

// 10- Call your function isEmpty, it takes a parameter and it checks if it is empty or not

//  function isEmpty(check){
//    if(check == ''||check == null ||check == undefined){
//     console.log('it is empty')
//    }else{
//     console.log('it is not empty')
//    }
//    return check
//  }
// console.log(isEmpty())
// console.log(isEmpty(1))

// 11- Call your function sum, it takes any number of arguments and it returns the sum.

// function sum(...args){
//     let sum = 0
    // for (let index = 0; index < args.length; index++) {
    //     sum += args[index];
    // }
//     return sum
// }

// console.log(sum(74,3,7,8))

// 12- Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.

// function sum(...args){
//     let sum = 0
//     let arr = []
//     for (let i = 0; i < args.length; i++) {
//         if(typeof args[i]== 'number'){
//             arr.push(args[i])
//             sum +=arr[i]
//         }else{
//             console.log('the element has to be a number')
//         }
//     }
//    return sum
// }
// console.log(sum(1,2,3,4,20))

// 13- Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.

// function average(...args){
//     let average = 0
//     let sum = 0
//     let arr = []
//     for (let i = 0; i < args.length; i++) {
//         if(typeof args[i]== 'number'){
//             arr.push(args[i])
//             sum +=arr[i]
//             average = (sum/args.length).toFixed(1)
//         }else{
//             console.log('the element has to be a number')
//         }
//     }
//    return average
// }
// console.log(average(1,2,3,4,20,23,'a',35,45,{},[]))
// console.log(average(1,2,3,4,20,23))

// 14- Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.

// 1. Solution

// const modifyArray = args => {
//     let arr = [...new Set(args)]
//     let check = arr.length
//     if(check>=5){
//         arr[4] = arr[4].toUpperCase()
//     }else if(check<5){
//         return 'item not found'
//     }

//     return arr 
// }

// 2. Solution

// function modifyArray(args){
//     let arr = [...new Set(args)]
//     let check = arr.length
//     if(check>=5){
//         arr[4] = arr[4].toUpperCase()
//     }else if(check<5){
//         return 'item not found'
//     }

//     return arr
// }

// console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']))
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']))
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']))

// 15- Write a function called isPrime, which checks if a number is prime number.

// function isPrime(n){
//     let sqrt = Math.sqrt(n)
//     if( n <= 1) return 'n can not less than 2'
//     for (let index = 2; index <= sqrt; index++){
//         if( n%index == 0) return `${n} is not a prime number`
//     }
//     return `${n} is a prime number`
// }

// console.log(isPrime(5))

// 16- Write a functions which checks if all items are unique in the array.

// function unique(...args){
//     let arr = []
//     arr = args
//     for (const iterator of arr) {
//         if(iterator == iterator){
//             return 'items are not unique'
//         }
//     }
//     return arr
// }
// console.log(unique(1,2,3,1,5,6,2))


// 17- Write a function which checks if all the items of the array are the same data type.

// function dataType(...args){

//     return new Set(args.map( item => typeof item )).size <= 1  
// }

// console.log(dataType(1,2,3))
// console.log(dataType('a',[], true,))

// 18- JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.

function isValidVariable(){
    return String.
}
console.log(isValidVariable())

// 19- Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.

// function sevenRandomNumbers(){
//     let arr = [0,1,2,3,4,5,6,7,8,9].sort(() => Math.random() - 0.5)
//     let newArr = arr.slice(0,7)
//     return newArr   
   
// }

// console.log(sevenRandomNumbers())

// 20- Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array

// function reverseCountries(...args){
//     let arr = args
//     arr.reverse
//     return arr
// }

// console.log(reverseCountries('Albania','Bolivia','Canada','Denmark','Ethiopia'))
