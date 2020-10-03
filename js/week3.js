//This Practice

const user = {
    name: "John",
    age: 30
};

user.sayHi = function () {
    return "The function inside this object worked!";
};

console.log(user.sayHi());

user.sayHi2 = function () {
    return this.name;
}

console.log(user.sayHi2());

//Chapter 5 Objects practice

const superman = {
    name: 'Superman',
    'real name': 'Clark Kent',
    height: 75,
    weight: 235,
    hero: true,
    villian: false,
    allies: ['Batman', 'Supergirl', 'Superboy'],
    fly() {
        return 'Up, up and away!';
    }
};


let spiderman = {};

const name = 'Peter';
const age = 16;

spiderman = {
    name,
    age
};

console.log(spiderman);
console.log(spiderman.age);

console.log(superman["real" + " " + "name"]);

console.log(superman.fly());

console.log("Birthday is in the object spiderman? " + ('birthday' in spiderman));

for (const [key, value] of Object.entries(superman)) {
    console.log(key + ": " + value);
}

spiderman.color = "Red";
spiderman.name = "Peter Parker";
delete spiderman.age;

for (const [key, value] of Object.entries(spiderman)) {
    console.log(key + ": " + value);
}

//Nested objects

const games = {
    halo: {
        dev: 'Bungie'
    },
    rust: {
        dev: 'FacePunch'
    },
};


console.log(games.halo.dev);

const games2 = games;

games2.halo.dev = "343";

console.table(games);
console.table(games2);


const dice = {
    sides: 6,
    roll() {
        return Math.floor(this.sides * Math.random()) + 1;
    }
}

console.log(dice.roll());

//Creating JSON object

const batman = '{"name": "Batman","real name": "Bruce Wayne","height": 74, "weight": 210, "hero": true, "villain": false, "allies": ["Robin","Batgirl","Superman"]}'


//convert JSON to Javascript object
console.log(JSON.parse(batman));

//convert Javascript object to JSON
console.log(JSON.stringify(batman, null, " "));

console.log(Math.floor(1000 * Math.random()));

const pattern = new RegExp('[a-zA-Z]+ing');

console.log(pattern.test('joking'));
console.log(pattern.test('poke'));

const pdf = /.*\.pdf$/;

console.log(pdf.test('text.pdf'));
console.log(pdf.test('excel.doc'));

const testDiv = document.getElementById('testDiv');
console.log(testDiv);

const testDivClass = document.getElementsByClassName('testDivClass');
console.log(testDiv);

const testQuery = document.querySelectorAll('.testDivClass');

const bMan = document.querySelector('.hero');

console.log(bMan.textContent);
console.log(bMan.nodeValue);

const textNode = bMan.firstChild;
console.log(textNode);

console.log(bMan.getAttribute('class'));

bMan.setAttribute('class', 'capedHero');

console.log(bMan.getAttribute('class'));

const flash = document.createElement('p');
const flashText = document.createTextNode('Flash');

flash.appendChild(flashText);

bMan.appendChild(flash);

flash.style.border = "red 3px solid";

console.log(getComputedStyle(flash));