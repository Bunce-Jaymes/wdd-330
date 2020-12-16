import petView from './petView.js';
import pet from './pet.js';
import petModel from './petModel.js';

export default class petController {
    constructor(mainDisplayElement, petListElement) {
        this.mainDisplayElement = mainDisplayElement;
        this.petListElement = petListElement;
        this.petView = new petView();
        this.pet = new pet();
        this.petModel = new petModel();
    }

    init() {
        this.mainDisplayElement = document.querySelector(this.mainDisplayElement);
        this.petListElement = document.querySelector(this.petListElement);

        const addPetButton = document.querySelector('#addPetButton');
        const removeAllPetsButton = document.querySelector('#removePetsButton');

        removeAllPetsButton.addEventListener('click', a => {
            this.removeAllPets();
        });

        addPetButton.addEventListener('click', e => {
            this.addPet();
        });

        const petArray = this.petModel.getPets();

        if (petArray.length === 0) {
            const noPetsMessageElement = document.createElement('p');

            noPetsMessageElement.innerHTML = "No pets currently saved, add one using the button below!";
            noPetsMessageElement.id = "noPetsMessage";

            this.petListElement.append(noPetsMessageElement);
        } else {
            this.petView.showAllPetsList(petArray, this.petListElement);

            let liItems = document.querySelectorAll('li');

            for (let i = 0; i < liItems.length; i++) {
                const liItemChildern = liItems[i].children;
                const pItem = liItemChildern[0];

                pItem.addEventListener('click', event => {
                    const petNameHTML = (event.srcElement).innerHTML;
                    this.showPetDetails(petNameHTML);
                });
            }

            const editImgs = document.querySelectorAll('.editIcon');

            for (let j = 0; j < editImgs.length; j++) {
                editImgs[j].addEventListener('click', event => {
                    const clickedItem = event.srcElement;
                    const petNameToGet = (clickedItem.previousElementSibling).innerHTML;

                    this.editSavedPet(petNameToGet);
                });
            }
        }
    }

    showPetDetails(petName) {
        const petsArray = this.petModel.getPets();
        const currentPet = petsArray.find(p => p.name === petName);

        this.petView.showPetDetails(currentPet, this.mainDisplayElement);

        this.petModel.getBreedInfoFromAPI("https://api.thedogapi.com/v1/breeds").then(data => {

            try {
                const breedData = data.find(e => e.name === currentPet.breed);
                this.petView.showBreedDetails(breedData);

                const breedImageElement = document.querySelector('#photoFromAPI');
                breedImageElement.src = breedData.image.url;
            } catch (e) {
                alert("There was an error when attempting to connect to the dog API.Please make sure you are connection to WIFI/cell service. And refresh the page");
            }
        });

        const editImgs = document.querySelectorAll('#editDetails');

        for (let j = 0; j < editImgs.length; j++) {
            editImgs[j].addEventListener('click', event => {
                this.editSavedPet(petName);
            });
        }

        const lastVetVisitElement = document.querySelector('#lastVetVisitP');
        lastVetVisitElement.addEventListener('click', function () {
            const lastVetVisitNotesElement = document.querySelector('#lastVetVisitNotesP');
            lastVetVisitNotesElement.classList.toggle("hidden");
            lastVetVisitElement.classList.toggle("viewedVetNotes");
        })

        this.backButton();
    }

    removeAllPets() {
        const check = confirm("This remove all of your pets and their data. This will be permanent, are you sure?");

        if (check === true) {
            localStorage.clear();
            location.reload();
        }
    }

    async addPet(eventListener = (e) => {
        this.processPetData();
        this.saveNewPet();
    }) {
        this.petView.showAddPetView(this.mainDisplayElement);


        try {
            await this.petModel.getBreedInfoFromAPI("https://api.thedogapi.com/v1/breeds").then(data => {

                const dropdownBox = document.querySelector('#petBreed');

                for (let i = 0; i < data.length; i++) {
                    const option = document.createElement('option');

                    option.innerHTML = data[i].name;
                    option.value = data[i].name;
                    dropdownBox.append(option);
                }
            });
        } catch (error) {
            alert("Perfect Paws is currently unable to get the list of breads from the web. Please make sure you are connection to WIFI/cell service. And refresh the page");
        }

        const formElement = document.querySelector('#newPetForm');
        formElement.addEventListener('submit', eventListener);
    }

    backButton() {
        const backButton = document.querySelector('#backToAllPetsButton');

        backButton.addEventListener('click', function () {
            location.reload();
        });
    }

    retrieveFormInfo() {
        const petName = document.querySelector('#petName').value;
        const petBirthdate = document.querySelector('#petBirthdate').value;
        const petVisitDate = document.querySelector('#petVisitDate').value;
        const petVisitTime = document.querySelector('#petVisitTime').value;
        const petBreed = document.querySelector('#petBreed').value;
        const petHeight = document.querySelector('#petHeight').value;
        const petWeight = document.querySelector('#petWeight').value;
        const petMedication = document.querySelector('#petMedication').value;
        const petLastVisitDate = document.querySelector('#lastVisitDate').value;
        const petLastVisitNotes = document.querySelector('#notesFromLastVisit').value;

        const petInfoArray = [petName, petBirthdate, petVisitDate, petVisitTime, petBreed, petHeight, petWeight, petMedication, petLastVisitDate, petLastVisitNotes];

        return petInfoArray;
    }

    async processPetData() {
        const petInfoarray = this.retrieveFormInfo();

        this.pet.name = petInfoarray[0];
        this.pet.birthday = petInfoarray[1];
        this.pet.nextVetDate = petInfoarray[2];
        this.pet.nextVetTime = petInfoarray[3];
        this.pet.breed = petInfoarray[4];
        this.pet.height = petInfoarray[5];
        this.pet.weight = petInfoarray[6];
        this.pet.medication = petInfoarray[7];
        this.pet.lastVetDate = petInfoarray[8];
        this.pet.lastVetNotes = petInfoarray[9];
    }

    async saveNewPet() {
        this.petModel.savePet(this.pet);
        alert(`${this.pet.name} was saved successfully`);
    }

    async editSavedPet(petToGet, viewPetTrue = false) {

        const petsArray = this.petModel.getPets();
        const currentPet = petsArray.find(p => p.name === petToGet);

        const listener = (e) => {
            this.updatePet(petToGet);
            this.showPetDetails(this.pet.name);
        };


        await this.addPet(listener);

        const petName = document.querySelector('#petName');
        const petBirthdate = document.querySelector('#petBirthdate');
        const petVisitDate = document.querySelector('#petVisitDate');
        const petVisitTime = document.querySelector('#petVisitTime');
        const petBreed = document.querySelector('#petBreed');
        const petHeight = document.querySelector('#petHeight');
        const petWeight = document.querySelector('#petWeight');
        const petMedication = document.querySelector('#petMedication');
        const petLastVisitDate = document.querySelector('#lastVisitDate');
        const petLastVisitNotes = document.querySelector('#notesFromLastVisit');

        petName.value = currentPet.name;
        petBirthdate.value = currentPet.birthday;
        petVisitDate.value = currentPet.nextVetDate;
        petVisitTime.value = currentPet.nextVetTime;
        document.getElementById('petBreed').value = currentPet.breed;
        petHeight.value = currentPet.height;
        petWeight.value = currentPet.weight;
        petMedication.value = currentPet.medication;
        petLastVisitDate.value = currentPet.lastVetDate;
        petLastVisitNotes.value = currentPet.lastVetNotes;

        let cancelFormButton = document.querySelector('#cancelFormButton');
        cancelFormButton.remove();

        cancelFormButton = document.createElement("button");
        cancelFormButton.innerHTML = "Cancel";
        const newPetForm = document.querySelector('#newPetForm');
        newPetForm.append(cancelFormButton);
        cancelFormButton.id = "cancelFormButton";

        cancelFormButton.addEventListener('click', event => {
            this.showPetDetails(petToGet);
        });
    }

    updatePet(petToGet) {
        this.processPetData();
        let petArray = this.petModel.getPets();

        const petToChange = petArray.findIndex(x => x.name === petToGet);

        petArray[petToChange] = this.pet;
        this.petModel.savePetArray(petArray);

        alert(`${this.pet.name} was updated successfully!`);

    }
}
