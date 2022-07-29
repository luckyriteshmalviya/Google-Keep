/**function for slide menu of Right-side*/
function onClickMenu() {
  document.getElementById("menu").classList.toggle("change");
  const sidebarList = document.getElementById("sideBar");
  const children_ic = sidebarList.querySelectorAll(".listItems");
  const children_text = sidebarList.querySelectorAll(".slideText");

  for (let i = 0; i < children_text.length; i++) {
    children_text[i].classList.toggle("dNone");
  }

  for (let i = 0; i < children_ic.length; i++) {
    children_ic[i].classList.toggle("listItemsNew");
  }
}

let screenSize = screen.width;
console.log(screenSize);
let check = "no";
if (screenSize < 420) {
  let nav = document.getElementById("sideBar");
  nav.style.display = "none";
  console.log("if cond");
  let menu = document.getElementById("menu");
  console.log(nav);
  menu.onclick = displayNav;
}

function displayNav() {
  console.log(check);
  if ((check = "no")) {
    check = "yes";
    nav.style.display = "block";
  } else {
    check = "no";
    nav.style.display = "none";
  }
}

// function menu() {
//   let menu = (document.getElementById("notesButton").style.backgroundColor =
//     "black");
// }

export { onClickMenu };
