function addNote() {
    let noteInput = document.getElementById("noteInput");
    let notesContainer = document.getElementById("notesContainer");

    if (noteInput.value.trim() === "") {
        alert("Please write something!");
        return;
    }

    let note = document.createElement("div");
    note.className = "note";
    note.innerHTML = `<span>${noteInput.value}</span> <button onclick="this.parentElement.remove()">X</button>`;
    
    notesContainer.appendChild(note);
    noteInput.value = "";
}