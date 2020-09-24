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
avengers = avengers.concat(['Hulk','Hawkeye', 'Black Widow']);
console.log(avengers);

//The join() Method
console.log(avengers.join(' & '));

//Slicing and Splicing
console.log(avengers.slice(2,4));
console.log(avengers);

avengers.splice(3, 1, 'Scarlet Witch');
console.log(avengers);

avengers.splice(4,0,'Quicksilver');
console.log(avengers);

avengers.splice(2,1);
console.log(avengers);

//Reverse
console.log(avengers.reverse());

//Sort

//const question = "What is Superman's real name?";
//const answer = prompt(question);
//alert(`You answered ${answer}`);
