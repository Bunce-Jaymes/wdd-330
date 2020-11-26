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
            <label>Pet's Breed: <input id="petBreed" required></label>
            <label>Pet's Height: <input id="petHeight" type="number"></label>
            <label>Pet's Weight: <input id="petWeight" type="number"></label>
            <label>Pet's medication and frequency: <input id="petMedication"></label>
<button id="submitButton" type="submit">Add my Pet!</button>       
        </form>
`;
    }

}
