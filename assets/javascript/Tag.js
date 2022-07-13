/** Function for adding tag during creating the note
 *  Used only HTML Elements.
 */

/**Plus Icon on tag */
const plusIconAddTag = document.getElementById("plusIconAddTag");
plusIconAddTag.addEventListener("click", addTag);

function addTag() {
  /**Input Value in tag written by user */
  let tagInput = document.getElementById("tagInput");
  let tagValue = tagInput.value;

  let tagDiv = document.createElement("div");
  tagDiv.className = "tagDiv";

  /**for adding the current tag into the saved tag before saving the Note */
  let savedTag = document.getElementById("savedTag");
  tagDiv.innerText = tagValue;
  savedTag.appendChild(tagDiv);

  /**datalist of presaved tags */
  let tagListOptions = document.getElementById("tagListOptions");
  let TagOption = document.createElement("option");
  TagOption.innerText = tagValue;

  /**checking if tagValue is exist in datalist options */
  for (let i = 0; i < tagListOptions.children.length; i++) {
    if (tagListOptions.children[i].innerText === tagValue) {
      tagInput.value = "";

      return;
    }
  }
  tagListOptions.appendChild(TagOption);
  tagInput.value = "";
}
