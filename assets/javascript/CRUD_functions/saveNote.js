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

/** Function for saving note */
function saveNote() {
  // Step 01
  const title = document.getElementById("notesTitle");
  const description = document.getElementById("notesDescription");
  let savedTag = document.getElementById("savedTag");
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
  displayNotes();
  return;
}
