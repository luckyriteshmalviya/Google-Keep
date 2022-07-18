function searchNotes() {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  let filteredList = [];
  let searchWord = document.getElementById("search").value.toUpperCase();
  for (let elem of notes) {
    let textValue =
      elem.title.toUpperCase().includes(searchWord) ||
      elem.description.toUpperCase().includes(searchWord);
    if (textValue) {
      filteredList.push(elem);
    }
  }

  document.getElementById("form").style.display = "flex";

  const notesContainer = document.getElementById("savedNotes");
  notesContainer.innerHTML = null;

  const fragmentContainer = document.createDocumentFragment();
  const notesLengthForArray = filteredList.length - 1;

  for (let i = notesLengthForArray; i >= 0; i--) {
    const { title, description, tag, bookmarkstatus } = filteredList[i];
    const divContainer = document.createElement("div");

    divContainer.innerHTML = `<div class="savedNotes">
      <div class="savedNotesFirst">
      <textarea id="savedNotesTitle" >${title}</textarea>
      <i class='bx bx-bookmark' id="pinBtn" onClick="bookmark(${i})"></i>
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
      <div class="editBtn"   onClick="editNotes(${i})"><i class='bx bx-edit'></i></div>
      <div class="DeleteBtn" onClick="deleteNotes(${i})" ><i class='bx bx-trash'></i></div>
      </div>
      </div>
      </div>`;

    fragmentContainer.appendChild(divContainer);
  }
  notesContainer.appendChild(fragmentContainer);
}
searchNotes();
