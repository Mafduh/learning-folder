//Evaluate these:
//#1
[2] === [2] 
// true
{} === {} 
// false
//#2 what is the value of property a for each object.
const object1 = { a: 5 }; 
// 5
const object2 = object1; 
// 5
const object3 = object2; 
// 5
const object4 = { a: 5}; 
// 5
object1.a = 4;
// 4


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 
class Animal{
    constructor(name,type,color){
        this.name = name;
        this.type = type;
        this.color = color;
    }
    intro() {
        console.log(`Hi I am ${this.name}, and i am a ${this.type}`);
    }
}

class Mamal extends Animal {
    constructor(name,type,color){
        super(name,type,color);
    }
    whatcolor() {
        console.log(`${this.name} is ${this.color}`);
    }
}

const animal1 = new Mamal('Otis','cow','black n white');