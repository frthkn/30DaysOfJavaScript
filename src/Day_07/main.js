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

