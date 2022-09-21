// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);

// 
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

turtle = turtle.padStart(8);
rabbit = rabbit.padStart(8);

console.log(startLine);
console.log(turtle);
console.log(rabbit);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');
// 
'🐢======='
/* the second parameter is what you are padding the string with it is set as 
default to ' ' if the string is too long then it will be loop and cut of once
the first parameter is met*/



// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'

// 
Object.entries(obj).map(value => {
  return value.join(' ');
});


/*this is joining the key and the value together with a space*/   
                                \ 'my','name'   /                         
Object.entries(obj).map(value => value.join(" ")).join(' ')
                                               / 'my name' , 'is rudolf'\
/*this is joining the combined values together */  