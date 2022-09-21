//Solve these problems:

//#1 Create a one line function that adds adds two parameters
const arithmatic = (a) => (b) => a + b
// golden
//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3)
// 13 golden

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)
// 31 golden

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12)
// 17 golden

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)
// 12, 20
// this operations at once like the distrubutive property so all equal sums will be equal
// in this case all nums will be equal to 10 make this a argument of 10 + 1 + 5

//What are the two elements of a pure function?
// determination ,no side effects
