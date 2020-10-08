//const form = document.forms['search'];
//const input = form['searchInput'];
//
//input.value = 'Search Here';


//input.addEventListener('focus', () => alert('focused'), false);
//input.addEventListener('blur', () => alert('blurred'), false);
//input.addEventListener('change', () => alert('changed'), false);

//form.addEventListener('submit', search, false);
//
//function search(event) {
//    alert(`You Searched for: ${input.value}`);
//    event.preventDefault();
//}
//
//input.addEventListener('focus', function () {
//    if (input.value === 'Search Here') {
//        input.value = ''
//    }
//}, false);
//
//input.addEventListener('blur', function () {
//    if (input.value === '') {
//        input.value = 'Search Here';
//    }
//}, false);
//function validate(event) {
//    const firstLetter = form.heroName.value[0];
//    if (firstLetter.toUpperCase() === 'X') {
//        event.preventDefault();
//        alert('Your name is not allowed to start with X!');
//    }
//}

const form = document.forms['hero'];
form.addEventListener('submit', makeHero, false);

document.forms.hero.powers[0].checked = true;

function makeHero(event) {
    event.preventDefault(); // prevent the form from being submitted
    const hero = {}; // create an empty object
    hero.name = form.heroName.value; // create a name property based on the input field's value
    //    alert(hero.realName = form.realName.value);
    hero.powers = [];

    for (let i = 0; i < form.powers.length; i++) {
        if (form.powers[i].checked) {
            hero.powers.push(form.powers[i].value);
        }
    }

    hero.category = form.category.value;
    hero.age = form.age.value;
    hero.city = form.city.value;
    hero.origin = form.origin.value;

    alert(JSON.stringify(hero)); // convert 
    console.log(hero);
}

form.addEventListener('keyup', validateInline, false);

const label = form.querySelector('label');
const error = document.createElement('div');
error.classList.add('error');
error.textContent = '! Your name is not allowed to start with X.';
label.append(error);

function validateInline() {
    const firstLetter = form.heroName.value[0];
    const heroName = firstLetter.toUpperCase();
    if (heroName.startsWith('X')) {
        error.style.display = 'block';
    } else {
        error.style.display = 'none';
    }
}

form.heroName.addEventListener('keyup', disableSubmit, false);

function disableSubmit(event) {
    if (event.target.value === '') {
        document.getElementById('submit').disabled = true;
    } else {
        document.getElementById('submit').disabled = false;
    }
}
