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

// 2- Create a Dog and Cat child class from the Animal Class.

class Dog extends Animal {
    constructor(name, age, color, legs){
        super(name, age, color, legs)
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }
}



class Cat extends Animal {
    constructor(name, age, color, legs){
        super(name, age, color, legs)
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }
}

const dog1 = new Dog('John',5,'white',4)
const cat1 = new Cat('Sally',2,'black',4)
console.log(dog1)
console.log(cat1)