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

        const addPetButton = document.querySelector('#addPetButton')
        const removeAllPetsButton = document.querySelector('#removePetsButton');

        removeAllPetsButton.addEventListener('click', a => {
            this.removeAllPets();
        });

        addPetButton.addEventListener('click', e => {
            this.addPet();
        });

        const petArray = this.petModel.getPets();

        this.petView.showAllPetsList(petArray, this.petListElement);

        let liItems = document.querySelectorAll('li');

        for (let i = 0; i < liItems.length; i++) {
            const liItemChildern = liItems[i].children;
            const pItem = liItemChildern[0];

            pItem.addEventListener('click', event => {
                const petNameHTML = (event.srcElement).innerHTML;
                this.showPetDetails(petNameHTML);
            })
        }
    }

    showPetDetails(petName) {
        const petsArray = this.petModel.getPets();
        const currentPet = petsArray.find(p => p.name === petName);

        this.petView.showPetDetails(currentPet, this.mainDisplayElement);

        this.petModel.getBreedInfoFromAPI("https://api.thedogapi.com/v1/breeds").then(data => {
            const breedData = data.find(e => e.name === currentPet.breed);
            this.petView.showBreedDetails(breedData);
        });
        this.backButton();
    }

    removeAllPets() {
        const check = confirm("This remove all of your pets and their data. This will be permanent, are you sure?");

        if (check === true) {
            localStorage.clear();
            location.reload();
        }
    }

    addPet() {
        this.petView.showAddPetView(this.mainDisplayElement);

        this.petModel.getBreedInfoFromAPI("https://api.thedogapi.com/v1/breeds").then(data => {
            console.log(data);
            console.log(data[0]);

            const dropdownBox = document.querySelector('#petBreed');

            for (let i = 0; i < data.length; i++) {
                const option = document.createElement('option');

                option.innerHTML = data[i].name;
                option.value = data[i].name;
                dropdownBox.append(option);
            }
        });

        const formElement = document.querySelector('#newPetForm');
        formElement.addEventListener('submit', ex => {
            this.processPetData();
        })
    }

    backButton() {
        const backButton = document.querySelector('#backToAllPetsButton');

        backButton.addEventListener('click', function () {
            location.reload();
        });
    }

    processPetData() {
        const petName = document.querySelector('#petName').value;
        const petBirthdate = document.querySelector('#petBirthdate').value;
        const petVisitDate = document.querySelector('#petVisitDate').value;
        const petVisitTime = document.querySelector('#petVisitTime').value;
        const petBreed = document.querySelector('#petBreed').value;
        const petHeight = document.querySelector('#petHeight').value;
        const petWeight = document.querySelector('#petWeight').value;
        const petMedication = document.querySelector('#petMedication').value;

        console.log(petName, petBirthdate, petVisitDate, petVisitTime, petBreed, petHeight, petWeight, petMedication);

        this.pet.name = petName;
        this.pet.birthday = petBirthdate;
        this.pet.nextVetDate = petVisitDate;
        this.pet.nextVetTime = petVisitTime;
        this.pet.breed = petBreed;
        this.pet.height = petHeight;
        this.pet.weight = petWeight;
        this.pet.medication = petMedication;

        console.log(this.pet);

        this.petModel.savePet(this.pet);

        alert(`${this.pet.name} was added successfully`);
    }
}