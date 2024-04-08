function checkvowels() {
  var text = document.getElementById("inputText").value;
  var vowelCount = 0;

  // convert to lowercase
  text = text.toLowerCase();

  for (var i = 0; i < text.length; i++) {
    var char = text.charAt(i);
    if (isVowel(char)) {
      vowelCount++;
    }
  }

  var result = document.getElementById("result");
  result.textContent = "Total Vowels :" + vowelCount;
}

// vowel
function isVowel(char) {
  var vowels = ["a", "e", "i", "o", "u"];
  return vowels.includes(char);
}

function reset() {
  document.getElementById("inputText").value = "";
  // Reset the displayed result to show 0 vowels
  document.getElementById("result").textContent = "Result";
}

// function checkVowels() {
//     // JavaScript function to check vowels will go here
//     var text = document.getElementById('inputText').value;
//     var vowelCount = countVowels(text);
//     document.getElementById('result').textContent = `Number of vowels: ${vowelCount}`;
//   }

//   function countVowels(text) {
//     // Helper function to count vowels in the given text
//     var vowelRegex = /[aeiouAEIOU]/g;
//     var matches = text.match(vowelRegex);
//     return matches ? matches.length : 0;
//   }
