function bookmark(i) {
  const notes = JSON.parse(localStorage.getItem("notes"));
  if (notes[i].bookmarkStatus === true) {
    notes[i].bookmarkStatus = false;
    // document.getElementById("pinBtnInDisplay").className = "bx-bookmark";
  } else {
    notes[i].bookmarkStatus = true;
    // document.getElementById("pinBtnInDisplay").className = "bx-bookmark-star";
  }

  for (let i = 0; i < notes.length; i++) {
    if (notes[i].bookmarkStatus === true) {
      const book = document.getElementById("pinBtnInDisplay");
      // console.log(book);
      // book.children.style.display = "flex";
    }
  }
  localStorage.setItem("notes", JSON.stringify(notes));
  displayNotes();
}

const showbookmarkedNotes = document.getElementById("bookmark");
showbookmarkedNotes.addEventListener("click", bookmarkPage);

function bookmarkPage() {
  // console.log("bookmarkPage");

  document.getElementById("form").style.display = "flex";

  const form = document.getElementById("savedNotes");
  form.innerHTML = null;
  const notes = JSON.parse(localStorage.getItem("notes"));

  for (let i = 0; i < notes.length; i++) {
    const notesContainer = document.getElementById("savedNotes");
    notesContainer.innerHTML = null;
    const notesList = JSON.parse(localStorage.getItem("notes")) || [];
    const fragmentContainer = document.createDocumentFragment();
    const notesLengthForArray = notesList.length - 1;

    for (let i = notesLengthForArray; i >= 0; i--) {
      const { title, description, tag, bookmarkStatus } = notesList[i];
      const divContainer = document.createElement("div");

      if (bookmarkStatus === true) {
        divContainer.innerHTML = `<div class="savedNotes">
        <div class="savedNotesFirst">
        <textarea id="savedNotesTitle" >${title}</textarea>
        <i class='bx bxs-bookmark-star' id="pinBtn" onClick="bookmark(${i})"></i>
        </div>
        <textarea id="savedNotesDescription" class="${i}" >${description}</textarea>
        <div class="SavedNotesThirdSection">
        <div id="savedNotesIcon"  class="savedNotesIcon">
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
      }
      fragmentContainer.appendChild(divContainer);
    }
    notesContainer.appendChild(fragmentContainer);
  }
}
