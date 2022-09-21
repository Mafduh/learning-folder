// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
// the => is still a function so you have to name it and the define what the name is before manipulate
let user = username[];
let newUser = array.forEach(user => {
  user + "!";
});
// i will give benifit of doubt because you where overthinking 
// here are the steps to solve this 
// create a array 
let newArray = [];
array.forEach(user => {
let { username } = user
username = username + "!";
newArray.push(username);
});
// to see console log it 
// you cannot push directly to this array because there are objects so you have to either pick or add one.

//Create an array using map that has all the usernames with a "? to each of the usernames
const makeArray = array.map(user => {
      let { username } = user;
      username + '?';
})
console.log(makeArray)
//Filter the array to only include users who are on team: red
const filterArray = array.filter(colorR => {
      let { team } = colorR;
      colorR === "red"
})
console.log('filter',filterArray);
// wrong
const colorR = array.filter(user=> {
      return user.team === "red"
})
console.log('filter', colorR)
//Find out the total score of all users using reduce
const reduceArray = array.reduce((accumulator, num)=>{
  return accumulator + user.score;
},0);
console.log('reduce',reduceArray);
// almost your object is undefined change num to 0 rn your iterating the first of nothing
// (1), what is the value of i?
// iteration from first to last
// ANSWER the begining of the array
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	alert(num);
	return num * 2;
})
console.log(num, i);
// answer
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	return num * 2;
})
//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
// grab array
const answer = array.map(user => {
// set varible equal to array data
user.items = user.items.map(item => 
// loop the objects 
// push the ! at the end of the loop
{
  return item + "!"
});
// this is using map so you must return 
	return user;
})