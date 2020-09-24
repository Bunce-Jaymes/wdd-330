//Chapter 3 Code Examples:


//Creating and Adding Values to Arrays
const heroes = [];

console.log(heroes);

heroes[0] = `Batman`;
heroes[1] = `Wonder Woman`;
heroes[2] = `Flash`;
heroes[5] = `Aquaman`;

console.log(heroes);

//Creating Array Literals
let avengers = ['Captain America', 'Iron Man', 'Thor', 'Hulk'];
console.log(avengers);

//Removing Values from Arrays
delete avengers[3];

console.log(avengers);
console.log(avengers[3]);

//Destructuring Arrays
let [a, b] = [1, 2];

console.log(a);
console.log(b);

[a, b] = [b, a];

console.log(a);
console.log(b);

//Array Properties and Methods
avengers = ['Captain America', 'Iron Man', 'Thor', 'Hulk', 'Hawkeye', 'Black Widow'];
console.log(avengers.length);

console.log(avengers[avengers.length - 1]);

avengers.length = 8;
console.log(avengers);

avengers.length = 3;
console.log(avengers);

//Pop, Push, Shift, and Unshift
console.log(avengers.pop());
console.log(avengers);

console.log(avengers.shift());
console.log(avengers);

avengers.push('Thor');
console.log(avengers);

avengers.unshift('Captain America');
console.log(avengers);

//Merging Arrays
avengers = avengers.concat(['Hulk', 'Hawkeye', 'Black Widow']);
console.log(avengers);

//The join() Method
console.log(avengers.join(' & '));

//Slicing and Splicing
console.log(avengers.slice(2, 4));
console.log(avengers);

avengers.splice(3, 1, 'Scarlet Witch');
console.log(avengers);

avengers.splice(4, 0, 'Quicksilver');
console.log(avengers);

avengers.splice(2, 1);
console.log(avengers);

//Reverse
console.log(avengers);
console.log(avengers.reverse());

//Sort
console.log(avengers);
console.log(avengers.sort());

//Creating a multidimensional array;
const summer = ['Jun', 'Jul', 'Aug'];
const winter = ['Dec', 'Jan', 'Feb'];

const multiArray = [summer, winter];
console.log(multiArray);

//Calling specific item in multidimensional array
console.log(multiArray[1][1]);

//Sets:
const testSet = new Set();
testSet.add(1).add(2).add(3).add(4);
console.log(testSet);
testSet.add(1)
console.log(testSet);

//Can add values with array when creating set
const testSet2 = new Set([1, 2, 3]);
console.log(testSet2);

//Can delete or clear sets
testSet.delete(1);
console.log(testSet);
testSet.clear();
console.log(testSet);

//Can convert set to array

const convertedArray = [...testSet2];
console.log(convertedArray);

//Maps:
//Creating a Map
const newMap = new Map();

newMap.set(1, "Hello").set(2, "Nice").set(3, "To");
console.log(newMap);

console.log(newMap.get(2));

console.log(newMap.size);

newMap.delete(3);
console.log(newMap);

//Convert map to array
const convertedArray2 = [...newMap];
console.log(convertedArray2);

let number = 3;
switch (number) {
    case 1:
        console.log("You rolled a 1");
    case 2:
        console.log("You rolled a 2");
    case 3:
        console.log("You rolled a 3");

}

for (let i = 0, max = avengers.length; i < max; i++) {
    console.log(avengers[i]);
}

//New way of for each loop
console.log("\n");
for (const value of avengers) {
    console.log(value);
}

//looping over map
console.log("\n");
for (const key of newMap.keys()) {
    console.log(key);
}

console.log("\n");
for (const value of newMap.values()) {
    console.log(value);
}

//CHAPTER 4 Examples:

const hey = function hello() {
    return "Hello World"
};

console.log(hey());

function multi(y) {
    return y * y;
}

console.log(multi(3));

//Passing multiple values to array
function mean(...values) {
    let total = 0;
    for (const value of values) {
        total += value;
    }
    return total / values.length;
}

console.log(mean(2,8,13,11,4,2));

//Default parameters

console.log(heyThere("Hoisted"));

function heyThere(name='World') {
   return (`Hello ${name}!`);
}

console.log(heyThere());
console.log(heyThere("Jaymes"));

//Callbacks

function numerically(a,b){
    return a-b;
}

const numbersArray = [1,3,12,5,23,18,7];
numbersArray.sort(numerically);
console.log(numbersArray);

//Array Iterators

const colors = ['Red', 'Green', 'Blue'];

colors.forEach((color,index) =>
    console.log(`Color at position ${index} is ${color}`));