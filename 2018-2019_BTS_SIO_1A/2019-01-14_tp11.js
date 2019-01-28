// tp11.js

console.log("Start");

const nombreMystere = Math.round(Math.random() * 100);
console.log(nombreMystere);
console.log(typeof nombreMystere);

const button = document.querySelector("button");
console.log(button);

function guessNumber() {
  console.log("Guess number!");
  const input = document.querySelector("input");
  console.log(input);

  const userNumber = parseInt(input.value);
  console.log(userNumber);

  const resultParagraph = document.querySelector(".result");
  resultParagraph.innerText = "";

  if (userNumber === nombreMystere) {
    console.log("Victoire");
    resultParagraph.innerText = "Victoire ! ";
    resultParagraph.style.backgroundColor = "lightgreen";
    document.body.style.backgroundColor = "green";
  } else if (nombreMystere > userNumber) {
    resultParagraph.innerText = "Non, essaie plus grand.";
  } else if (nombreMystere < userNumber) {
    resultParagraph.innerText = "Non, essaie plus petit.";
  }
}

button.addEventListener("click", guessNumber);
