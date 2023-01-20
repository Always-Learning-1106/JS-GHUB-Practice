"use strict";
// function trying(a) {
//   let b = a + 2;
//   return b;
// } ///ALWAYS return something from a function otherwise get undefined behavior
// let testing = trying(-1);

// switch (testing) {
//   case 1:
//     console.log(`trying = -1`);
//     break;
//   case 2:
//     console.log(`trying = 0`);
//     break;
//   case 3:
//     console.log(`trying = 1`);
//     break;
//   default:
//     console.log(`I don't know anything`);
// }
//  switch(the case answer goes here){
// case possible answer:
//   do something
// break
//case 2:

//dont forget to add default
// }
/*
let converter = function convert(x) {
  switch (typeof x) {
    case "number":
      return `${x.toString()} was a number, but now it is a string`;
    case "string":
      return `"${x} is a string"`;

    default:
      return `x has a boolean value of ${!!x}`;
  }
};
// console.log(converter("false"));
const arrayPractice = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evens = arrayPractice.filter((number) => number % 2 === 0);

// console.log(evens);

let squared = arrayPractice.map((x) => x ** 2);
// console.log(squared);

let addOneToEachArrayEl = arrayPractice.map((v, i, a) => {
  return (a[i] = v + 1);
});

// console.log(addOneToEachArrayEl);
const strings = ["aa", "bbb", "c", "dddd", "eeeeeeeeeeee", "fff", "ggggg"];
const longestString = strings.map((string) => string.length);

// console.log(longestString);

const arrOfObj = [
  { a: 0, b: 2 },
  { a: 6, b: 1 },
  { a: 9, c: 2 },
];
const key = "a";
let reducedArrOfObj = arrOfObj.reduce((acc, obj) => {
  acc += obj[key];
  return acc;
}, 0);
// console.log(reducedArrOfObj);
const arrOfObj2 = [
  { a: 0, b: 2 },
  { a: 6, b: 1 },
  { a: 9, c: 2 },
];
// console.log(arrOfObj2[2]["a"]);
const a = [12, 3, 45, 67];
const adding = a.reduce((acc, b) => (acc += b));
// console.log(adding);
const timeTwo = a.map((v) => v * 2);
// console.log(timeTwo);
*/
/*
function printArray(a) {
  let len = a.length,
    i = 0;
  if (len === 0) {
    console.log("Empty Array");
  } else {
    do {
      console.log(a[i]);
    } while (++i < len);
  }
}
*/
// // printArray(["a", 2, 5, 6, 7, 8]);
// function tail(o) {
//   for (; o.next; o = o.next) {
//     return o;
//   }
// }
/*
// console.log(tail({ a: 1, b: 2 }));
const mySet = new Set();
mySet.add(1);
mySet.add(2);
// console.log(mySet.has(2));
const myMap = new Map();
myMap.set("name", "John");
myMap.set("age", 30);
// console.log(myMap);

let data = [1, 2, 3, 4, 5, 6, 7, 8, 9],
  sum = 0;
for (let element of data) {
  sum += element;
}
// console.log(sum);
let o = { x: 1, y: 2, z: 3 };
let values = 0;
let keys = "";
for (let [k, v] of Object.entries(o)) {
  values += v;
  keys += k;
}
// console.log(keys);
// console.log(values);
let frequency = {};
for (let letter of "mississippi") {
  if (frequency[letter]) {
    frequency[letter]++;
  } else {
    frequency[letter] = 1;
  }
  // debugger;
}
// console.log(frequency);
*/

/*
let text = "Na na na na na na na na Batman!";
let wordSet = new Set(text.split(" "));
console.log(wordSet);
let unique = [];
for (let word of wordSet) {
  unique.push(word);
}
console.log(unique);
let m = new Map([[1, "one"]]);
console.log(m);
for (let [k, v] of m) {
  console.log(k);
  console.log(v);
}
async function printStream(stream) {
  for await (let chunk of stream) {
    console.log(chunk);
  }
}
*/
/*
let o = { x: 1, y: 2, z: 3 };
let a = [],
  i = 0;
for (a[i++] in o);
console.log(a); ////output = ['x', 'y', 'z']

for (let i in a) {
  console.log(i);
}
*/

/*
//Closures
const first = () => {
  const greet = "Hi";
  const second = () => {
    alert(greet);
  };
  return second;
};

const newFunc = first();
// newFunc();

// Hidden classes
function Animal(x, y) {
  this.x = x;
  this.y = y;
}

const obj1 = new Animal(1, 2);
const obj2 = new Animal(3, 4);
obj1.a = 30;
obj1.b = 100;
obj2.b = 30;
obj2.a = 100;
*/
/*
//call stack + memory heap
const number = 610; // allocate memory for number
const string = "some text"; // allocate memory for a string
const human = {
  // allocate memory for an object ans it's values.
  first: "john",
  last: "smith",
};
// JS engine takes control of where each variable is stored
function subtractTwo(number) {
  return number - 2;
}
function calculate() {
  const sumTotal = 5 + 6;
  ``;
  return subtractTwo(sumTotal);
}
// calculate(); // first in last out call stack progression
//calculate will be pushed to the top of the stack and run whatever it does. After it runs it will be removed from the stack but remains in memory heap
*/

// function funcName() {
//   console.log("ugh...you again...");
//   console.log("for the last time..");
//   console.log("leave me alone".toUpperCase());
// }
// console.log(funcName());

// iterating and Math usage
// function rollDie() {
//   let roll = Math.floor(Math.random() * 6) + 1;
//   console.log(`Rolled ${roll}`);
// }

// function throwDice(count = 6) {
//   for (i = 0; i < count; i++) {
//     rollDie();
//   }
// }
// throwDice();
/*
//USING ...args and built in arguments()
function sumAndAvg(...args) {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  let average = total / args.length;
  return { sum: total, average: average };
}
console.log(sumAndAvg(3, 4, 5, 6, 89, 3));

function sumAndAvg() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  let average = total / arguments.length;
  return { sum: total, average: average };
}

console.log(sumAndAvg(10, 10, 10));
*/
// function greet(nickname) {
//   console.log(`Hi, ${nickname}!`);
// }
// greet("Glenn");

// let roll = Math.floor(Math.random() + 1);
/*
let collectedRolls = [];
const diceRoll = (numberOfRolls = 0) => {
  for (i = 0; i < numberOfRolls; i++) {
    let rollDice = Math.floor(Math.random() * 6) + 1;
    collectedRolls.push(rollDice);
  }
  return collectedRolls;
};
// console.log(diceRoll(7));

diceRoll(1);

console.log(collectedRolls);
*/
// let square = (num = 0) => num * num;
// console.log(square());

// function divide(x = 0, y = 1) {
//   return x / y;
// }
// console.log(divide(5, 100));
/*
let validation;
const isValid = (username, password) => {
  if (typeof username === "string" && typeof password === "string") {
    validation =
      password.length <= 7 || password.includes(" ") || username === password
        ? false
        : true;
  } else {
    validation = `Please enter username and password as a string. Make sure password is at least 8 characters long, has no spaces, and is not the same as the userName`;
  }
  return validation;
};
*/
// console.log(isValid("3213532f", "3213532f"));

//Recursion*************************
/*
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(5)); // Output: 120

function findValue(arr, value, index) {
  if (index === arr.length) {
    return -1;
  } else if (arr[index] === value) {
    return index;
  } else {
    return findValue(arr, value, index + 1);
  }
}
console.log(findValue([1, 2, 3, 4, 5], 3, 0)); // Output: 2
*/
/*
function reverseString(str) {
  return str === "" ? "" : reverseString(str.substr(1)) + str.charAt(0);
}
// debugger;
console.log(reverseString("I am a butterfly"));
console.log(4);
*/

// let test = function factorial(n) {
//   if (n <= 1) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// };

// console.log(test(10));
// debugger;
//The function values are stored in the call stack while a recursive function is being called. Each time the function is called, a new frame is added to the stack with the current function's values, and each time the function returns, the top frame is removed from the stack. This process continues until the base case is reached, at which point the function values are no longer stored in the call stack.
//the call stack returns the values: it is LIFO (Last In First Out) data structure, which means the last function call that was added to the stack is the first one to be removed.
// Each time a function is called, a new frame is added to the top of the call stack, and each time a function returns, the top frame is removed from the stack. So it works in a way that the last function call that was added to the stack is the first one to be removed.
/*
function logger() {
  console.log("My name is Tim");
}
// calling, running, or invoking all mean same thing
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(6, 3);
console.log(appleJuice);

const str = "Where is waldo?";

const strReversed = str.split("").reverse().join("", "@email.com");
console.log(strReversed);
let originalText = "This is an example of text replacement";

// Split the text into a list of substrings using space as the delimiter
let textList = originalText.split(" ");

// Replace the second substring with the new text
textList[textList.length - 1] = "editing";

// Use the join method to concatenate the substrings with space as the separator
let newText = textList.join(" ");

console.log(newText);
*/

/*
// function declaration
function calcAge1(birthYear) {
  const extractingYear = new Date();
  const year = extractingYear.getFullYear();
  return year - birthYear;
}

const age1 = calcAge1(1993);
//function expression
const calcAge2 = function (birthYear) {
  const extractingYear = new Date();
  const year = extractingYear.getFullYear();
  return year - birthYear;
};
const age2 = calcAge2(1999);
console.log(age1, age2);
const calcAge3 = (birthYear) => 2023 - birthYear;
const age3 = calcAge3(1987);
console.log(age3);

const yearsUntilRetirement = (birthYear, retirementAge) => {
  const extractingYear = new Date();
  const year = extractingYear.getFullYear();
  const age = year - birthYear;
  const retiring = retirementAge - age;
  return retiring;
};
const yearsOfWorkLeft = yearsUntilRetirement(1983, 58);
console.log(yearsOfWorkLeft);
*/
/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} apple slices, and ${orangePieces} orange slices`;
  return juice;
}
console.log(fruitProcessor(2, 3));

const getFullYear = function () {
  const extractingYear = new Date();
  const year = extractingYear.getFullYear();
  return year;
};
const getAge = function (birthYear) {
  return getFullYear() - birthYear;
};
const desiredRetirementAgeAndYearBorn = function (getRetirementAge, age) {
  return getRetirementAge - getAge(age);
};
const lisaRetirement = desiredRetirementAgeAndYearBorn(98, 1983);
const glennRetirement = desiredRetirementAgeAndYearBorn(45, 1983);
console.log(lisaRetirement);
console.log(glennRetirement);
// const yearsOfWorkLeft = yearsUntilRetirement(getAge(37), getRetirementAge(90));
// console.log(yearsOfWorkLeft);
*/
// const dolphins = [44, 23, 71];
// const koalas = [65, 54, 49];
/*
const dolphins = [85, 54, 41];
const koalas = [23, 34, 27];

const calcAvg = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};
const dolphinAvg = calcAvg(dolphins[0], dolphins[1], dolphins[2]);
const koalaAvg = calcAvg(koalas[0], koalas[1], koalas[2]);
const checkWinner = function (dolphinAvg, koalaAvg) {
  if (dolphinAvg / 2 >= koalaAvg) {
    return `The Dolphins win with a score of ${dolphinAvg} to the Koalas ${koalaAvg}`;
  } else if (koalaAvg / 2 >= dolphinAvg) {
    return `The Koalas win with a score of ${koalaAvg} to the Dolphins ${dolphinAvg}`;
  } else {
    return `No one wins`;
  }
};
console.log(checkWinner(200, 100));
// in order for a team to win their average score must double their opponents average score
*/

// const friends = ["mike", "sally", "julio", "bob"];
// //Add elements to array
// // friends.push("amanda");
// // friends.unshift();
// //remove elements from array
// // friends.pop();
// // friends.shift();
// // console.log(newLength);
// console.log(friends.indexOf("sally"));
// console.log(friends);
/*
const jonas = {
  firstName: "jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

// console.log(jonas);
// console.log(jonas.lastName);
const nameKey = "Name";
// console.log(jonas["lastName"]);
// console.log(jonas[`last${nameKey}`]);

const interestedIn = String(
  prompt(
    `what do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends`
  )
);

const response = (reply) => {
  if (reply === "firstName" || reply === "lastName") {
    "firstName"
      ? console.log(jonas[`first${nameKey}`])
      : console.log(jonas[`last${nameKey}`]);
  } else if (reply === "age") {
    console.log(jonas["age"]);
  } else if (reply === "job") {
    console.log(jonas.job);
  } else if (reply === "friends") {
    console.log(jonas["friends"]);
  } else {
    console.log(`Please enter a legal value`);
  }
};

response(interestedIn);
//
*/
/*
const jonas = {
  firstName: "Jonas",
  lastName: "marley",
  birthYear: 1991,
  job: "Teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: false,
  licenseYesOrNo: function () {
    const licenseStatus = this.hasDriversLicense
      ? "yes, jonas has a license"
      : "no, jonas is living without a license";
    return licenseStatus;
  },
  getYear: Number(new Date().getFullYear()),

  calcAge: function () {
    this.age = this.getYear - this.birthYear;
    return this.age;
  },
};
console.log(jonas.friends[0]);
console.log(jonas["birthYear"]);
// console.log(jonas.calcAge());
jonas.calcAge();
// const description = () => {
//   jonas.hasDriversLicense ? "a" : "no";
// };
console.log(jonas.licenseYesOrNo());
console.log(
  `${jonas.firstName} is a ${jonas.age} year old ${
    jonas["job"]
  } and ${jonas.licenseYesOrNo()} to drive`
);
// methods work for objects better than regular objects because they are reusable
*/

// const arr = [1, 2, 3, 4, 5];
// const [x, c, v, b, t] = arr;
// console.log(x, c, v, b, t);
/*
const restaurant = {
  name: "Classico Italiano",
  location: "Vivo st firenze italy",
  categories: ["italian", "pizza", "veggies", "organic"],
  starterMenu: ["garlic bread", "pasta", "chips", "watermelon"],
  mainMenu: ["lasagna", "pizza", "pasta"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

let [first, , , second] = restaurant.categories;
console.log(first, second);
[second, first] = [first, second];
console.log(first, second);
console.log(restaurant.order(0, 0));
const [starter, main] = restaurant.order(1, 1);
console.log(starter, main);

const arr = [1, 2, [3, 4]];

const [a, , [b, c]] = arr;
console.log(a, c, b);
*/

// Data needed for a later exercise
// const flights =
//   "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// // Data needed for first part of the section
// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//   orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
//     console.log(
//       `order received, ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterIndex]} will be delivered at ${time} to ${address}`
//     );
//   },
// };

// restaurant.orderDelivery({
//   time: "22:30",
//   address: "via del sole, 21",
//   mainIndex: 2,
//   starterIndex: 2,
// });
// for (let i = 0; i < flights.length; i++) {
//   console.log(flights[i]);
// }

//When destructuring objects just use the name of the object exactly as it is named in the object you're taking it from and make sure to use brackets. Order of objects doesnt matter  like it does with arrays
// const { name, openingHours, categories } = restaurant;
// // console.log(name);
// // console.log(openingHours["thu"]);
// // console.log(categories[0]);

// ///***********changing object names with destructurting and using default values*/
// /*
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);
// const { menu = [], starterMenu: starter = [] } = restaurant;
// console.log(menu, starter);
// /*MUTATING VARIABLES FROM AN ABJECT WHEN SOME VARIABLES IN CODE ABOVE ALREADY HAVE SAME NAME AS OBJECT VARIABLES*/
// let a = 111;
// let b = 124;
// const obj = { a: 23, b: 7, c: 19 };
// //here we are trying to change the value of a and b to the value in the object. so a = 111 we want a = 23 and b = 124 we want b = 7
// ({ a, b } = obj); // must wrap it in shift+9 shift+0 ()braces
// console.log(a, b);
/*
const {
  openingHours: {
    fri: { open, close },
  },
} = restaurant;
console.log(open, close);

const {
  openingHours: {
    sat: { open: open2, close: close2 }, //have to change name to access both fri and saturday because variables must have different names.
  },
} = restaurant;

const {
  openingHours: {
    thu: { open: open3, close: close3 },
  },
} = restaurant;
console.log(restaurant.openingHours.sat);
console.log(open2, close2);
console.log(open3, close3);
*/

// const flights =
//   "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//   orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
//     // console.log(
//     //   `order received, ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterIndex]} will be delivered at ${time} to ${address}`
//     // );
//   },
// };

// restaurant.orderDelivery({
//   time: "22:30",
//   address: "via del sole, 21",
//   mainIndex: 2,
//   starterIndex: 2,
// });

// let hello = 0 || 18;
// console.log(hello);
// hello = 0 ?? 19;
// const goodbye = 0 && "glenn";
// console.log(goodbye);
// const rest1 = { name: "Capri", numGuests: 0 };
// const rest2 = { name: "La piazza", owner: "Giovanni Rossi" };

// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;
// ///OR assignment operator with nullish assignment operator
// rest1.numGuests ??= 40;
// rest2.numGuests ||= 40;
// // and opertator in this short circuting will assign a value to a variable if it is currently truthy
// rest1.owner &&= "<ANONYMOUS>";
// rest2.owner &&= "<ANONYMOUS>";
// console.log(rest1);
// console.log(rest2);

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels", "bob"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
//   favorite: function () {
//     this.odds.team1 < this.odds.team2
//       ? console.log(`team 1 is the favorite`)
//       : console.log(`team 2 is the favorite`);
//   },
// };
/* 
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:
1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
GOOD LUCK 😀
*/

// const players1 = [...game.players[0]];
// const players2 = [...game.players[1]];
// const [players1, players2] = game.players;
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);
// const allPlayers = [...players1, ...players2];
// const players1Final = [...players1, "Thiago", "Coutino", "Perisic"];
// // console.log(players1Final);
// const { team1, x: draw, team2 } = game.odds;
// const printGoals = function (...players) {
//   players.forEach((player, i) => {
//     i === 0
//       ? console.log(`${player} scored that makes ${i + 1} goal for the game`)
//       : console.log(`${player} scored that makes ${i + 1} goals for the game`);
//   });
// };

// console.log(team2);

// printGoals(...game.scored);
// console.log(game.odds);
// game.favorite();
// console.log(allPlayers);
// console.log(draw);
// team1 < team2 && console.log("team 1 is more likely to win");
// team1 > team2 && console.log("team 2 is more likely to win");
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// console.log(menu);
// for (let item of menu) {
//   console.log(item);
// }
// for (let item of menu.entries()) {
//   console.log(item);
// }
// console.log([...menu.entries()]);
// for (let [i, el] of menu.entries()) {
//   // let [index, menuItem] = item; /// same thing as putting the array brackets in for (***here***[i,el])
//   console.log(`${i + 1}: ${el} `);
// }

// const openingHours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],
//   // es6 enhanced object literals************* don't need to write openingHours = openingHours inside objects
//   openingHours,

//   orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
//     // console.log(
//     //   `order received, ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterIndex]} will be delivered at ${time} to ${address}`
//     // );
//   },
// };

// restaurant.orderDelivery({
//   time: "22:30",
//   address: "via del sole, 21",
//   mainIndex: 2,
//   starterIndex: 2,
// });
// console.log(restaurant);

// console.log(restaurant.openingHours?.tue?.open);
// const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// for (const day of days) {
//   const open = restaurant?.openingHours[day];
//   open ?? console.log(`****on ${day} We are closed****`);
//   open &&
//     console.log(
//       `on ${day} we open at ${open?.open} and we close at ${open?.close}`
//     );

//   // restaurant.openingHours[day];
// }
// console.log(restaurant.orderRisotto?.(1, 4) ?? `method does not exist`);
// const users = [{ name: "Hubert", email: "this@email.com" }];
// console.log(users[0]?.name ?? `User array empty`);
// console.log(users[0]?.watermelon ?? `User array empty`);
// const properties = Object.keys(openingHours);
// let openStr = `We are open on ${properties.length} days: `;
// for (const day of properties) {
//   openStr += `${day}, `;
//   // console.log(day);
// }
// // console.log(openStr);

// const values = Object.values(openingHours);
// // console.log(values);

// const entries = Object.entries(openingHours);
// // console.log(entries)
// for (const [key, value] of entries) {
//   console.log(key, value);
// }
// for (const [key, { open, close }] of entries) {
//   console.log(key, open, close);
// }
// output******************
// thu {open: 12, close: 22}
// fri {open: 11, close: 23}
// sat {open: 0, close: 24}
// thu 12 22
// fri 11 23
//sat 0 24
// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
/* 
Let's continue with our football betting app!
1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }
GOOD LUCK 😀
*/
/*
const scored = Object.entries(game.scored);
// console.log(scored);
for (const [goal, player] of scored) {
  console.log(`Goal ${Number(goal) + 1}: ${player}`);
}
const oddsAverage = Object.entries(game.odds);
console.log(oddsAverage);
let sum = 0;
let average = "";
for (const [team, odd] of oddsAverage) {
  sum += Number(odd);
  Number(average);
  average = sum / oddsAverage.length;
  if (team === "team1") {
    console.log(`Odds of victory ${game.team1}: ${odd}`);
  } else if (team === "x") {
    console.log(`Odds of draw ${odd}`);
  } else if (team === "team2") {
    console.log(`Odds of victory ${game.team2} ${odd}`);
  }
  // console.log(`${player}${}`)
}
console.log(`The average odds for both teams plus the draw odds is ${average}`);
const arrays = Object.entries(game.scored);
let goalsAdd = 0;
// const playerCollection = [];
// for (let [, two] of [...arrays]) {
//   playerCollection.push(two);
//   if (playerCollection.includes(two)) {
//     console.log(`${two} with ${goalsAdd++} goals`);
//   }
// }
// console.log(numGoals);
// const {
//   game: { scored: goalAmount },
// } = game["scored"];
// console.log(goalAmount);
*/
/*
const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);
console.log(ordersSet);
const myName = new Set("Glenn");
console.log(myName);
console.log(myName.size); // NOT LENGTH FOR SETS BUT SIZE ****************
console.log(ordersSet.has("Pizza"));
console.log(ordersSet.has("Glen"));
ordersSet.add("Garlic Bread");
ordersSet.add("Garlic Bread");
ordersSet.delete("Risotto");
// ordersSet.clear();
console.log(ordersSet);
for (const order of ordersSet) {
  console.log(order);
}
// example to remove duplicate values of arrays
const staff = ["waiter", "chef", "waiter", "manager", "chef", "waiter"];
const staffUnique = new Set(staff);
console.log(staffUnique);
const staff2 = [...staffUnique];
console.log(staff2);
*/
/*
const rest = new Map();
// rest.set("name", "Classico Italiano");
// rest.set(1, "Firenze, Italy");
// rest.set(2, "Lisbon, Portugal");

rest
  .set(2, "Lisbon, Portugal")
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", " Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "we are open")
  .set(false, "we are closed");
// console.log(rest.get(true));
// console.log(rest.get(false));
// console.log(rest.get("open"));
// console.log(rest.get("close"));

const time = 8;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));
console.log(rest.has("categories"));
const arr = [1, 2];
rest.set(arr, "Test");
rest.delete(2);
rest.set(document.querySelector("h1"), "Heading");
console.log(rest);
console.log(rest.size);
// rest.clear();
console.log(rest.get(arr));
*/
/*
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const question = new Map([
  ["question", "what is the best programming language in the world?"],
  [1, "JavaScript"],
  [2, "C"],
  [3, "Python"],
  [4, "Typescript"],
  ["correct", 1],
  [true, "Correct!"],
  [false, "Try again!"],
]);
console.log(openingHours);
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);
console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`${key}: ${value}`);
}
// const answer = Number(
//   prompt(`Your answer
// `)
// );

// if (answer === 1) {
//   console.log(`You're right ${question.get(1)} is the best!`);
// } else {
//   console.log(`${question.get(false)}`);
// }
// console.log(question.get(question.get("correct") === answer));
// 3;
// CONVERT MAP TO ARRAY***********************
console.log(...question);
console.log([...question.keys()]);
console.log([...question.values()]);
*/
// const recipes = [
//   { publisher: "101 Cookbooks" },
//   { publisher: "The Pioneer Woman" },
//   { publisher: "Closet Cooking" },
// ];

// console.log(recipes[2].publisher);
const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);
/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL
GOOD LUCK 😀
*/
// console.log(gameEvents.size);
// const events = [...new Set(gameEvents.values())];
// console.log(events);
// gameEvents.delete(64);
// console.log(gameEvents);

// const average = 90 / gameEvents.size;

// console.log(`An event happened, every ${average} minutes`);
// for (const [key, value] of [...gameEvents]) {
//   key <= 45
//     ? console.log(`[FIRST HALF] ${key}: ${value}`)
//     : console.log(`[SECOND HALF] ${key}: ${value}`);
// }
const airline = "TAP Air Portugal";
const plane = "A320";
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);
console.log("B737"[0]);
console.log(airline.length);
console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("portugal"));
console.log(airline.slice(0, 1));
console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));
console.log(airline.slice(-2));
console.log(airline.slice(1, -2));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  s === "B" || s === "E"
    ? console.log(`You got the middle seat`)
    : console.log(`you got lucky`);
};
checkMiddleSeat("11B");
checkMiddleSeat("12C");
checkMiddleSeat("34E");
checkMiddleSeat("34A");

console.log(airline.toUpperCase());
console.log(airline.toLowerCase());
const passenger = "JonAS";
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);
