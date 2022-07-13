/** Speech to text Function */
const recognition = new webkitSpeechRecognition();
const noteDescription = document.getElementById("notes_description");
const mic = document.getElementById("mic");

recognition.continuous = true;

recognition.onresult = function (event) {
  const transcript = event.results[event.resultIndex][0].transcript;
  noteDescription.value += transcript;
};

mic.addEventListener("mouseover", function (event) {
  console.log("voice start");
  recognition.start();
});

mic.addEventListener("mouseout", function (event) {
  console.log("voice end");
  recognition.stop();
});
