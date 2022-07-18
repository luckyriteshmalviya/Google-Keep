/** Function for adding tag during creating the note
 *  Used only HTML Elements.
 */

/**Plus Icon on tag */

function addTag() {
  /**Input Value in tag written by user */
  const tagInput = document.getElementById("tagInput");
  const tagValue = tagInput.value;

  const tagDiv = document.createElement("div");
  tagDiv.className = "tagDiv";

  /**for adding the current tag into the saved tag before saving the Note */
  const savedTag = document.getElementById("savedTag");
  tagDiv.innerText = tagValue;
  savedTag.appendChild(tagDiv);

  /**datalist of presaved tags */
  const tagListOptions = document.getElementById("tagListOptions");
  const TagOption = document.createElement("option");
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

export { addTag };
