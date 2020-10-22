let todoListItemsArray = JSON.parse(localStorage.getItem("toDoList"));
let filiterValue = "";

function showList(filiterValue) {
    const listOfTasks = document.querySelector('#listOfItemsToDo');

    //deletes everything in list 
    let child = listOfTasks.lastElementChild;
    while (child) {
        listOfTasks.removeChild(child);
        child = listOfTasks.lastElementChild;
    }

    if (filiterValue === "all") {
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
                listItemInput.addEventListener('change', checkComplete);
                //delete button
                listItemButton.classList.add('todoButton');
                listItemButton.addEventListener('click', deleteItem);
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

            document.querySelector('#allTasksButton').classList.add('currentFiliter');
            document.querySelector('#allCurrentButton').classList.remove('currentFiliter');
            document.querySelector('#allCompletedButton').classList.remove('currentFiliter');
        }
    }

    if (filiterValue === "current") {
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
                    listItemInput.addEventListener('change', checkComplete);
                    //delete button
                    listItemButton.classList.add('todoButton');
                    listItemButton.addEventListener('click', deleteItem);
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

            document.querySelector('#allCurrentButton').classList.add('currentFiliter');
            document.querySelector('#allTasksButton').classList.remove('currentFiliter');
            document.querySelector('#allCompletedButton').classList.remove('currentFiliter');
        }
    }


    if (filiterValue === "completed") {
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
                    listItemInput.addEventListener('change', checkComplete);
                    //delete button
                    listItemButton.classList.add('todoButton');
                    listItemButton.addEventListener('click', deleteItem);
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

            document.querySelector('#allCompletedButton').classList.add('currentFiliter');
            document.querySelector('#allTasksButton').classList.remove('currentFiliter');
            document.querySelector('#allCurrentButton').classList.remove('currentFiliter');
        }
    }


    totalTasks();
    saveList();
}

function addItemToList() {
    let newItemText = document.querySelector('#newItemInput').value;

    if (todoListItemsArray !== null) {
        todoListItemsArray.push({
            id: String(Date.now()),
            content: newItemText,
            completed: false
        });
    }
    if (todoListItemsArray === null) {
        todoListItemsArray = [];
        todoListItemsArray.push({
            id: String(Date.now()),
            content: newItemText,
            completed: false
        });
    }

    document.querySelector('#newItemInput').value = '';

    showList(filiterValue);
}

function totalTasks() {
    const ulList = document.querySelector('#listOfItemsToDo');
    const count = document.querySelector('#tasksLeft');

    const lengthOfList = ulList.childElementCount;

    if (lengthOfList === null) {
        count.innerHTML = `0 tasks total`;
    } else {
        count.innerHTML = `${lengthOfList} tasks total`;
    }
}

function saveList() {
    localStorage.setItem("toDoList", JSON.stringify(todoListItemsArray));
}

function deleteItem() {
    const buttonClicked = event.currentTarget;

    let idToBeDeleted = buttonClicked.parentElement.lastElementChild;
    idToBeDeleted = String(idToBeDeleted.value);

    let removeIndex = todoListItemsArray.map(function (item) {
        return item.id;
    }).indexOf(idToBeDeleted);

    todoListItemsArray.splice(removeIndex, 1);

    saveList();
    showList(filiterValue);
}

function checkComplete() {
    const checkboxClicked = event.currentTarget;

    if (checkboxClicked.checked) {
        const itemToBeCrossed = checkboxClicked.parentElement.children.item(1);
        itemToBeCrossed.classList.add("taskComplete");
        checkboxClicked.parentElement.classList.add("taskComplete");

        let idToBeCompleted = checkboxClicked.parentElement.lastElementChild;
        idToBeCompleted = String(idToBeCompleted.value);

        let completeIndex = todoListItemsArray.map(function (item) {
            return item.id;
        }).indexOf(idToBeCompleted);

        todoListItemsArray[completeIndex].completed = true;

        saveList();
        showList(filiterValue);

    } else {
        const itemToBeCrossed = checkboxClicked.parentElement.children.item(1);
        itemToBeCrossed.classList.remove("taskComplete");
        checkboxClicked.parentElement.classList.remove("taskComplete");

        let idToBeCompleted = checkboxClicked.parentElement.lastElementChild;
        idToBeCompleted = String(idToBeCompleted.value);

        let completeIndex = todoListItemsArray.map(function (item) {
            return item.id;
        }).indexOf(idToBeCompleted);

        todoListItemsArray[completeIndex].completed = false;

        saveList();
        showList(filiterValue);
    }
}

function changeFiliter() {
    let filiterClicked = event.currentTarget;
    filiterClicked = String(filiterClicked.id);

    switch (filiterClicked) {
        case "allCurrentButton":
            filiterValue = "current";
            break;

        case "allCompletedButton":
            filiterValue = "completed";
            break;

        case "allTasksButton":
            filiterValue = "all";
            break;
    }

    showList(filiterValue);

}

window.addEventListener("load", () => {
    const addButton = document.querySelector('#addNewItem');
    addButton.addEventListener('click', addItemToList);

    const allButton = document.querySelector('#allTasksButton');
    allButton.addEventListener('click', changeFiliter);

    const currentButton = document.querySelector('#allCurrentButton');
    currentButton.addEventListener('click', changeFiliter);

    const completeButton = document.querySelector('#allCompletedButton');
    completeButton.addEventListener('click', changeFiliter);

    filiterValue = "all";

    showList(filiterValue);
});
