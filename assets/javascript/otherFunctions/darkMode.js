/**Function for dark theme */

let themeStatus = "";

function theme() {
  // document.querySelectorAll("listItems").style.backgroundColor = "transparent";
  const body = document.body;
  body.classList.toggle("darkBody");

  const headerLeftSection = document.getElementById("header");
  headerLeftSection.classList.toggle("darkHeader");

  const slide_menu = document.getElementById("sideBar");
  slide_menu.classList.toggle("darkThemeForMenu");

  const form = document.getElementById("formSection");
  form.classList.toggle("darkForm");

  const savedNotes = document.getElementById("savedNotes");
  savedNotes.classList.toggle("darkNotes");
  // let themeStatus = JSON.parse(localStorage.getItem("themeStatus")) || "";
  if (themeStatus) {
    themeStatus = false;
  } else {
    themeStatus = true;
  }
  localStorage.setItem("themeStatus", JSON.stringify(themeStatus));
}

(() => {
  const themeStatus = JSON.parse(localStorage.getItem("themeStatus")) || "";
  // console.log("ln30", themeStatus);

  if (themeStatus) {
    theme();
  }
})();

export { theme };
