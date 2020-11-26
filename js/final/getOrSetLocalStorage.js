export default class getOrSetLocalStorage {
    
    getLocalStorage(){
        let passedArray = [];
        passedArray = JSON.parse(localStorage.getItem("Perfect-Paws-Pets"));
        return passedArray;
    }
    
    setLocalStorage(petArrayToSave){
        localStorage.setItem("Perfect-Paws-Pets", JSON.stringify(petArrayToSave));
    }
    
}