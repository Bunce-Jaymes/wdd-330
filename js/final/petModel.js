import getOrSetLocalStorage from './getOrSetLocalStorage.js';

export default class petModel{
    constructor(){
        this.ls = new getOrSetLocalStorage();
    }
    
    savePet(petToAdd){
        let currentPetArray = this.ls.getLocalStorage();
        
        if (currentPetArray === null){
            currentPetArray = [];
        }
        
        currentPetArray.push(petToAdd);
        
        this.ls.setLocalStorage(currentPetArray);  
    }
    
    getPets(){
        let petArray = this.ls.getLocalStorage();
        
        if (petArray === null){
            petArray = [];
        }
        
        return petArray;  
    }  
}