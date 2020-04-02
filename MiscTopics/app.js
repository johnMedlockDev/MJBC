// default values
// within parameters you can assign defaults with the "=" example: function (x = 1)
// defaults must come first in the parameters

// Spread operator expands a iterable arrays most commonly

const nums = [45, 23, 34, 7, 5];

// console.log(...nums);
// breaks each of the eles out of the array
// console.log(Math.max(...nums));

function giveMeFour(a, b, c, d) {
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);
  console.log("d", d);
}

const colors = ["red", "orange", "yellow", "green"];

// console.log(giveMeFour(...colors));

// the spread operator distributes the iterable among the paramters in this example
// an equlivant statement would be = giveMeFour(colors[0],colors[1],colors[2],colors[3]);
// giveMeFour(colors[0], colors[1], colors[2], colors[3]);
// you can also spread strings

// one level deep new memory address // not multilevel

const newArr = [...colors, ...nums];

// console.log(newArr);

const copyArr = [...colors];
// console.log(copyArr === colors);
// objects can spead objs // arrays can spread arrays/// you can spread a obj into a array
//
// rest replaces arguments obj

function sum(...nums) {
  return nums.reduce((total, currVal) => {
    return total + currVal;
  });
}
// rest allows for a undetermined number of inputs to be captured.. It catchs inputs after defaults // then it creates an array out of the inputs passed to it.

// destructuring is syntatic sugar that allows you to create variables from an array without specifying the index expelictedly

const raceResults = [
  "Eliud Kipchoge",
  "Feyisa Lelisa",
  "Galen Rupp",
  "Ghirmay Ghebreslassie",
  "Alphonce Simbu",
  "Jared Ward"
];

const [gold, silver, bronze] = raceResults;

// console.log(gold, silver, bronze);

// You can do basically the same thing with objects

const runner = {
  first: " Eliud",
  last: "Kipchoge",
  country: "Kenya",
  title: "Elder of the Order of the Golden Heart of Kenya"
};

const { country: nation, title: honorific } = runner;

// console.log(nation, honorific);
// you can use distructuring in the parameters in a function

function printThirdPlace([, , runner]) {
  console.log(runner);
}

function printRunnerDetails({ first, last, country }) {
  console.log(`${first} ${last} from the country of ${country}`);
}

// printThirdPlace(raceResults);
// printRunnerDetails(runner);
