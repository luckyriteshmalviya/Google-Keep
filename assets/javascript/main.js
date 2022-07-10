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

/** Function for saving note */
function saveNote() {
  // Step 01
  const title = document.getElementById("notes_title");
  const description = document.getElementById("notes_description");
  let savedTag = document.getElementById("saveTag");
  let savedTagValue = savedTag.innerHTML;

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
      { title: titleValue, description: descriptionValue, tag: savedTagValue },
    ];
  }

  // Step 08
  else {
    notes.push({
      title: titleValue,
      description: descriptionValue,
      tag: savedTagValue,
    });
  }

  // Step 09
  localStorage.setItem("notes", JSON.stringify(notes));
  title.value = "";
  description.value = "";
  savedTag.innerHTML = "";
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
    const { title, description, tag } = notesList[i];
    const divContainer = document.createElement("div");

    divContainer.innerHTML = `<div class="savedNotes">
    <div class="savedNotesFirst">
    <textarea id="savedNotesTitle" >${title}</textarea>
    <i class='bx bx-pin' id="pinBtn"></i>
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
    <div class="editBtn" onClick="editNotes(${i})"><i class='bx bx-edit'></i></div>
    <div class="DeleteBtn" onClick="deleteNotes(${i})" ><i class='bx bx-trash'></i></div>
    </div>
    </div>
    </div>`;

    fragmentContainer.appendChild(divContainer);
  }
  notesContainer.appendChild(fragmentContainer);
}
displayNotes();

/**function for edit note*/
function editNotes(i) {
  const notes = JSON.parse(localStorage.getItem("notes"));
  const { title, description } = notes[i];
  let titleForEdit = document.getElementById("notes_title");
  let descriptionForEdit = document.getElementById("notes_description");

  titleForEdit.value = title;
  descriptionForEdit.value = description;
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

// function onClickChecklist() {
//   document.getElementById("checklist").classList.toggle("effect");
// }

/** Speech to text Function */
const recognition = new webkitSpeechRecognition();
const noteDescription = document.getElementById("notes_description");
const mic = document.getElementById("mic");

recognition.continuous = true;

recognition.onresult = function (event) {
  const transcript = event.results[event.resultIndex][0].transcript;
  noteDescription.value += transcript;
};

mic.addEventListener("mouseover", function (event) {
  console.log("voice start");
  recognition.start();
});

mic.addEventListener("mouseout", function (event) {
  console.log("voice end");
  recognition.stop();
});

// noteDescription.addEventListener("input", function () {
//   content = $(this).val();
// });
