function calculateMturityAmount() {
  const principle = parseFloat(document.getElementById("principal").value);
  const insertRate = parseFloat(document.getElementById("insertRate").value);
  const tenure = parseFloat(document.getElementById("tenure").value);

  // Preform Calculation

  const maturityAmount = principle + (principle * insertRate * tenure) / 100;

  // Display the result

  document.getElementById(
    "result"
  ).innerHTML = `Maturity Amount : ${maturityAmount.toFixed(2)}`;
}

// Add event listener to the button

document
  .getElementById("calculateBtn")
  .addEventListener("click", calculateMturityAmount);
