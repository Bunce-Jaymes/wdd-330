let todoListItemsArray = JSON.parse(localStorage.getItem("toDoList"));

console.log(todoListItemsArray);

function showList() {
    const listOfTasks = document.querySelector('#listOfItemsToDo');

    let child = listOfTasks.lastElementChild;

    while (child) {
        listOfTasks.removeChild(child);
        child = listOfTasks.lastElementChild;
    };

    if (todoListItemsArray !== null) {
        for (let i = 0; i < todoListItemsArray.length; i++) {
            const listItem = document.createElement("li");
            const listItemInput = document.createElement("input");
            const listItemLabel = document.createElement("label");
            const listItemButton = document.createElement("button");

            listItemInput.setAttribute('type', 'checkbox')
            listItem.classList.add('Item');
            listItemButton.classList.add('todoButton');


            listItemLabel.innerHTML = todoListItemsArray[i].content;
            listItemButton.innerHTML = "X";

            listItem.appendChild(listItemInput);
            listItem.appendChild(listItemLabel);
            listItem.appendChild(listItemButton);

            listOfTasks.appendChild(listItem);
        }

        totalTasks();
        saveList();
        document.querySelector('#allTasksButton').classList.add('currentFiliter');
    }
};

function addItemToList() {
    let newItemText = document.querySelector('#newItemInput').value;

    if (todoListItemsArray !== null) {
        todoListItemsArray.push({
            id: Date.now(),
            content: newItemText,
            completed: false
        });
    }
    if (todoListItemsArray === null) {
        todoListItemsArray = [];
        todoListItemsArray.push({
            id: Date.now(),
            content: newItemText,
            completed: false
        });
    }

    document.querySelector('#newItemInput').value = '';

    showList();
};

function totalTasks() {
    const totalTaskNumber = document.querySelector('#tasksLeft');
    const lengthOfList = todoListItemsArray.length;
    totalTaskNumber.innerHTML = `${lengthOfList} tasks total`;
}

function saveList() {
    localStorage.setItem("toDoList", JSON.stringify(todoListItemsArray));
}

const addButton = document.querySelector('#addNewItem');
addButton.addEventListener('click', addItemToList);

showList();
