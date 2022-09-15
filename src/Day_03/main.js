// Day 3: Exercises

// Exercise: Level 1

// 1- Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

let variables1 = firstName = 'Hakan',
                lastName = 'FIRAT',
                country = 'Turkey',
                city = 'Ankara',
                age = 34,
                isMarried = true,
                thisYear = 2022
 console.log(firstName == lastName)
 console.log(firstName === lastName)
 console.log(firstName === isMarried)
 console.log(firstName === city)
 console.log(firstName === country)
 console.log(firstName === age)
 console.log(firstName === thisYear)
 console.log(age === thisYear)


// 2- Check if type of '10' is equal to 10

console.log('10' == 10)
console.log('10' === 10)

// 3- Check if parseInt('9.8') is equal to 10

console.log(parseInt(9.8) == 10)

// 4- Boolean value is either true or false.
    // a) Write three JavaScript statement which provide truthy value.
    
    let truthyValues =  isMarried = true,
                        isJsAvsome = true,
                        isOneNumber = true

    // b) Write three JavaScript statement which provide falsy value.
    let falsyValues =  isTwoNumber = false,
                        isTodaySunday = false,
                        isLightOn = false

// 5- Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
    
    // a) 4 > 3

    console.log(4>3) //true

    // b) 4 >= 3

    console.log(4 >= 3) // true

    // c) 4 < 3 

    console.log(4 < 3) //false

    // d) 4 <= 3

    console.log(4 <= 3) // false

    // f) 4 == 4

    console.log(4 == 4) // true

    // e) 4 === 4

    console.log(4 === 4) //true

    // g) 4 != 4

    console.log(4 != 4) // false

    // h) 4 !== 4

    console.log(4 !== 4) // false

    // i) 4 != '4'

    console.log(4 != '4') // false

    // k) 4 == '4'

    console.log(4 == '4') // true

    // l) 4 === '4'

    console.log(4 === '4') // false

    // m) Find the length of python and jargon and make a falsy comparison statement.

    console.log('python'.length != 'jargon'.length)

// 6- Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

    // 4 > 3 && 10 < 12

    console.log(4 > 3 && 10 < 12) // ture

    // 4 > 3 && 10 > 12

    console.log(4 > 3 && 10 > 12) //false

    // 4 > 3 || 10 < 12

    console.log(4 > 3 || 10 < 12) // true

    // 4 > 3 || 10 > 12

    console.log(4 > 3 || 10 > 12) // true

    // !(4 > 3)

    console.log(!(4 > 3)) // false

    // !(4 < 3)

    console.log(!(4 < 3)) //true

    // !(false)

    console.log(!(false)) // true

    // !(4 > 3 && 10 < 12)

    console.log(!(4 > 3 && 10 < 12)) // false

    // !(4 > 3 && 10 > 12)

    console.log(!(4 > 3 && 10 > 12)) // true

    // !(4 === '4')

    console.log(!(4 === '4')) // true

    // There is no 'on' in both dragon and python

    let sentence1 = 'dragon and python'
    
    let check1 = sentence1.match('on')
     ? 'Yes there are two words' : 'No there is nothing'

     console.log(check1)


// 7- Use the Date object to do the following activities


let times = new Date()

    // What is the year today?

    console.log(times.getFullYear()) //2022

    // What is the month today as a number?

    console.log(times.getMonth())

    // What is the date today?

    let times1 = Date.now()
    let today = new Date(times1)
    
    console.log(today)


    // What is the day today as a number?

    console.log(times.getDay())

    // What is the hours now?

    console.log(times.getHours())

    // What is the minutes now?

    console.log(times.getMinutes())

    // Find out the numbers of seconds elapsed from January 1, 1970 to now.

    console.log(times.valueOf())

// Exercises: Level 2

// 1- Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

// let base = prompt('Enter base: ')
// let height = prompt('Enter height: ')

// let calcOfTriangle = base * height * 0.5
// alert('The area of the triangle is: ' + calcOfTriangle)
// console.log(calcOfTriangle)

// 2- Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

// let sideA = prompt('Enter side a: ')
// let sideB = prompt('Enter side b: ')
// let sideC = prompt('Enter side c: ')
// let calcPerimeterOfTriangle = parseInt(sideA) + parseInt(sideB) + parseInt(sideC)

// alert('The perimeter of the triangle is: '+ calcPerimeterOfTriangle)

// console.log(typeof sideA)

// console.log(calcPerimeterOfTriangle)


// 3- Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

// let length = prompt('Enter length: ')
// let width = prompt('Enter width: ')
// let calcOfRectangle = 2*(parseInt(length)+parseInt(width))
// alert('Area of rectangle: '+ calcOfRectangle)
// console.log(calcOfRectangle)


// 4- Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

// let radius = prompt('Enter radius')
// let calcAreaOfCircle = (3.14*(parseInt(radius)**2))
// let calcCircumferenceOfCircle = (2*3.14*parseInt(radius))
// alert('The area of a circle is: ' + calcAreaOfCircle)
// alert('The circumference of a circle is: ' + calcCircumferenceOfCircle)

// 5- Calculate the slope, x-intercept and y-intercept of y = 2x -2

// let y,x
 y = '2*x-2'
// let getX = y.includes('x')
// getX == true
// ? console.log('This is slope: ' + y[0]): console.log('The slope is 0')

// 6- Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

let m, x1, x2, y1,y2
y1 = 2
y2 = 10
x1 = 2
x2 = 6
m = (y2-y1)/(x2-x1)

console.log('This is slope: '+m)


// 7- Compare the slope of above two questions.

// let compare = m/y[0]
// console.log('This is compare slope of two question: ' +compare) 

// 8- Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.


// 9- Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

// let getHours = prompt(' Enter hours: ')
// let getRatePerHour = prompt('Enter rate per hour: ')
// let calcEarn = getHours * getRatePerHour

// console.log('Your weekly earning is '+ calcEarn)

// 10- If the length of your name is greater than 7 say, your name is long else say your name is short.

// if(firstName.length > 7){
//     console.log('Your name is greater than 7.')
// }else {
//     console.log('Your name is short.')
// }

// 11- Compare your first name length and your family name length and you should get this output.


// if(firstName.length > lastName.length){
//      console.log('Your first name, '+ firstName+' is longer than your family name, '+lastName)
//  }else if (firstName.length == lastName.length) {
//     console.log('Your first name, '+ firstName+' is equal to your family name, '+lastName)
// }else{
//      console.log('Your first name, '+ firstName+' is less than your family name, '+lastName)
//  }


// 12- Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

// let myAge = 250
// let yourAge = 25
// let calcAges = myAge-yourAge
// console.log('I am '+calcAges+' years older than you.')

// 13- Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

// let getUserAge = prompt('Enter your birth year: ')
// let thisYearForAge = new Date()
// let checkUserAge = (thisYearForAge.getFullYear()-getUserAge)
// let remindAge = (18-checkUserAge)
// let howManyYearsAfter = checkUserAge-remindAge

// if(checkUserAge >= 18) {
//     console.log('You are '+ checkUserAge +' and you are old enough to drive')
// }else if (checkUserAge < 18) {

//     console.log('You are '+ checkUserAge+' You will be allowed to drive after '+howManyYearsAfter +' years.')
    
// } else {
//     console.log('Wrong answer')
    
// }

// 14- Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

//let getNumberOfYears = prompt('Enter number of years you live: ')
// let calcHumanLiveSeconds = getNumberOfYears*(60*60*24*365) 
// //alert('You lived ' + calcHumanLiveSeconds + ' seconds')
// console.log(calcHumanLiveSeconds)

// 15- Create a human readable time format using the Date time object


    // YYYY-MM-DD HH:mm

    // const dateTime = new Date().toISOString().substr(0, 16)
    // let changeT = dateTime.replace('T',' ')
    // console.log('Today is '+changeT)

    // DD-MM-YYYY HH:mm

    // const dateTime1 = new Date()
    // const  year = dateTime1.getFullYear(),
    //         month = dateTime1.getMonth(),
    //         day = dateTime1.getDay(),
    //         hour = dateTime1.getHours(),
    //         minute = dateTime1.getMinutes()

    // const firstDayTime = `${day}-${month}-${year} ${hour}:${minute}`
    // console.log(firstDayTime)
            

    // DD/MM/YYYY HH:mm
    // const firstDayTime2 = `${day}/${month}/${year} ${hour}:${minute}`
    // console.log(firstDayTime2)

// Exercises: Level 3

// 1- Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
    // YYY-MM-DD HH:mm eg. 2021-01-02 07:05

// const dateTime = new Date().toISOString().substr(0, 16)
// let changeT = dateTime.replace('T',' ')
// console.log('Today is '+changeT)

    

   
  

    


