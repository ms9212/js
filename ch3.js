const guessForm = document.getElementById("js-guess");
const result = document.getElementById("js-result");
const maxNumber = document.getElementById("maxNumber");

function handleGuessSubmit(e) {
  // 입력이 제출되며 브라우저가 초기화 되는 고유동작을 막기 위한 코드 //
  e.preventDefault();
  const guessInput = guessForm.querySelector("input");
  if (guessInput.value === "" && maxNumber === "") {
    return;
  }
  const max = maxNumber.value;
  const random = Math.ceil(Math.random() * max);
  const userGuess = parseInt(guessInput.value, 10);
  const resultSpan = result.querySelector("span");
  resultSpan.innerHTML = `
  You chose: ${userGuess},
  the machine chose: ${random}.<br />
  <strong>${userGuess === random ? "You won!" : "You lost!"}</strong>
  `;
}

guessForm.addEventListener("submit", handleGuessSubmit);
