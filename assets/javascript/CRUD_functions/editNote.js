// import { displayNotes } from "./displayNote.js";
import { deleteNotes } from "./deleteNote.js";
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
  // displayNotes();
}
export { editNotes };
