function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}

// for (let i = 0; i <= 1000; i++) {
//   console.log(rollDie());
// }
// return statements stop function execution

// password challenge

function isValidPassword(password, username) {
  // requirements pass must be =>8 chars no spaces, not contain username // if reqs met return true // else false
  if (password == undefined || username == undefined) {
    console.log("You must input two parameters. Password, Username");
    return null;
  }

  if (password.length < 8) {
    console.log("Password less than 8 characters.");
    return false;
  }

  if (password.includes(username)) {
    console.log("Password can't contain username");
    return false;
  }

  if (password.includes(" ")) {
    console.log("Password can't contain spaces.");
    return false;
  }
  console.log("Password passed validation");
  return true;
}

// console.log(isValidPassword("asdf", "qwer"));
// console.log(isValidPassword("strongpassword", "user123"));
// console.log(isValidPassword("bad password", "user123"));

function avgARR(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
  return sum / arr.length;
}

// console.log(avgARR([1, 5, 1, 231, 515, 55]));

function isPangram(str) {
  let strScrub = str.toLowerCase();

  for (let char of "abcdefghijklmnopqrstuvwxyz") {
    if (!strScrub.includes(char)) {
      return false;
    }
  }
  return true;
}

// console.log(isPangram("The five boxing wizards jump quickly"));

// const deckArr = {};
// const cardSuite = ["Clubs", "Spades", "Hearts", "Diamonds"];
// const cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

// // for (let i = 0; i < cardSuite.length; i++) {
// //   for (let j = 0; j < cardValues.length; j++) {

// //   }
// // }

// for (const key of cardSuite) {
//   for (const value of cardValues) {
//     deckArr[key] = value;
//   }
// }
// console.log(deckArr);

function pick(arr) {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

function getCard() {
  const values = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  const suits = ["Clubs", "Spades", "Hearts", "Diamonds"];

  const value = pick(values);
  const suit = pick(suits);

  return { value, suit };
}

// console.log(getCard());

// functions can accept functions as arguments // you can assign anonymous funcs to vars // you can loop funs in array // you can attach methods to objs
//  callbacks are funcs passed into other funcs
function grumpus() {
  alert("This is an alert after 5 seconds");
}

// setTimeout(function() {
// alert("This is an alert after 5 seconds");
// }, 5000);
// ^^^ example of callback

// let and const aren't hoisted
