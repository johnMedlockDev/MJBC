const numbers = [20, 21, 22, 23, 24, 25, 26, 27];

const words = ["asap", "byob", "rsvp", "diy"];

// numbers.forEach(function(num) {
//   console.log(num);
// });
// loops over each item in the array

function printTriple(n) {
  console.log(n * 3);
}

// numbers.forEach(printTriple);
// passes each element to to the functions
// printTriple(20);
// printTriple(21);
// printTriple(22);

const doubles = numbers.map(function(num) {
  return num * 2;
});
// returns applies a funtion to each element of array and returns a result in place
const numDetail = numbers.map(function(n) {
  return {
    value: n,
    isEven: n % 2 === 0
  };
});

// console.log(doubles);
// console.log(numDetail);

const abbrevs = words.map(function(word) {
  // map returns a new array
  // callback is executed on each element of array
  // return value constructs new array.
  return word
    .toUpperCase()
    .split("")
    .join(".");
});
// console.log(abbrevs);

const square = x => x * x;

const sum = (x, y) => x + y;

// console.log(sum(5, 7));

let movies = [
  "The Fantastic Mr. Fox",
  "Mr. and Mr. Smith",
  "Mrs. Doubtfire",
  "Mr. Deeds"
];

let movie = movies.find(movie => {
  return movie.includes("Mrs.");
});

// console.log(movie);
// returns first value that meets includes criteria
// good for looking for ids

const nums = [34, 35, 67, 54, 109, 102, 32, 9];

const odds = nums.filter(n => n % 2 === 1);
// filter is a test function //  boolean value // if true it add the values to a array

// console.log(odds);

const words2 = ["dog", "dig", "log", "bag", "wag"];

const all3Lets = words2.every(word => word.length === 3);

// console.log(all3Lets);
// if every ele in array meets criteria return true else false

const someStartWithD = words2.some(word => word[0] === "d");
// console.log(someStartWithD);
// if some eles in arr return true => return true

const sorted = nums.sort();

console.log(sorted);
// default converts to string
const sortedWorking = nums.sort((a, b) => a - b);

// console.log(sortedWorking);
// sorts the way you want it too /// the Sreverse sorts decending
// sort mutates the array

const reduceArr = [3, 5, 7, 9, 11];
// console.log(
//   reduceArr.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;[]
//   })
// );
const grades = [87, 64, 96, 92, 88, 99, 73, 70];

const maxGrade = grades.reduce((max, cVal) => (cVal > max ? cVal : max));
console.log(maxGrade);

//  max cval return
//  87  64    87
//  86  96    96
// reduce loops over the whole array comparing two values and returns a value // the returned value is stored in memory

const votes = ["y", "n", "n", "y", "n", "n", "y", "n", "n", "n", "y"];

const results = votes.reduce((tally, val) => {
  if (tally[val]) {
    tally[val]++;
  } else {
    tally[val] = 1;
  }
  return tally;
}, {});

console.log(results);
