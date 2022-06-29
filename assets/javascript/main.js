// IIFE function for welcome
// (() => {
//   alert("Welcome to the Google keep created by Ritesh malviya");
// })();

// function for slide menu
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

/**
 * function for showing the saved notes.
 * Step 01 - Create a separate field for showing the saved notes - Notes
 * Step 1.1- Create a separate div for title and description inside Notes.
 * Step 02 - Get the saved notes data from local storage by JSON.parse.
 * Step 02 - Saved the title and description of saved notes in the title and description div of Notes.
 */

function notes() {
  const notesList = JSON.parse(localStorage.getItem("notes")) || [];
  const notesContainer = document.getElementById("savedNotes");
  const fragmentContainer = document.createDocumentFragment();
  for (let i = 0; i < notesList.length; i++) {
    const { title, description } = notesList[i];
    const divContainer = document.createElement("div");
    divContainer.innerHTML = `<div class="savedNotes">
    <div class="savedNotesFirst">
    <textarea id="savedNotesTitle">${title}</textarea>
    <i class='bx bx-pin' ></i>
    </div>
    <textarea id="savedNotesDescription">${description}</textarea>
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
    </div>`;
    fragmentContainer.appendChild(divContainer);
  }
  notesContainer.appendChild(fragmentContainer);
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
