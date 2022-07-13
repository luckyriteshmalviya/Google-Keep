/**function for slide menu of Right-side*/
function onClickMenu() {
  document.getElementById("menu").classList.toggle("change");
  const sidebarList = document.getElementById("side-bar");
  const children_ic = sidebarList.querySelectorAll(".list_items");
  const children_text = sidebarList.querySelectorAll(".slide-text");

  for (let i = 0; i < children_text.length; i++) {
    children_text[i].classList.toggle("d-none");
  }

  for (let i = 0; i < children_ic.length; i++) {
    children_ic[i].classList.toggle("list_items_new");
  }
}
