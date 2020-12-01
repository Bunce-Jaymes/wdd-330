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
        this.formEventListener;
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

        const editImgs = document.querySelectorAll('.editIcon');
        console.log('editImgs', editImgs);

        for (let j = 0; j < editImgs.length; j++) {
            editImgs[j].addEventListener('click', event => {
                const clickedItem = event.srcElement;
                const petNameToGet = (clickedItem.previousElementSibling).innerHTML;
                console.log('petNameToGet', petNameToGet);

                this.editSavedPet(petNameToGet);
            });
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

   async addPet() {
        this.petView.showAddPetView(this.mainDisplayElement);

        await this.petModel.getBreedInfoFromAPI("https://api.thedogapi.com/v1/breeds").then(data => {

            const dropdownBox = document.querySelector('#petBreed');

            for (let i = 0; i < data.length; i++) {
                const option = document.createElement('option');

                option.innerHTML = data[i].name;
                option.value = data[i].name;
                dropdownBox.append(option);
            }
        });
       
       const listener = (e) => { this.processPetData();};
       
        const formElement = document.querySelector('#newPetForm');
        formElement.addEventListener('submit', listener);
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
        
        const petInfoArray = [petName, petBirthdate, petVisitDate, petVisitTime, petBreed, petHeight, petWeight, petMedication];
        
        return petInfoArray;
    }
    
    processPetData() {
        const petInfoarray = this.retrieveFormInfo();
        
        this.pet.name = petInfoarray[0];
        this.pet.birthday = petInfoarray[1];
        this.pet.nextVetDate = petInfoarray[2];
        this.pet.nextVetTime = petInfoarray[3];
        this.pet.breed = petInfoarray[4];
        this.pet.height = petInfoarray[5];
        this.pet.weight = petInfoarray[6];
        this.pet.medication = petInfoarray[7];
        
        this.petModel.savePet(this.pet);

        alert(`${this.pet.name} was added successfully`);
    }

    async editSavedPet(petToGet) {
        const petsArray = this.petModel.getPets();
        const currentPet = petsArray.find(p => p.name === petToGet);
        console.log('currentPet', currentPet);


        await this.addPet();

        const petName = document.querySelector('#petName');
        const petBirthdate = document.querySelector('#petBirthdate');
        const petVisitDate = document.querySelector('#petVisitDate');
        const petVisitTime = document.querySelector('#petVisitTime');
        const petBreed = document.querySelector('#petBreed');
        const petHeight = document.querySelector('#petHeight');
        const petWeight = document.querySelector('#petWeight');
        const petMedication = document.querySelector('#petMedication');

        petName.value = currentPet.name;
        petBirthdate.value = currentPet.birthday;
        petVisitDate.value = currentPet.nextVetDate;
        petVisitTime.value = currentPet.nextVetTime;
        document.getElementById('petBreed').value = currentPet.breed;
        petHeight.value = currentPet.height;
        petWeight.value = currentPet.weight;
        petMedication.value = currentPet.medication;
        
        const formElement = document.querySelector('#newPetForm');
        
        const listener = (e) => { this.processPetData();};
        
        formElement.removeEventListener('submit', (e) => { this.processPetData();});
    }
}
