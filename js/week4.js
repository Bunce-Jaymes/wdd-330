//const Dice = function (sides = 6) {
//    this.sides = sides;
//    this.roll = function () {
//        return Math.floor(this.sides * Math.random() + 1)
//    }
//}

class Dice {
    constructor(sides = 6) {
        Object.defineProperty(this, 'sides', {
            get() {
                return `This dice has ${sides} sides`;
            },
            set(value) {
                if (value > 0) {
                    sides = value;
                    return sides;
                } else {
                    throw new Error('The number of sides must be positive');
                }
            }
        });
        this.roll = function () {
            return Math.floor(sides * Math.random() + 1)
        }
    }
}

const redDice = new Dice();
const blueDice = new Dice(1000);

console.log(redDice.roll());
console.log(blueDice.roll());
console.log(redDice instanceof Dice);
console.log(blueDice.constructor);

class Turtle {
    constructor(name, color) {
        this.name = name;
        this.weapon = 'hands';
        let _color = color;
        this.setColor = (color) => {
            if (typeof color === 'string') {
                return _color = color;
            } else {
                throw new Error('Color must be a string');
            }
        }

        this.getColor = () => _color;
    }
    sayHi() {
        return `Hi dude, my name is ${this.name}`;
    }
    attack() {
        return `Feel the power of my ${this.weapon}!`;
    }
    toString() {
        return `A turtle called ${this.name}`;
    }
}

const leo = new Turtle('Leonardo');

console.log(leo);
console.log(leo.name);
console.log(leo.sayHi());

Turtle.prototype.age = 36;

console.log(leo.constructor.prototype);
console.log(Turtle.prototype.isPrototypeOf(leo));

console.log(leo.hasOwnProperty('name'));

console.log(leo.hasOwnProperty('age'));

Turtle.prototype.food = 'Pizza';
Turtle.prototype.eat = function () {
    return 'Mmm, this ${this.food} tastes great!';
}

const mike = new Turtle('Michelangelo');

console.log(mike.eat());

const raph = new Turtle('Raphael', 'Red');

console.log(raph.getColor());
//console.log(raph.setColor(4));

console.log(Turtle.prototype.propertyIsEnumerable('eat'));

console.log(raph.toString());

const me = {
    name: 'DAZ'
};
console.log(Object.getOwnPropertyDescriptor(me, 'name'));

me.age = 21;
me.retirementAge = 65;
Object.defineProperty(me, 'yearsToRetirement', {
    get() {
        if (this.age > this.retirementAge) {
            return 0;
        } else {
            return this.retirementAge - this.age;
        }
    },
    set(value) {
        this.age = this.retirementAge - value;
        return value;
    }
});

const yellowDice = new Dice;

console.log(yellowDice.sides);

const Human = {
    arms: 2,
    legs: 2,
    walk() {
        console.log('Walking');
    }
}

const lois = Object.create(Human);
console.log(lois.arms);

const Superhuman = Object.create(Human);
Superhuman.change = function () {
    return `${this.realName} goes into a phone box and comes out as ${this.name}!`;
};

Superhuman.name = 'Name Needed';
Superhuman.realName = 'Real Name Needed';
const superman = Object.create(Superhuman);
superman.name = 'Superman';
superman.realName = 'Clark Kent';

console.log(superman.change());

const a = {};
const b = {
    name: 'JavaScript'
};
Object.assign(a, b);

console.log(a.name);

function mixin(target, ...objects) {
    for (const object of objects) {
        if (typeof object === 'object') {
            for (const key of Object.keys(object)) {
                if (typeof object[key] === 'object') {
                    target[key] = Array.isArray(object[key]) ? [] : {};
                    mixin(target[key], object[key]);
                } else {
                    Object.assign(target, object);
                }
            }
        }
    }
    return target;
}

const d = {},
    e = {
        foo: 'bar'
    },
    c = {
        numbers: [1, 2, 3]
    };
mixin(d, e, c);
console.log(d.numbers);
console.log(c.numbers);

function copy(target) {
    const object = Object.create(Object.getPrototypeOf(target));
    mixin(object, target);
    return object;
}

const bizarro = copy(superman);
bizarro.name = 'Bizarro';
bizarro.realName = 'Subject B-0';

console.table(bizarro);
console.log(bizarro.change());

import { PI } from "../js/pi.js";

console.log(PI);

//const square = require("../js/squareFunction");