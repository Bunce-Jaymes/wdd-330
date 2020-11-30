export default class petView {

    showAllPetsList(petsArray, petListElementDiv) {
        const olItem = document.createElement("ol");

        for (let i = 0; i < petsArray.length; i++) {
            const liItem = document.createElement("li");
            const pItem = document.createElement("p");
            const imgItem = document.createElement("img");

            pItem.innerHTML = petsArray[i].name;
            pItem.classList.add("petName");

            imgItem.src = "img/Edit_icon_(the_Noun_Project_30184).svg.png";
            imgItem.classList.add("editIcon");

            liItem.appendChild(pItem);
            liItem.appendChild(imgItem);
            olItem.appendChild(liItem);
        }

        petListElementDiv.appendChild(olItem);
    }

    showAddPetView(mainDisplayElement, petListElement) {
        mainDisplayElement.innerHTML = "";

        mainDisplayElement.innerHTML = `
        <header>
            <h1>Perfect Paws!</h1>
        </header>

        <form id="newPetForm">
            <label>Pet's Name: <input id="petName" required></label>
            <label>Pet's Birthday: <input type="date" id="petBirthdate" required></label>
            <label>Pet's Next Vet Visit: <input type="date" id="petVisitDate"><input type="time" id="petVisitTime"></label>
            <label>Pet's Breed: <select id="petBreed" required><option disabled selected value> -- select an option -- </option></select></label>
            <label>Pet's Height: <input id="petHeight" type="number"></label>
            <label>Pet's Weight: <input id="petWeight" type="number"></label>
            <label>Pet's medication and frequency: <input id="petMedication"></label>

            <button id="submitButton" type="submit">Add my Pet!</button>      
        </form>
`;
    }

    showPetDetails(selectedPetObject, mainDisplayElement) {


        mainDisplayElement.innerHTML = "";
        mainDisplayElement.innerHTML = `

        <div id="petInfoDiv">
            <button id="backToAllPetsButton">All Pets</button>
            <h2>${selectedPetObject.name}</h2>
            <img>
            <img>
            <p>Birthdate: ${selectedPetObject.birthday}</p>
            <p>Breed: ${selectedPetObject.breed}</p>
            <p>Date of Next Vet Visit: ${selectedPetObject.nextVetDate}</p>
            <p>Time of Next Vet Visit: ${selectedPetObject.nextVetTime}</p>
            <p>Medications: ${selectedPetObject.medication}</p>
            <p>Height: ${selectedPetObject.height}</p>
            <p>Weight: ${selectedPetObject.weight}</p>
        </div>`;
    }

    showBreedDetails(breedData) {

        const petDetailsDiv = document.querySelector('#petInfoDiv');
        const apiInfoDiv = document.createElement('div');

        apiInfoDiv.innerHTML = `
        <div>
            <h3>Typical traits of a ${breedData.name}</h3>
            <p>Typical Height: ${breedData.height.imperial} inches</p>
            <p>Typical Weight: ${breedData.weight.imperial} lbs</p>
            <p>Typical Life Span: ${breedData.life_span}</p>
            <p>Typical Personality Traits: ${breedData.temperament}.</p>
        </div>`;

        petDetailsDiv.append(apiInfoDiv);
    }

}
