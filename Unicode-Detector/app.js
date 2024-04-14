function detectCharacter() {
  const charInput = document.getElementById("charInput");
  const result = document.getElementById("result");

  const char = charInput.value;

  result.innerText = isASCII(char) ? "ASCII" : "Unicode";
  //   if (isASCII(char)) {
  //     result.innerText = " This Character is ASCII";
  //   } else {
  //     result.innerText = " This Character is Unicode";
  //   }
}

function isASCII(char) {
  return char.charCodeAt(0) <= 127;
}
