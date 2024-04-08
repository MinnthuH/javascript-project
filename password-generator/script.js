const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}|;':\",./<>?";

const lengthEl = document.getElementById("length");
const lowercaseEl = document.getElementById("lowercase");
const uppercaseEl = document.getElementById("uppercase");
const numberEl = document.getElementById("number");
const symbolsEl = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");
const passwordEl = document.getElementById("password");

generateBtn.addEventListener("click", function () {
  const length = lengthEl.value;
  let cahracters = "";
  let password = "";

  if (lowercaseEl.checked) {
    cahracters += lowercaseLetters;
  }

  if (uppercaseEl.checked) {
    cahracters += uppercaseLetters;
  }

  if (numberEl.checked) {
    cahracters += numbers;
  }
  if (symbolsEl.checked) {
    cahracters += symbols;
  }

  for (let i = 0; i < length; i++) {
    password += cahracters.charAt(
      Math.floor(Math.random() * cahracters.length)
    );
  }

  passwordEl.value = password;
});
