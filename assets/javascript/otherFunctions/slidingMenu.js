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

// function menu() {
//   let menu = (document.getElementById("notesButton").style.backgroundColor =
//     "black");
// }

export { onClickMenu };
