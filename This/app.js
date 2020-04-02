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
    console.log(`${first} ${last} AKA ${nickName}`);
    console.log(this);
  },
  printBio() {
    console.log(this);
    const derp = this.fullName();
    console.log(`${derp} is a person!`);
  }
};

// person.fullName();
// person.printBio();
