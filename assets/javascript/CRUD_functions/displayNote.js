/**
 * function for showing the saved notes.
 * Step 01 - Create a separate field for showing the saved notes - Notes
 * Step 1.1- Create a separate div for title and description inside Notes.
 * Step 02 - Get the saved notes data from local storage by JSON.parse.
 * Step 02 - Saved the title and description of saved notes in the title and description div of Notes.
 */

/** function for display notes */
function displayNotes() {
  const notesContainer = document.getElementById("savedNotes");
  notesContainer.innerHTML = null;
  const notesList = JSON.parse(localStorage.getItem("notes")) || [];
  const fragmentContainer = document.createDocumentFragment();
  const notesLengthForArray = notesList.length - 1;

  for (let i = notesLengthForArray; i >= 0; i--) {
    const { title, description, tag } = notesList[i];
    const divContainer = document.createElement("div");

    divContainer.innerHTML = `<div class="savedNotes">
      <div class="savedNotesFirst">
      <textarea id="savedNotesTitle" >${title}</textarea>
      <i class='bx bx-pin' id="pinBtn" onClick="bookmark(${i})"></i>
      </div>
      <textarea id="savedNotesDescription" class="${i}" >${description}</textarea>
      <div class="SavedNotesThirdSection">
      <div id="savedNotesIcon">
      <p><i class='bx bx-user-plus' ></i> </p>
      <p><i class='bx bx-palette'></i> </p>
      <p><i class='bx bx-undo' ></i>  </p>
      <p><i class='bx bx-redo' ></i></p>
      <div id='noteTag'>${tag}</div>
      </div>
      <div class="editAndDeleteSection">
      <div class="editBtn" id="editBtn" onClick="editNotes(${i})"><i class='bx bx-edit'></i></div>
      <div class="DeleteBtn" onClick="deleteNotes(${i})" ><i class='bx bx-trash'></i></div>
      </div>
      </div>
      </div>`;

    fragmentContainer.appendChild(divContainer);
  }
  notesContainer.appendChild(fragmentContainer);
}

/**Function for delete note */
function deleteNotes(item) {
  const notes = JSON.parse(localStorage.getItem("notes"));
  const { title, description } = notes[item];

  notes.splice(item, 1);
  localStorage.setItem("notes", JSON.stringify(notes));

  displayNotes();
}

/**function for edit note*/
function editNotes(i) {
  console.log("edit");
  const notes = JSON.parse(localStorage.getItem("notes"));
  const { title, description } = notes[i];
  let titleForEdit = document.getElementById("notesTitle");
  let descriptionForEdit = document.getElementById("notesDescription");
  if (titleForEdit.value !== "") {
    alert("Already a note is pending for editing");
    return;
  }
  titleForEdit.value = title;
  descriptionForEdit.value = description;
  console.log("delete");

  deleteNotes(i);
  displayNotes();
}
