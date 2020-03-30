let topSongs = [
  "First time ever I saw your face",
  "God only knows",
  "A day in the life",
  "Life on mars"
];
console.log(topSongs);

topSongs.push("Fortunate Son"); // "pushes" the item on to the end of the array

console.log(topSongs);

let last = topSongs.pop(); // removes the last item from the array and returns the removed value

console.log(topSongs);

console.log(last);

let dishesTodo = ["big platter"];
dishesTodo.unshift("large plate");
dishesTodo.unshift("small plate");
// unshift adds to the begin of the array
dishesTodo.unshift("cereal bowl");
dishesTodo.unshift("dirty spoon");
dishesTodo.unshift("mug");
console.log(dishesTodo);

dishesTodo.shift(); // shift remove the first item of the array and returns it.
console.log(dishesTodo);
// you can push and unshift multiple items

let fruits = ["apples", "bannanas"];
let veggies = ["asparagus", "sprouts"];
let meats = ["steak", "chicken breast"];

let allFoods = fruits.concat(veggies, meats);

console.log(allFoods);

console.log(allFoods.includes("apples")); // returns bool if exist
console.log(allFoods.indexOf("apples")); // returns index of item
console.log(allFoods.reverse()); // reverses the order of the array
console.log(allFoods.join("-")); // connects values on a specified value
console.log(allFoods.slice(0, 3)); // segments the arr 2nd value isn't included nums rep indexes
// splice = (index, num items to delete, items to add, items to add)

console.log(allFoods.sort()); // sorts based off of string char codes

// const points to a memory reffrence so you use it often with arrays becuase you change the contents of the array with out changing the reffrence to the array. This is not true with primatives. If you try to change a const assigned to a primative you it won't allow it because it would change the reffrence type.
