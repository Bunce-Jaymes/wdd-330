function editNote(){
    let noteLoadName = document.getElementById("noteName").value;
    let noteHTML = localStorage.getItem(noteLoadName);
    document.getElementById("noteDetails").value = noteHTML;
}

function saveNote(){
    let noteSaveName = document.getElementById("noteName").value;
    let noteHTML = document.getElementById("noteDetails").value;
    localStorage.setItem(noteSaveName, noteHTML);
}

function clearNotes(){
    localStorage.clear();
}

let noteNames = Object.entries(localStorage);
noteNames.sort();

const noteList = document.getElementById("localNotes");

for (let i = 0; i < noteNames.length; i++) {
    let listItem = document.createElement("li");

    listItem.innerHTML = noteNames[i][0];
    
    noteList.appendChild(listItem);
}