function calculateTip() {
  const billAmount = parseFloat(document.getElementById("bill").value);
  const percentage = parseFloat(document.getElementById("tipPercent").value);

  // calculate
  const tipAmount = billAmount * (percentage / 100);
  const total = billAmount + tipAmount;

  // display

  document.getElementById("tip-amount").textContent =
    "$" + tipAmount.toFixed(2);
  document.getElementById("total-amount").textContent = "$" + total.toFixed(2);
}

function reset() {
  document.getElementById("bill").value = "";
  document.getElementById("tipPercent").value = "";
  document.getElementById("tip-amount").textContent =
    "$" + tipAmount.toFixed(2);
  document.getElementById("total-amount").textContent = "$" + total.toFixed(2);
}
