// you can assign var to objects within the obj by define out side
const num = 534;

const personNum = {
  [num]: "John"
};

// console.log(personNum[534]);

// shorthand syntax for writing methods

const auth = {
  username: "TommyBot",
  login() {
    console.log("You logged in");
  },
  logout() {
    console.log("You logged out");
  }
};

// auth.login();
// console.log(auth.username);
// auth.logout();
// this is a reffrence to an object

function sayHi() {
  console.log("Hi");
  // attaches this function to the global window object
  console.log(this);
}
// sayHi();

const person = {
  first: "Cherilyn",
  last: "Sarkisian",
  nickName: "Cher",
  fullName() {
    const { first, last, nickName } = this;
    return `${first} ${last} AKA ${nickName}`;
  },
  printBio() {
    console.log(this);
    const fullname = this.fullName();
    console.log(`${fullname} is a person!`);
  }
};

// person.fullName();
// person.printBio();

// arrow functions doesn't get their own version of this..
// the value of this is set by the invocation context

const annoyer = {
  phrases: [
    "literally",
    "cray cray",
    "I can't even",
    "Totes!",
    "YOLO",
    "Can't Stop, Won't Stop"
  ],
  pickPhrase() {
    const { phrases } = this;
    const idx = Math.floor(Math.random() * phrases.length);
    return phrases[idx];
  },
  start() {
    this.timerId = setInterval(() => {
      console.log(this.pickPhrase());
    }, 3000);
  },
  stop() {
    clearInterval(this.timerId);
    console.log("It's over");
  }
};

// annoyer.start();
// using a arrow function is better way of defining functions within objects because they don't gettheir own this. Creating regular functions get this based on the invocation context.

// annoyer.start();
