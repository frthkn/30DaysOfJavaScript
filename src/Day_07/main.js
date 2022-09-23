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

// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

// showDateTime()
// 08/01/2020 04:08

// Declare a function name swapValues. This function swaps value of x to y.

// swapValues(3, 4) // x => 4, y=>3
// swapValues(4, 5) // x = 5, y = 4

// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

// console.log(reverseArray([1, 2, 3, 4, 5]))
// //[5, 4, 3, 2, 1]
// console.log(reverseArray(['A', 'B', 'C']))
// //['C', 'B', 'A']

// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

// Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

// Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

// Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

// evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.

// Write a function which takes any number of arguments and return the sum of the arguments

// sum(1, 2, 3) // -> 6
// sum(1, 2, 3, 4) // -> 10

// Writ a function which generates a randomUserIp.

// Write a function which generates a randomMacAddress

// Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

// console.log(randomHexaNumberGenerator());
// '#ee33df'

// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

// console.log(userIdGenerator());
// 41XTDbE
