//grab data
function getData(url) {
    return fetch(url)
        .then(function (response) {
            if (!response.ok) {
                throw Error(response.statusText);
            } else {
                return response.json();
            }
        })
        .catch(function (error) {
            console.log(error);
        });

}



//view

function renderList(peopleArray) {
    const listTable = document.querySelector('#personList');
    const mainList = listTable.children[1];

    mainList.innerHTML = "";

    peopleArray.forEach(function (person) {
        let listItem = document.createElement("tr");
        listItem.innerHTML = `
            <td>${person.name}</td>
            <td>${person.gender}</td>
            <td>${person.birth_year}</td>`;

        listItem.addEventListener("click", function (event) {
            event.preventDefault();
            showPersonDetails(person.url);
        });

        mainList.appendChild(listItem);
    });
}

function renderPersonDetails(person) {
    const detailsDiv = document.querySelector('#detailsDiv');
    detailsDiv.innerHTML = "";
    detailsDiv.innerHTML = `
        <h2>Details about ${person.name}:</h2>
        <ul>
            <li>Birth Year: ${person.birth_year}</li>
            <li>Eye Color: ${person.eye_color}</li>
            <li>Gender: ${person.gender}</li>
            <li>Hair Color: ${person.hair_color}</li>
            <li>Height: ${person.height}</li>
        </ul>`;

}

//controller

function showPersonDetails(personDetailsURL) {
    getData(personDetailsURL).then(function (data) {
        renderPersonDetails(data);
    });
}

function showPeople(urlToGet = "https://swapi.dev/api/people/") {
    getData(urlToGet).then(function (data) {
        const arrayOfResults = data.results;

        renderList(arrayOfResults);

        if (data.next != null) {
            const nextButton = document.getElementById("next");
            nextButton.classList.remove('hidden');

            nextButton.onclick = () => {
                showPeople(data.next);
            };

        } else {
            const nextButton = document.getElementById("next");
            nextButton.classList.add('hidden');
        }

        if (data.previous) {
            const previousButton = document.getElementById("prev");
            previousButton.classList.remove('hidden');

            previousButton.onclick = () => {
                showPeople(data.previous);
            };
        } else {
            const previousButton = document.getElementById("prev");
            previousButton.classList.add('hidden');
        }

    });
}

showPeople();
