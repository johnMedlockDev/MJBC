let subreddits = ["soccer", "popheads", "cringe", "books"];

for (let sub of subreddits) {
  console.log(sub);
}

const magicSquare = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8]
];

for (let i = 0; i < magicSquare.length; i++) {
  let row = magicSquare[i];
  let sum = 0;
  for (let j = 0; j < row.length; j++) {
    sum += row[j];
  }
  console.log(`${row} summed to ${sum}`);
}
for (let row of magicSquare) {
  let sum = 0;
  for (let num of row) {
    sum += num;
  }
  console.log(`${row} summed to ${sum}`);
}
// (for of) is nicer syntax but it's not always the best to use
// comparing arrays is probably best for the for each classic approach
// for of works with iterables like arrays and strings // won't work with objects wants a iterable

// Object.keys(obj); will turn the keys of a obj into a iterable
const movieReviews = {
  Arrival: 9.5,
  Alien: 9,
  Amelie: 8,
  "In Bruges": 9,
  Amadeus: 10,
  "Kill Bill": 8,
  "Little Miss Sunshine": 8.5,
  Coraline: 7.5
};

console.log("This is Object.keys() " + Object.keys(movieReviews));
for (let movie of Object.keys(movieReviews)) {
  console.log(movie, movieReviews[movie]);
}
// Object.keys returns iterable of keys

const ratings = Object.values(movieReviews);
console.log("This is Object.values() " + ratings);
let total = 0;
for (let r of ratings) {
  total += r;
}
let avg = total / ratings.length;
console.log(avg);

// Object.keys returns iterable of values within a obj

// (for in) loops over keys of a obj // wants a obj

const jeopardyWinnings = {
  regularPlay: 2533700,
  watsonChallenge: 300000,
  tournamentOfChampions: 50000,
  battleOfTheDecades: 100000
};

for (let prop in jeopardyWinnings) {
  console.log(prop); // returns the key
  console.log(jeopardyWinnings[prop]); // returns the value
}

let total1 = 0; // use let because it's a primative mem refrence doesn't matter

for (let prop in jeopardyWinnings) {
  total1 += jeopardyWinnings[prop];
}
console.log(`Ken Jennings Total Earnings: ${total1}`);
// (for in ) can be used with arrays because arrays are objects but it loops the index so there is no real reason to use them
