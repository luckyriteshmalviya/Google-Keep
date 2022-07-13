function bookmark(i) {
  const notes = JSON.parse(localStorage.getItem("notes"));
  notes[i].bookmarkStatus = true;

  for (let j = 0; j < notes.length; j++) {
    console.log(notes[j]);
  }
}
