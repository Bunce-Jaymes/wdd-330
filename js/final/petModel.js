import getOrSetLocalStorage from './getOrSetLocalStorage.js';

export default class petModel {
    constructor() {
        this.ls = new getOrSetLocalStorage();
    }

    savePet(petToAdd) {
        let currentPetArray = this.ls.getLocalStorage();

        if (currentPetArray === null) {
            currentPetArray = [];
        }

        currentPetArray.push(petToAdd);

        this.ls.setLocalStorage(currentPetArray);
    }

    getPets() {
        let petArray = this.ls.getLocalStorage();

        if (petArray === null) {
            petArray = [];
        }

        return petArray;
    }

    async getBreedInfoFromAPI(url) {
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
}
