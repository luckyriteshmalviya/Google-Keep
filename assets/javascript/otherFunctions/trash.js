function trash() {
  document.getElementById("form").style.display = "none";
  const form = document.getElementById("savedNotes");
  form.innerHTML = "";
  let trash = [];
  trash = JSON.parse(localStorage.getItem("trash")) || [];

  const fragmentContainer = document.createDocumentFragment();
  const trashItemListLength = trash.length - 1;

  for (let i = trashItemListLength; i >= 0; i--) {
    const { title, description, tag, bookmarkStatus } = trash[i];
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
          <div class="editBtn"   onClick="saveAgain(${i})"><i class="bx bx-refresh"></i></div>
          <div class="DeleteBtn" onClick="deletePermanent(${i})" ><i class='bx bx-trash'></i></div>
          </div>
          </div>
          </div>`;

    fragmentContainer.appendChild(divContainer);
  }
  form.appendChild(fragmentContainer);
}

function deletePermanent(item) {
  const trash = JSON.parse(localStorage.getItem("trash"));
  const { title, description } = trash[item];
  if (confirm("Do you really want to delete your Note?")) {
    trash.splice(item, 1);
  }
  localStorage.setItem("trash", JSON.stringify(trash));

  displayNotes();
}

function saveAgain(item) {
  const trash = JSON.parse(localStorage.getItem("trash"));
  const { title, description, tag, bookmarkStatus } = trash[item];
  let notes = JSON.parse(localStorage.getItem("notes"));
  if (notes === null) {
    notes = [
      {
        title: title,
        description: description,
        tag: tag,
        bookmarkStatus: bookmarkStatus,
      },
    ];
  }

  // Step 08
  else {
    notes.push({
      title: title,
      description: description,
      tag: tag,
      bookmarkStatus: bookmarkStatus,
    });
  }
  localStorage.setItem("notes", JSON.stringify(notes));
  trash.splice(item, 1);

  localStorage.setItem("trash", JSON.stringify(trash));

  displayNotes();
}
