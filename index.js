//function to display element
function takeInput(element) {
  // display input in input field
  document.getElementById("resultBox").value += element;
}

function showResult() {
  let a = document.getElementById("resultBox").value;
  let y = eval(a);

  document.getElementById("resultBox").value = y;
}
function clearInput() {
  document.getElementById("resultBox").value = " ";
}
