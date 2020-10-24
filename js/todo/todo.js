import saveFile from './ls.js';
const saveOrGetObject = new saveFile();

import utilitiesFile from './utilities.js';
const utilitiesObject = new utilitiesFile();

function showList() {
    let todoListItemsArray = saveOrGetObject.getList();
    const filterValue = saveOrGetObject.getFilter();
    const listOfTasks = document.querySelector('#listOfItemsToDo');

    //deletes everything in list 
    let child = listOfTasks.lastElementChild;
    while (child) {
        listOfTasks.removeChild(child);
        child = listOfTasks.lastElementChild;
    }

    if (filterValue === "all") {
        if (todoListItemsArray !== null) {
            for (let i = 0; i < todoListItemsArray.length; i++) {
                const listItem = document.createElement("li");
                const listItemInput = document.createElement("input");
                const listItemID = document.createElement("data");
                const listItemLabel = document.createElement("label");
                const listItemButton = document.createElement("button");
                //Add class to set formating of list item
                listItem.classList.add('Item');
                //checkbox
                listItemInput.setAttribute('type', 'checkbox');
                listItemInput.addEventListener('change', utilitiesObject.checkComplete);
                listItemInput.addEventListener('change', showList);
                //delete button
                listItemButton.classList.add('todoButton');
                listItemButton.addEventListener('click', utilitiesObject.deleteItem);
                listItemButton.addEventListener('click', showList);
                listItemButton.innerHTML = "X";
                //id
                listItemID.setAttribute('value', todoListItemsArray[i].id);
                listItemID.classList.add('hidden');
                //todo item text
                listItemLabel.innerHTML = todoListItemsArray[i].content;

                if (todoListItemsArray[i].completed === true) {
                    listItemLabel.classList.add('taskComplete');
                    listItem.classList.add('taskComplete');
                    listItemInput.checked = true;
                }

                //Adding them all together
                listItem.appendChild(listItemInput);
                listItem.appendChild(listItemLabel);
                listItem.appendChild(listItemButton);
                listItem.appendChild(listItemID);
                listOfTasks.appendChild(listItem);
            }

            document.querySelector('#allTasksButton').classList.add('currentFilter');
            document.querySelector('#allCurrentButton').classList.remove('currentFilter');
            document.querySelector('#allCompletedButton').classList.remove('currentFilter');
        }
    }

    if (filterValue === "current") {
        if (todoListItemsArray !== null) {
            for (let i = 0; i < todoListItemsArray.length; i++) {

                if (todoListItemsArray[i].completed === false) {
                    const listItem = document.createElement("li");
                    const listItemInput = document.createElement("input");
                    const listItemID = document.createElement("data");
                    const listItemLabel = document.createElement("label");
                    const listItemButton = document.createElement("button");
                    //Add class to set formating of list item
                    listItem.classList.add('Item');
                    //checkbox
                    listItemInput.setAttribute('type', 'checkbox');
                    listItemInput.addEventListener('change', utilitiesObject.checkComplete);
                    listItemInput.addEventListener('change', showList);
                    //delete button
                    listItemButton.classList.add('todoButton');
                    listItemButton.addEventListener('click', utilitiesObject.deleteItem);
                    listItemButton.addEventListener('click', showList);
                    listItemButton.innerHTML = "X";
                    //id
                    listItemID.setAttribute('value', todoListItemsArray[i].id);
                    listItemID.classList.add('hidden');
                    //todo item text
                    listItemLabel.innerHTML = todoListItemsArray[i].content;

                    if (todoListItemsArray[i].completed === true) {
                        listItemLabel.classList.add('taskComplete');
                        listItem.classList.add('taskComplete');
                        listItemInput.checked = true;
                    }

                    //Adding them all together
                    listItem.appendChild(listItemInput);
                    listItem.appendChild(listItemLabel);
                    listItem.appendChild(listItemButton);
                    listItem.appendChild(listItemID);
                    listOfTasks.appendChild(listItem);
                }
            }

            document.querySelector('#allCurrentButton').classList.add('currentFilter');
            document.querySelector('#allTasksButton').classList.remove('currentFilter');
            document.querySelector('#allCompletedButton').classList.remove('currentFilter');
        }
    }


    if (filterValue === "completed") {
        if (todoListItemsArray !== null) {
            for (let i = 0; i < todoListItemsArray.length; i++) {

                if (todoListItemsArray[i].completed === true) {
                    const listItem = document.createElement("li");
                    const listItemInput = document.createElement("input");
                    const listItemID = document.createElement("data");
                    const listItemLabel = document.createElement("label");
                    const listItemButton = document.createElement("button");
                    //Add class to set formating of list item
                    listItem.classList.add('Item');
                    //checkbox
                    listItemInput.setAttribute('type', 'checkbox');
                    listItemInput.addEventListener('change', utilitiesObject.checkComplete);
                    listItemInput.addEventListener('change', showList);
                    //delete button
                    listItemButton.classList.add('todoButton');
                    listItemButton.addEventListener('click', utilitiesObject.deleteItem);
                    listItemButton.innerHTML = "X";
                    listItemButton.addEventListener('click', showList);
                    //id
                    listItemID.setAttribute('value', todoListItemsArray[i].id);
                    listItemID.classList.add('hidden');
                    //todo item text
                    listItemLabel.innerHTML = todoListItemsArray[i].content;

                    if (todoListItemsArray[i].completed === true) {
                        listItemLabel.classList.add('taskComplete');
                        listItem.classList.add('taskComplete');
                        listItemInput.checked = true;
                    }

                    //Adding them all together
                    listItem.appendChild(listItemInput);
                    listItem.appendChild(listItemLabel);
                    listItem.appendChild(listItemButton);
                    listItem.appendChild(listItemID);
                    listOfTasks.appendChild(listItem);
                }
            }

            document.querySelector('#allCompletedButton').classList.add('currentFilter');
            document.querySelector('#allTasksButton').classList.remove('currentFilter');
            document.querySelector('#allCurrentButton').classList.remove('currentFilter');
        }
    }


    utilitiesObject.totalTasks();
}

window.addEventListener("load", () => {
    const addButton = document.querySelector('#addNewItem');
    addButton.addEventListener('click', utilitiesObject.addItemToList);
    addButton.addEventListener('click', showList);

    const allButton = document.querySelector('#allTasksButton');
    allButton.addEventListener('click', utilitiesObject.changeFilter);
    allButton.addEventListener('click', showList);

    const currentButton = document.querySelector('#allCurrentButton');
    currentButton.addEventListener('click', utilitiesObject.changeFilter);
    currentButton.addEventListener('click', showList);

    const completeButton = document.querySelector('#allCompletedButton');
    completeButton.addEventListener('click', utilitiesObject.changeFilter);
    completeButton.addEventListener('click', showList);
    
    const removeLocalButton = document.querySelector('#removeAllSaved');
    removeLocalButton.addEventListener('click', utilitiesObject.clearLocal);
    removeLocalButton.addEventListener('click', showList);
    
    const filter= saveOrGetObject.getFilter();
    
    if (filter === null){
        saveOrGetObject.saveFilter("all");
    }

    showList();
});
