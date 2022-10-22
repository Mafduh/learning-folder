// change everything below to the newer Javascript!

// let + const
let a = 'test';
const b = true;
const c = 789;
a = 'test2';
// read matt stop playing dumn your not 

// Destructuring
const person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

const { firstName, lastName, age, eyeColor } = person;
// good job 

// Object properties
const a = 'test';
const b = true;
const c = 789;

const okObj = {a, b, c};
// Make it on line or two base on how many and cuteness level be simplistic


// Template strings
const message = `Hello ${firstName} have I met you before? I think we met in ${city}. last summer no???`;
// this is a const because the message isnt changing the variables place in ${} are 

// default arguments
// default age to 10;
const isValidAge = (age = 10) => age;
// you can also do this with arrow functions

// Symbol
// Create a symbol: "This is my first Symbol"
const sym = Symbol('This is my first Symbol');
// everthing isnt a let nigga damn i didnt even change

// Arrow functions
const whereAmI = (username, location) => {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}
// you still need to use curly brackets they aren't that special 