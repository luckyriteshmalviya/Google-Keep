/**Function for dark theme */

function theme() {
  const body = document.body;
  body.classList.toggle("dark-body");

  const headerLeftSection = document.getElementById("header");
  headerLeftSection.classList.toggle("darkHeader");

  const slide_menu = document.getElementById("side-bar");
  slide_menu.classList.toggle("darkThemeForMenu");

  const form = document.getElementById("formSection");
  form.classList.toggle("darkForm");

  const savedNotes = document.getElementById("savedNotes");
  savedNotes.classList.toggle("darkNotes");
}
