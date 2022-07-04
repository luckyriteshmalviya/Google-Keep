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
