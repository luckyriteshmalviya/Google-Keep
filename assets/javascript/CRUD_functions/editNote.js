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
