function checkInputValue(num) {
  // 0 = Rock
  // 1 = paper
  // 2 = scissor

  let u = num;
  switch (u) {
    case 0:
      document.getElementById("userChoice").innerHTML = "Your choice is rock";
      break;
    case 1:
      document.getElementById("userChoice").innerHTML = "Your choice is paper";
      break;
    case 2:
      document.getElementById("userChoice").innerHTML =
        "Your choice is scissor";
      break;

    default:
      break;
  }

  let c = Math.floor(Math.random() * 3);
  switch (c) {
    case 0:
      document.getElementById("compChoice").innerHTML =
        "Computer choice is rock";
      break;
    case 1:
      document.getElementById("compChoice").innerHTML =
        "Computer choice is paper";
      break;
    case 2:
      document.getElementById("compChoice").innerHTML =
        "Computer choice is scissor";
      break;

    default:
      break;
  }

  var userScore = 0;
  var compScore = 0;
  if (u == c) {
    document.getElementById("finalResult").innerHTML = "No one win";
  } else if ((u == 1 && c == 0) || (u == 2 && c == 1) || (u == 0 && c == 2)) {
    document.getElementById("finalResult").innerHTML = "you win";
    userScore = userScore + 1;
    document.getElementById("uScore").innerHTML = userScore;
  } else {
    document.getElementById("finalResult").innerHTML = "computer win";
    compScore = compScore + 1;
    document.getElementById("cScore").innerHTML = compScore;
  }
}
