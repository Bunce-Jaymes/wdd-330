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
            <h1>Add/Edit Pet Information</h1>
        </header>

        <form id="newPetForm">
            <label>Pet's Name: <input id="petName" required></label>
            <label>Pet's Birthday: <input type="date" id="petBirthdate" required></label>
            <label>Pet's Next Vet Visit: <input type="date" id="petVisitDate"><input type="time" id="petVisitTime"></label>
            <label>Pet's Last Vet Visit: <input type="date" id="lastVisitDate"></label>
            <label>Notes From Last Vet Visit: <textarea id="notesFromLastVisit"></textarea></label>
            <label>Pet's Breed: <select id="petBreed" required></select></label>
            <label>Pet's Height (inches): <input id="petHeight" type="number"></label>
            <label>Pet's Weight (lbs): <input id="petWeight" type="number"></label>
            <label>Pet's Medication and Frequency: <textarea id="petMedication"></textarea></label>

            <button id="submitButton" type="submit">Add/Update my Pet!</button>
            
            <button onclick="location.reload()" id="cancelFormButton">Cancel</button>
        </form>

        
`;
    }

    showPetDetails(selectedPetObject, mainDisplayElement) {


        mainDisplayElement.innerHTML = "";
        mainDisplayElement.innerHTML = `

        <div id="petInfoDiv">
            <button id="backToAllPetsButton">All Pets</button>
            <img id="editDetails" src="img/Edit_icon_(the_Noun_Project_30184).svg.png">
            <h2 id="petNameH2">${selectedPetObject.name}</h2>
            <img id="photoFromAPI" alt="dogImage">
            <p class="pElementDetails" id="birthDayDetails">Birthdate: ${selectedPetObject.birthday}</p>
            <p class="pElementDetails">Breed: ${selectedPetObject.breed}</p>
            <p class="pElementDetails">Next Vet Visit: ${selectedPetObject.nextVetDate} at ${selectedPetObject.nextVetTime}</p>
            <p class="pElementDetails" id="lastVetVisitP">Last Vet Visit: ${selectedPetObject.lastVetDate}</p>
            <p class="pElementDetails hidden" id="lastVetVisitNotesP">Notes from last Vet Visit: ${selectedPetObject.lastVetNotes}</p>
            <p class="pElementDetails">Medications: ${selectedPetObject.medication}</p>
            <p class="pElementDetails">Height: ${selectedPetObject.height} inches</p>
            <p class="pElementDetails">Weight: ${selectedPetObject.weight} lbs</p>
        </div>`;
    }

    showBreedDetails(breedData) {
        
        const mainDisplay = document.querySelector('#petInfoDiv');

        const apiInfoDiv = document.createElement('div');

        apiInfoDiv.innerHTML = `
            <h3>Typical Traits of a ${breedData.name}</h3>
            <p>Height: ${breedData.height.imperial} inches</p>
            <p>Weight: ${breedData.weight.imperial} lbs</p>
            <p>Average Life Span: ${breedData.life_span}</p>
            <p>Personality Traits: ${breedData.temperament}.</p>`;
        
        apiInfoDiv.id = "apiInfoDetailsDiv";

        mainDisplay.append(apiInfoDiv);
    }

}
