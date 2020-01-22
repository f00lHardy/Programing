console.log ("Im working");
// ==========================
// CHANGING ARRAY
// ==========================
// Changing items in array by index
let colors = ['red',
              'orange',
              'yellow',
              'green',
              'blue',
              'indigo',
              'violet'];

console.log (colors);
colors[0] = 'pink';
console.log (colors);
colors[0] = 'back to red';
console.log (colors);

// ==========================
// PUSH ARRAY
// ==========================
// puch method - add to end
colors.push("Hamburger");
console.log(colors);

// ==========================
// POP ARRAY
// ==========================
// Pop - remove from end
colors.pop();
console.log(colors);

// ==========================
// SHIFT ARRAY
// ==========================
// Shift - remove from start
colors.shift();
console.log(colors);

// ==========================
// UNSHIFT ARRAY
// ==========================
// Unshift - add to start
colors.unshift("red");
console.log(colors);
// ==========================
// CONCATENATE ARRAY
// ==========================
// Concatenation of arays
const fruits = ['apple', 'banana', 'peaches'];
const veggies = ['asparagus', 'brussel sproutss', 'tomatoes'];
const meats = ['steak', 'chicken breast', 'pork'];

console.log(fruits.concat(veggies));
console.log(veggies.concat(fruits));

let allFood = fruits.concat(veggies, meats);
console.log(allFood);
// ==========================
// INCLUDES ARRAY
// ==========================
// Includes in array
console.log (fruits.includes('banana'));

// ==========================
// INDEXOF ARRAY
// ==========================
// indexOf an array
console.log (fruits.indexOf('banana'));
console.log (fruits.indexOf('burger'));

// ==========================
// JION ARRAY
// ==========================
// join an array
let letters = [ "w", "e", "r", "n", "e", "r"]
console.log (letters.join(''))//If you add ('') it joins the string without spaces
console.log (letters.join())

// ==========================
// REVERSE ARRAY
// ==========================
// reverse a array
console.log (fruits.reverse());

// ==========================
//  SLICE ARRAY
// ==========================
//Slice - coppy portion of an array
console.log (allFood.slice(0,3));

// ++++++++++++++++++++++++++
// SPLICE ARRAY
// ++++++++++++++++++++++++++
//Splice - Remove/replace elements
let myFish = ['angel', 'clown', 'mandarin', 'sturgen'];
// ==========================
//  INSERTING w/ Splice
// ==========================
// 'at index 2, delete 0 items and insert "drum"
myFish.splice(2,0,"drum");
console.log(myFish);
// ["angel", "clown", "drum", "mandarin", "sturgen"

// ==========================
//      DELETING w/ SPLICE
// ==========================
// at index 0, delete 2 items'
myFish.splice(0,2);
console.log(myFish);
// ["drum", "mandarin", "sturgen"]

// ==========================
//      REPLACING w/ SPLICE
// ==========================
// at index 3, delete 2 items and replace them with 
myFish.splice(3,2, "amber", "samon", "tigerfish");
console.log(myFish);
// ["drum", "mandarin", "sturgen", "samon", "tigerfish"]

// ++++++++++++++++++++++++++++
//   SORT ARRAY
// ++++++++++++++++++++++++++++
myFish.sort();
console.log(myFish)
// ["amber", "drum", "mandarin", "samon", "sturgen", "tigerfish"]