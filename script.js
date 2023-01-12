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

const diceRoll = (numberOfRolls = 0) => {
  let collectedRolls = [];
  for (i = 0; i < numberOfRolls; i++) {
    let rollDice = Math.floor(Math.random() * 6) + 1;
    collectedRolls.push(rollDice);
  }
  return collectedRolls;
};
// console.log(diceRoll(7));

console.log(diceRoll(8));
