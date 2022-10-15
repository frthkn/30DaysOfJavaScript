// Day 15

// Exercises Level 1

// 1- Create an Animal class. The class will have name, age, color, legs properties and create different methods

class Animal {
    constructor(name, age, color, legs){
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }
    
}

const dog = new Animal('John', 5,'white',4)
// console.log(dog)
const cat = new Animal('Sally', 2,'black',4)
//console.log(cat)


// 2- Create a Dog and Cat child class from the Animal Class.

class Dog extends Animal {
    constructor(name, age, color, legs){
        super(name, age, color, legs)
    }
    saySomething() {
        const  textDog = 'This is Dog of the animal class'
        return textDog
    }
    
   
}
const dog1 = new Dog('John',5,'white',4)
// console.log(dog1)
// console.log(dog1.saySomething())

class Cat extends Animal {
    constructor(name, age, color, legs){
        super(name, age, color, legs)
    }
    saySomething() {
        const textCat = 'This is Cat of the animal class'
        return textCat
    }
    
}


const cat1 = new Cat('Sally',2,'black',4)
// console.log(cat1)
// console.log(cat1.saySomething())

// Exercises Level 2

// 1- Override the method you create in Animal class


class Goat extends Animal {
    constructor(name, age, color, legs, breed){
        super(name, age, color, legs)
        this.breed = breed
    }
    saySomething() {
        const textGaot = 'This is Goat of the animal class'
        return textGaot
    }
    
}

const goat1 = new Goat('Amy', 3, 'blue', 4, 'Abaza')
// console.log(goat1)
// console.log(goat1.saySomething())

// Exercises Level 3

// 1- Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.

// 2- Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
