/**  function for save the note
 * @description - Method to add notes to the notebook
 *
 * Step 01 - Get the title & description element
 * Step 02 - Check if the following element doesn't exist
 * Step 2.1- If true, show error & return
 * Step 03 - Get the value of title & description
 * Step 04 - Check if title is empty
 * Step 4.1- Show Error for title field & return
 * Step 05 - Check if description is empty
 * Step 5.1- Show Error for description field & return
 * Step 06 - Get notes from localstorage
 * Step 07 - Check if notes === null
 * Step 7.1- If true, then create a new notebook array & update the localstorage
 * Step 7.2- Reset the form & return
 * Step 08 - Push the current note in notebook array
 * Step 09 - Save into local storage & reset the form
 */

let activeNote = null;

/** Function for saving note */
function saveNote(cancel) {
  if (cancel) {
    // console.log("discard");
    document.getElementById("discardNotes").style.display = "none";
    clearNotes();
    displayNotes();
    document.getElementById("notesOption").style.gap = "9.3em";
    document.getElementById("savedTag").innerHTML = "";
    return;
  }
  if (activeNote !== null) {
    deleteNotes(activeNote);
  }

  // Step 01
  const title = document.getElementById("notesTitle");
  const description = document.getElementById("notesDescription");
  const savedTag = document.getElementById("savedTag");
  const savedTagValue = savedTag.innerHTML;

  // Step 02
  if (!title) {
    return "Title element is missing";
  }
  if (!description) {
    return "Description element is missing";
  }

  // Step 03
  const titleValue = title.value.trim();
  const descriptionValue = description.value.trim();

  // Step 04
  if (!titleValue) {
    return alert("Title is missing");
  }

  // Step 05
  if (!descriptionValue) {
    return alert("Description is missing");
  }

  // Step 06
  let notes = JSON.parse(localStorage.getItem("notes"));

  // Step 07
  if (notes === null) {
    notes = [
      {
        title: titleValue,
        description: descriptionValue,
        tag: savedTagValue,
        bookmarkStatus: "",
      },
    ];
  }

  // Step 08
  else {
    notes.push({
      title: titleValue,
      description: descriptionValue,
      tag: savedTagValue,
      bookmarkStatus: "",
    });
  }

  // Step 09
  localStorage.setItem("notes", JSON.stringify(notes));
  title.value = "";
  description.value = "";
  savedTag.innerHTML = "";
  document.getElementById("notesOption").style.gap = "9.3em";

  displayNotes();
  activeNote = null;
  document.getElementById("discardNotes").style.display = "none";
  // console.log(document.getElementById("discardNotes"));
  return;
}

/**
 * function for showing the saved notes.
 * Step 01 - Create a separate field for showing the saved notes - Notes
 * Step 1.1- Create a separate div for title and description inside Notes.
 * Step 02 - Get the saved notes data from local storage by JSON.parse.
 * Step 02 - Saved the title and description of saved notes in the title and description div of Notes.
 */

/** function for display notes */
function displayNotes() {
  document.getElementById("form").style.display = "flex";

  const notesContainer = document.getElementById("savedNotes");
  notesContainer.innerHTML = null;
  const notesList = JSON.parse(localStorage.getItem("notes")) || [];
  const fragmentContainer = document.createDocumentFragment();
  const notesLengthForArray = notesList.length - 1;

  for (let i = notesLengthForArray; i >= 0; i--) {
    const { title, description, tag, bookmarkStatus } = notesList[i];
    const divContainer = document.createElement("div");
    const bookmarkClass = bookmarkStatus ? "bxs-bookmark-star" : "bx-bookmark";
    divContainer.innerHTML = `<div class="savedNotes">
      <div class="savedNotesFirst">
      <textarea id="savedNotesTitle" >${title}</textarea><i class='bx ${bookmarkClass}'  id="pinBtnInDisplay" onClick="bookmark(${i})"></i></div>
      <textarea id="savedNotesDescription" class="${i}" >${description}</textarea>
      <div class="SavedNotesThirdSection">
      <div id="savedNotesIcon" class="savedNotesIcon">
      <p><i class='bx bx-user-plus' ></i> </p>
      <p><i class='bx bx-palette'></i> </p>
      <p><i class='bx bx-undo' ></i>  </p>
      <p><i class='bx bx-redo' ></i></p>
      <div id='noteTag'>${tag}</div>
      </div>
      <div class="editAndDeleteSection">
      <div class="editBtn"   onClick="editNotes(${i})"><i class='bx bx-edit'></i></div>
      <div class="DeleteBtn" onClick="deleteNotes(${i})" ><i class='bx bx-trash'></i></div>
      </div>
      </div>
      </div>`;

    fragmentContainer.appendChild(divContainer);
  }
  notesContainer.appendChild(fragmentContainer);
}
displayNotes();
/**Function for delete note */
function deleteNotes(item) {
  const notes = JSON.parse(localStorage.getItem("notes"));
  let trash = JSON.parse(localStorage.getItem("trash"));

  const { title, description, tag, bookmarkStatus } = notes[item];
  if (trash === null) {
    trash = [
      {
        title: title,
        description: description,
        tag: tag,
        bookmarkStatus: bookmarkStatus,
      },
    ];
  } else {
    trash.push({
      title: title,
      description: description,
      tag: tag,
      bookmarkStatus: bookmarkStatus,
    });
  }

  notes.splice(item, 1);
  localStorage.setItem("notes", JSON.stringify(notes));

  localStorage.setItem("trash", JSON.stringify(trash));

  displayNotes();
}

/**function for edit note*/
function editNotes(i) {
  const notes = JSON.parse(localStorage.getItem("notes"));
  const { title, description, tag } = notes[i];
  const titleForEdit = document.getElementById("notesTitle");
  const descriptionForEdit = document.getElementById("notesDescription");
  const tagForEdit = document.getElementById("savedTag");

  if (titleForEdit.value !== "") {
    alert("Already a note is pending for editing");
    return;
  }

  titleForEdit.value = title;
  descriptionForEdit.value = description;
  tagForEdit.innerHTML = tag;
  activeNote = i;
  document.getElementById("notesOption").style.gap = "1.8em";
  document.getElementById("discardNotes").style.display = "flex";
  displayNotes();
}

function clearNotes() {
  let noteTitle = document.getElementById("notesTitle");
  let notesDescription = document.getElementById("notesDescription");

  noteTitle.value = null;
  notesDescription.value = null;
}
