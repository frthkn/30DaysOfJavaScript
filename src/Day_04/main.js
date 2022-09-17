// Exercises: Level 1

// 1- Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.


    // Enter your age: 30
    // You are old enough to drive.

    // Enter your age:15
    // You are left with 3 years to drive.

    // let checkAgeForDrive = parseInt(prompt('Enter your age: ', 'Your age'))
    // if(checkAgeForDrive >=18) {
    //     console.log('Your age is '+checkAgeForDrive+' and you are old enough to drive.')
    // }else{
    //     let calcAgeForDrive = 18-checkAgeForDrive
    //     console.log('You are left with ' + calcAgeForDrive + ' years to drive.')
    // }

// 2- Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
    
    // Enter your age: 30
    // You are 5 years older than me.
    
    // let getAgeUsers = parseInt(prompt('Enter your age: ', 'Your age'))
    // let myAge = 34
    // if (getAgeUsers > myAge) {
    //     let calcGraterAges = getAgeUsers-myAge
    //     console.log('You are ' + calcGraterAges+' years older than me.')

    // }else if (getAgeUsers < myAge) {
    //     let calcLessAges = myAge-getAgeUsers
    //     console.log('You are ' + calcLessAges+' years younger than me.')
    // }else (getAgeUsers == myAge) {
    //     console.log('We are same age.')
    // }
    
// 3- If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways 
    // using if else 
    
    //  let a = 4
    //  let b = 3
    // if(a > b) {
    //     console.log('a is greater than b')
    // }else {
    //     console.log('a is less than b')
    // }

    // ternary operator

    // let compareAB = a>b ?'a is greater than b':'a is less than b'
    // console.log(compareAB)

    

// 4- Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?


    // Enter a number: 2
    // 2 is an even number

    // Enter a number: 9
    // 9 is is an odd number.

    // let getNumber = parseInt(prompt('Enter a number: ', 'Number like these: 0, 1, 23, 35 etc'))
    // let divideNumber = (getNumber)%2
    // if(divideNumber == 0) {
    //     console.log(getNumber + ' is even number')
    // }else {
    //     console.log(getNumber + ' is an odd number')
    // }

// Exercises: Level 2

// 1- Write a code which can give grades to students according to theirs scores:
        // 80-100, A
        // 70-79, B
        // 60-69, C
        // 50-59, D
        // 0-49, F

        // let grades = prompt('Enter your grades: ','Grade is between 0-100')
        // if(grades >= 80) {
        //     console.log('Your score is A')
        // }else if(grades >=70 && grades < 80) {
        //     console.log('Your score is B')
        // }else if(grades >=60 && grades < 70){
        //     console.log('Your score is C')
        
        // }else if(grades >=50 && grades < 60){
        //     console.log('Your score is D')
        // }else{
        //     console.log('Your score is F')
        
        // }

// 2- Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
        // September, October or November, the season is Autumn.
        // December, January or February, the season is Winter.
        // March, April or May, the season is Spring
        // June, July or August, the season is Summer

        // let season = prompt('Enter month name: ','Months')
        // switch (season) {
        //     case 'September':
        //     case 'October' :
        //     case 'November' :
        //         console.log('The season is Autumn')
        //         break;
        //     case 'December' :
        //     case 'January' :
        //     case 'February' :
        //         console.log('The season is Winter')
        //         break;
        //     case 'March' :
        //     case 'April' :
        //     case 'May' :
        //         console.log('The season is Spring')
        //         break;
        //     default :
        //         console.log('The season is Summer')
                
        // }
// 3- Check if a day is weekend day or a working day. Your script will take day as an input.

    // What is the day  today? Saturday
    // Saturday is a weekend.

    // What is the day today? saturDaY
    // Saturday is a weekend.

    // What is the day today? Friday
    // Friday is a working day.

    // What is the day today? FrIDAy
    // Friday is a working day.

    // let getDay = prompt('Enter today name: ', 'Days')
    // switch(getDay) {
    //     case 'Monday':
    //     case 'Tuesday':
    //     case 'Wednesday':
    //     case 'Thursday':
    //     case 'Friday' :
    //         console.log(getDay + ' is a working day')
    //         break;
    //     case 'Saturday':
    //     case 'Sunday':
    //         console.log(getDay + ' is a weekend')
    //         break;
        
    // }


// Exercises: Level 3

// 1- Write a program which tells the number of days in a month.

//   Enter a month: January
//   January has 31 days.

//   Enter a month: JANUARY
//   January has 31 day

//   Enter a month: February
//   February has 28 days.

//   Enter a month: FEbruary
//   February has 28 days.



const getDaysInMonth = (month) => {
    return new Date(0, month, 0).getDate();
};

let getInput = prompt('Enter a month', ' month name')



let months = ["January","February","March","April","May","June","July",
"August","September","October","November","December"]

let getNames = months.forEach((item, index, arr) =>{
    if(getInput == item ) {
        console.log('The '+getInput+' has '+getDaysInMonth(index+1)+' days')
    }
    
})











