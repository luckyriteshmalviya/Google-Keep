/**function for slide menu of Right-side*/
function onClickMenu() {
  document.getElementById("menu").classList.toggle("change");
  const sidebarList = document.getElementById("side-bar");
  const children_ic = sidebarList.querySelectorAll(".list_items");
  const children_text = sidebarList.querySelectorAll(".slide-text");

  for (let i = 0; i < children_text.length; i++) {
    children_text[i].classList.toggle("d-none");
  }

  for (let i = 0; i < children_ic.length; i++) {
    children_ic[i].classList.toggle("list_items_new");
  }
}

/**IIFE function for welcome message */
// (() => {
//   alert("Welcome to the Google keep created by Ritesh malviya");
// })();

/** Function for saving note */
function saveNote() {
  // Step 01
  const title = document.getElementById("notes_title");
  const description = document.getElementById("notes_description");

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
    notes = [{ title: titleValue, description: descriptionValue }];
  }

  // Step 08
  else {
    notes.push({ title: titleValue, description: descriptionValue });
  }

  // Step 09
  localStorage.setItem("notes", JSON.stringify(notes));
  title.value = "";
  description.value = "";
  return;
}

/** function for display notes */
function displayNotes() {
  const notesContainer = document.getElementById("savedNotes");
  notesContainer.innerHTML = null;
  const notesList = JSON.parse(localStorage.getItem("notes")) || [];
  const fragmentContainer = document.createDocumentFragment();
  const notesLengthForArray = notesList.length - 1;

  for (let i = notesLengthForArray; i >= 0; i--) {
    const { title, description } = notesList[i];
    const divContainer = document.createElement("div");

    divContainer.innerHTML = `<div class="savedNotes">
    <div class="savedNotesFirst">
    <textarea id="savedNotesTitle" >${title}</textarea>
    <i class='bx bx-pin' ></i>
    </div>
    <textarea id="savedNotesDescription" class="${i}" >${description}</textarea>
    <div class="SavedNotesThirdSection">
    <div id="savedNotesIcon">
    <p><i class='bx bxs-bell-plus' ></i></p>
    <p><i class='bx bx-user-plus' ></i> </p>
    <p><i class='bx bx-palette'></i> </p>
    <p><i class='bx bx-image-alt' ></i> </p>
    <p><i class='bx bx-archive-in' ></i> </p>
    <p><i class='bx bx-dots-vertical-rounded' ></i> </p>
    <p><i class='bx bx-undo' ></i>  </p>
    <p><i class='bx bx-redo' ></i></p>
    </div>
    <button class="editBtn" onClick="editNotes(${i})">EDIT</button>
    <button class="DeleteBtn" onClick="deleteNotes(${i})" >DELETE</button>
    </div>
    </div>`;

    fragmentContainer.appendChild(divContainer);
  }
  notesContainer.appendChild(fragmentContainer);
}

/**function for edit note*/
function editNotes(i) {
  const notes = JSON.parse(localStorage.getItem("notes"));
  const { title, description } = notes[i];
  // console.log(title);
  let titleForEdit = document.getElementById("notes_title");
  let descriptionForEdit = document.getElementById("notes_description");
  console.log("before", titleForEdit);

  titleForEdit.value = title;
  descriptionForEdit.value = description;
  console.log("after", titleForEdit);
  deleteNotes(i);
}

/**Function for delete note */
function deleteNotes(item) {
  const notes = JSON.parse(localStorage.getItem("notes"));
  const { title, description } = notes[item];
  notes.splice(item, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  displayNotes();
}

/**Function for dark theme */
function theme() {
  const body = document.body;

  body.classList.toggle("dark-body");
  const slide_menu = document.getElementById("list_items");
  slide_menu.classList.toggle("dark");
}

// function onClickChecklist() {
//   document.getElementById("checklist").classList.toggle("effect");
// }
