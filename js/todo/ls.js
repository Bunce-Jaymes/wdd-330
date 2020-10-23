export default class saveOrGetToLocal {
    saveList(todoListArray) {
        localStorage.setItem("toDoList", JSON.stringify(todoListArray));
    }
    
    getList(){
        let passedArray = [];
        passedArray = JSON.parse(localStorage.getItem("toDoList"));
        return passedArray;
    }
    
    saveFilter(value) {
        localStorage.setItem("filter", value);
    }
    
    getFilter() {
        return localStorage.getItem("filter");
    }
}
