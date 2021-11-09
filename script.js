// var heading = document.getElementById("title");

// var a = document.getElementsByClassName("circleb");
var executeButton = document.getElementById("executeButton");
var outputParagraph = document.getElementById("outputText");
var inputElement = document.getElementById("myInput");
var fortune = [
  "You will receive a gift today.",
  "Watch out for cars.",
  "You get a good result on what you are worried about",
  "Go get some boba tea",
  "You will have a dinner invitation today.",
  "Watch out for a cold.",
];

executeButton.addEventListener("click", demonstrationFunction);

document.addEventListener("mousemove", mouseMovedFunction1);
document.addEventListener("mousemove", mouseMovedFunction2);
document.addEventListener("mousemove", mouseMovedFunction3);
function mouseMovedFunction1() {
  var randomRed = Math.random() * 227 + 180;
  var randomGreen = Math.random() * 180 + 40;
  var randomBlue = 150;
  var outputColorString =
    "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";
  document.getElementsByClassName("circleb")[0].style.backgroundColor =
    outputColorString;
}
function mouseMovedFunction2() {
  var randomRed = Math.random() * 255 + 200;
  var randomGreen = 140;
  var randomBlue = Math.random() * 200 + 190;
  var outputColorString =
    "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";

  document.getElementsByClassName("circlea")[0].style.backgroundColor =
    outputColorString;
}
function mouseMovedFunction3() {
  var randomRed = Math.random() * 227;
  var randomGreen = 144;
  var randomBlue = Math.random() * 224 + 160;
  var outputColorString =
    "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";

  document.getElementsByClassName("circlec")[0].style.backgroundColor =
    outputColorString;
}

function demonstrationFunction() {
  var currentInputText = inputElement.value;
  outputParagraph.innerHTML = fortune[currentInputText - 1];
}
