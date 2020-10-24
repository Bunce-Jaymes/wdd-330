import saveFile from './ls.js';
const saveOrGetObject = new saveFile();

export default class utilities {

    totalTasks() {
        const ulList = document.querySelector('#listOfItemsToDo');
        const count = document.querySelector('#tasksLeft');

        const lengthOfList = ulList.childElementCount;

        if (lengthOfList === null) {
            count.innerHTML = `0 tasks total`;
        } else {
            count.innerHTML = `${lengthOfList} tasks total`;
        }
    }

    checkComplete() {
        let todoListItemsArray = saveOrGetObject.getList();
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

            saveOrGetObject.saveList(todoListItemsArray);

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

            saveOrGetObject.saveList(todoListItemsArray);

        }
    }

    deleteItem() {
        let todoListItemsArray = saveOrGetObject.getList();
        const buttonClicked = event.currentTarget;

        let idToBeDeleted = buttonClicked.parentElement.lastElementChild;
        idToBeDeleted = String(idToBeDeleted.value);

        let removeIndex = todoListItemsArray.map(function (item) {
            return item.id;
        }).indexOf(idToBeDeleted);

        todoListItemsArray.splice(removeIndex, 1);

        saveOrGetObject.saveList(todoListItemsArray);
    }

    addItemToList() {
        let todoListItemsArray = saveOrGetObject.getList();
        let newItemText = document.querySelector('#newItemInput').value;

        newItemText = newItemText.trim();

        console.log(newItemText);

        if (newItemText !== "") {
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

            saveOrGetObject.saveList(todoListItemsArray);
            document.querySelector('#newItemInput').value = '';
        } else {
            alert("Todo item is blank, please make sure you add text");
            document.querySelector('#newItemInput').value = '';
        }
    }

    changeFilter() {
        let filterClicked = event.currentTarget;
        filterClicked = String(filterClicked.id);

        switch (filterClicked) {
            case "allCurrentButton":
                saveOrGetObject.saveFilter("current");
                break;

            case "allCompletedButton":
                saveOrGetObject.saveFilter("completed");
                break;

            case "allTasksButton":
                saveOrGetObject.saveFilter("all");
                break;
        }
    }

    clearLocal() {
        const test = confirm("This will remove all your to-do items permanently, would you like to continue?")

        if (test === true) {
            localStorage.clear();
        }
    }
}
