/**Function for delete note */
function deleteNotes(item) {
  const notes = JSON.parse(localStorage.getItem("notes"));
  const { title, description } = notes[item];

  notes.splice(item, 1);
  localStorage.setItem("notes", JSON.stringify(notes));

  displayNotes();
}
