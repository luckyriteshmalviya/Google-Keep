let plusIconAddTag = document.getElementById("plusIconAddTag");

plusIconAddTag.addEventListener("click", addTag);

/** Function for adding tag during creating the note
 *  Used only HTML Elements.
 */
function addTag() {
  let tagInput = document.getElementById("tagInput");
  let tagValue = tagInput.value;
  let tagDiv = document.createElement("div");
  tagDiv.className = "tagDiv";
  let saveTag = document.getElementById("saveTag");

  tagDiv.innerText = tagValue;
  saveTag.appendChild(tagDiv);

  let TagList = document.getElementById("TagList");
  let TagOption = document.createElement("option");
  TagOption.innerText = tagValue;
  // for (let i = 0; i < TagList.length; i++) {
  //   TagListValue = TagList[i].innerText;
  //   if (TagListValue === tagValue) {
  //     tagInput.innerText = null;
  //     return;
  //   }
  // } else {
  //   TagOption.innerText = tagValue;
  //   console.log(TagList, "inside", TagOption);
  //   console.log(typeof TagList, "inside", typeof TagOption);
  // }
  // }
  TagList.appendChild(TagOption);
}
