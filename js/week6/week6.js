function square(x) {
    square.cache = square.cache || {};
    if (!square.cache[x]) {
        square.cache[x] = x * x;
    }
    return square.cache[x]
}


console.log(square.length);

function sayHello(greeting = 'Hello') {
    return `${ greeting }, my name is ${ this.name }`;
}

const clark = {
    name: 'Clark'
};
const bruce = {
    name: 'Bruce'
};

console.log(sayHello.call(clark, 'hey there'));
console.log(sayHello.call(bruce));
console.log(square.call(null, 4));
console.log(square.apply(null, [4]));

square(10);
console.log(square.cache);

(function () {
    const temp = 'World';
    console.log(`Hello ${temp}`);
})();

let a = 1;
let b = 2;
(() => {
    const temp = a;
    a = b;
    b = temp;
    console.log(temp);
})();

try {
    console.log(temp);
} catch (err) {
    console.log("undefined");
}

{
    const name = 'Peter Parker';
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(),
        today = days[date.getDay()];
    console.log(`Welcome back ${name}. Today is ${today}`);
}

function party() {
    console.log('Wow this is amazing!');
    party = function () {
        console.log('Been there, got the T-Shirt');
    }
}

party();
party();

function collatz(n, sequence = [n]) {
    if (n === 1) {
        return `Sequence took ${sequence.length} steps. It was ${sequence}`;
    }
    if (n % 2 === 0) {
        n = n / 2;
    } else {
        n = 3 * n + 1;
    }
    return collatz(n, [...sequence, n]);
}


console.log(collatz(18));

//function wait(message, callback, seconds) {
//    setTimeout(callback, seconds * 1000);
//    console.log(message);
//}
//
//function selfDestruct() {
//    console.log('BOOOOM!');
//}
//
//
//wait('This tape will self-destruct in five seconds ... ', selfDestruct, 5);
//console.log('Hmmm, should I accept this mission or not ...?');

const dice = {
    sides: 6,
    roll() {
        return Math.floor(this.sides * Math.random()) + 1;
    }
}
console.log('Before the roll');
const roll = new Promise((resolve, reject) => {
    const n = dice.roll();
    if (n > 1) {
        setTimeout(() => {
            resolve(n)
        }, n * 200);
    } else {
        setTimeout(() => reject(n), n * 200);
    }
});
roll.then(result => console.log(`I rolled a ${result}`))
    .catch(result => console.log(`Drat! ... I rolled a ${result}`));
console.log('After the roll');

function returnHello() {
    console.log('returnHello() called');
    return function () {
        console.log('Hello World!');
    }
}

returnHello();
const hello = returnHello();
hello();

//function outer() {
//    const outside = 'Outside!';
//
//    function inner() {
//        const inside = 'Inside!';
//        console.log(outside);
//        console.log(inside);
//    }
//    console.log(outside);
//    inner();
//}
//
//outer();

function outer() {
    const outside = 'Outside!';

    function inner() {
        const inside = 'Inside!';
        console.log(outside);
        console.log(inside);
    }
    return inner;
}

const closure = outer();
closure();


function counter(start) {
    let i = start;
    return function () {
        return i++;
    }
}

const count = counter(1);
console.log(count());
console.log(count());


function* fibonacci(a, b) {
    let [prev, current] = [a, b];
    while (true) {
[prev, current] = [current, prev + current];
        yield current;
    }
}
const sequence = fibonacci(1, 1);
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());

function reverse(string) {
    return string.split('').reverse().join('');
}

const message = 'Hello JavaScript';
console.log(reverse(message));

function sum(array, callback) {
    if (callback) {
        array = array.map(callback);
    }
    return array.reduce((a, b) => a + b);
}

console.log(sum([1, 2, 3]));
console.log(sum([1, 2, 3], square));

//function multiplier(x) {
//    return function (y) {
//        return x * y;
//    }
//}
//
//const doubler = multiplier(2);
//const tripler = multiplier(3);
//
//console.log(doubler(10));
//console.log(tripler(10));

function multiplier(x, y) {
    if (y === undefined) {
        return function (z) {
            return x * z;
        }
    } else {
        return x * y;
    }
}
const calcTax = multiplier(0.22);
console.log(calcTax(400));

function curry(func, ...oldArgs) {
    return function (...newArgs) {
        const allArgs = [...oldArgs, ...newArgs];
        return func(...allArgs);
    }
}

const divider = (x, y) => x / y;
divider(10, 5);
const reciprocal = curry(divider, 1);
console.log(reciprocal(2));

const response = new Response('Hello!', {
    ok: true,
    status: 200,
    statusText: 'OK',
    type: 'cors',
    url: '/api'
});

console.log(response);

const request = new Request('https://example.com/data', {
    method: 'GET',
    mode: 'cors',
    redirect: 'follow',
    cache: 'no-cache'
});

console.log(request);

//fetch(request)
//.then( // do something with the response )
//.catch( // handle any errors)

