class Person {
    constructor(name = 'anonymous',age = 0){
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        return `hi! I am ${this.name}.`;
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old`;
    }
}

class Traveller extends Person{
    constructor(name,age,homeLocation){
        super(name,age);
        this.homeLocation = homeLocation;
    }
    hasHomeLocation(){
        return !!this.homeLocation;
    }
    getGreeting(){
        let greeting = super.getGreeting();
        //if homeLocation is not set it will be undefined so negating it twice gives false
        if(this.hasHomeLocation()){ 
            greeting += ` I am visiting from ${this.homeLocation}.`; 
        }
        return greeting;
    }
}

const me = new Traveller('Sagar',21,'Delhi');
console.log(me.getGreeting());

const other = new Traveller();
console.log(other.getGreeting());