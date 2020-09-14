/**
 * Guess The Number Game
 */

// Variable to store the list of guesses
let gusses = [];
// Variable for store the correct random number
let correctNumber = getRandomNumber();

window.onload = function() {
  document.getElementById("number-submit").addEventListener("click", playGame);
  document.getElementById("restart-game").addEventListener("click", initGame);
};

function playGame() {
  let numberGuess = document.getElementById("number-guess").value;
  saveGuessHistory(numberGuess);
  console.log(numberGuess, correctNumber);
  displayResult(numberGuess);
}

function displayResult(numberGuess) {
  if (numberGuess < correctNumber) {
    showNumberBelow();
    console.log("your guess is too low");
  } else if (numberGuess > correctNumber) {
    showNumberAbove();
    console.log("Your guess is too high");
  } else {
    showYouWon();
    console.log("You guessed it right!!");
  }
}

function initGame() {
  // *CODE GOES BELOW HERE *
  document.getElementById("number-guess").value = "";
  document.getElementById("result").innerHTML = "";
  correctNumber = getRandomNumber();
  gusses = [];
  displayHistory();
}

function resetResultContent() {
  document.getElementById("result").innerHTML = "";
}

function getRandomNumber() {
  // *CODE GOES BELOW HERE *
  let randomNumber = Math.floor(Math.random() * 100 + 1);
  return randomNumber;
}

function saveGuessHistory(guess) {
  // *CODE GOES BELOW HERE *
  gusses.push(guess);
  console.log(gusses);
  displayHistory();
}

function displayHistory() {
  let index = gusses.length - 1; // TODO

  console.log(index > 0);
  let list = "<ul class='list-group'>";
  while (index >= 0) {
    list +=
      "<l1 class='list-group-item'>You guessed " + gusses[index] + "</l1>";
    index--;
  }
  list += "</ul>";
  console.log(list);
  document.getElementById("history").innerHTML = list;
}

function getDialog(dialogType, text) {
  let dialog;
  switch (dialogType) {
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>";
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>";
      break;
  }
  dialog += text;
  dialog += "</div>";
  return dialog;
}

function showYouWon() {
  const text = "Awesome job, you got it!";
  dialog = getDialog("won", text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove() {
  const text = "Your guess is too high!";
  dialog = getDialog("warning", text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow() {
  const text = "Your guess is too low!";
  dialog = getDialog("warning", text);
  document.getElementById("result").innerHTML = dialog;
}
