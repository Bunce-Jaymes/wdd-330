let x = 6;

console.log(x);
console.log(window.x);

console.log(window.navigator.userAgent);
console.log(window.location.href);
//window.location.href = 'https://www.sitepoint.com/javascript/';
console.log(window.location.protocol);
console.log(window.location.host);
console.log(window.location.hostname);
console.log(window.location.port);
console.log(window.location.pathname);
console.log(window.location.search);
console.log(window.location.hash);
console.log(window.location.origin);
console.log(window.location.toString());
//window.history.go(1); // goes forward 1 page
//window.history.go(0); // reloads the current page
//window.history.go(-1); // goes back 1 page

//const popup = window.open('https://sitepoint.com', 'SitePoint ','width = 400, height = 400, resizable = yes ');
////popup;
//popup.moveTo(0,0);
//popup.resizeTo(600,400);

console.log(window.screen.height);
console.log(window.screen.width);
console.log(window.screen.availWidth);
console.log(window.screen.availHeight);
console.log(window.screen.colorDepth);

document.cookie = 'name=Superman';
document.cookie = 'hero=true';
document.cookie = 'city=Metropolis';

document.cookie = 'name=Batman';
document.cookie = 'city=Gotham'


console.log(document.cookie);

const cookies = document.cookie.split("; ");
for (crumb of cookies) {
    const [key, value] = crumb.split("=");
    console.log(`The value of ${key} is ${value}`);
}

const expiryDate = new Date();
const tomorrow = expiryDate.getTime() + 1000 * 60 * 60 * 24;
expiryDate.setTime(tomorrow);
document.cookie = `name=Batman; expires=${expiryDate.toUTCString()}`;

document.cookie = 'name=Batman; path=/; secure';

//window.setTimeout(() => alert("Time's Up!"), 3000);
//window.clearTimeout(5);

function chant() {
    console.log('Beetlejuice');
};

const summon = window.setInterval(chant, 1000);
summon;
window.clearInterval(summon);

const squareElement = document.getElementById('square');

//let angle = 0;
//setInterval(() => {
//    angle = (angle + 2) % 360;
//    squareElement.style.transform = `rotate(${angle}deg)`
//}, 1000 / 60)

let angle = 0;

function rotate() {
    angle = (angle + 2) % 360;
    squareElement.style.transform = `rotate(${angle}deg)`
    window.requestAnimationFrame(rotate);
}

const id = requestAnimationFrame(rotate);

const superman = document.getElementById('hero');
const powers = superman.dataset.powers;

console.log(powers);


navigator.geolocation.getCurrentPosition(youAreHere);

function youAreHere(position) {
    console.log(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
}

const id2 = navigator.geolocation.watchPosition(youAreHere);
navigator.geolocation.clearWatch(id2);

const worker = new Worker('../js/week9/worker.js');
worker.addEventListener('message', (event) => {
    console.log(event.data);
}, false);
