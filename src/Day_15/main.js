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

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

class Statistics {
    constructor(count, sum, min, max, range, mean, median, mode,variance, standard_deviation,frequency_distribution){
        this.count = count
        this.sum =  sum
        this.min = min
        this.max = max
        this.range = range 
        this.mean = mean
        this.median = median
        this.mode = mode
        this.variance = variance
        this.standard_deviation = standard_deviation
        this.frequency_distribution = frequency_distribution

    }

    static getValues(){
        const count = ages.length
        const sum =  ages.reduce((h,f)=> h+f)
        const min = Math.min(...ages)
        const max = Math.max(...ages)
        const range = max-min
        const mean = Math.ceil(sum/count)
        const median = ages[Math.floor((ages.sort((k,l)=> k-l).length)/2)]
        const modeFind = ages.reduce((el, i) => {const cnt = el[i] = el[i] ?? 0; return {...el, [i]: cnt +1};},{})
        const mode = Object.entries(modeFind).sort((h,f)=> f[1]-h[1])
        const varianceSqrt = ages.map((item => Math.abs(item-(Math.round(sum/count)))*Math.abs(item-(Math.round(sum/count)))))
        const variance = varianceSqrt.reduce((m,n)=> (m+n))/varianceSqrt.length
        const standard_deviation = Math.sqrt(variance).toFixed(1)
        const percetForFreqDis = [...Object.values(mode).flatMap((i=> (i[1]*100)/25))]
        const frequencyDistribution = [...Object.entries(mode).flatMap((i=> parseInt(i[1])))]
        const frequency_distribution = []
        for (const key in percetForFreqDis,frequencyDistribution) {
            frequency_distribution.push([percetForFreqDis[key],frequencyDistribution[key]])
        }
        
        return {
            count, sum, min, max, range, mean, median, mode,variance, standard_deviation,frequency_distribution
        }
    }
}

// console.log(Statistics.getValues())


// 2- Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

class PersonAccount {
    constructor(firstName, lastName, incomes, expenses){
        this.firstName = firstName
        this.lastName = lastName
        this.incomes = incomes
        this.expenses = expenses
    }

    static totalIncome(){
        return this.incomes

    }
    set addIncome(incomes){
        this.incomes += incomes

    }
    get totalExpense(){

    }
    set addExpense(expenses){
        this.expenses += expenses

    }
    get accountInfo(){
        
        return `${this.firstName}, ${this.lastName}`

    }
    get accountBalance(){ 
        const balance =  totalIncome()-totalExpense
        return balance

    }
    
}
