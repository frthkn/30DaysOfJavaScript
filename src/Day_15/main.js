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

// Exercises Level 1

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