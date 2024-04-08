const dobInput = document.getElementById("dob");
const calculateBtn = document.getElementById("calculateAgeBtn");
const result = document.getElementById("result");

calculateBtn.addEventListener("click", function () {
  const dob = new Date(dobInput.value);
  console.log(dob);
  const ageInMs = Date.now() - dob.getTime();
  const ageDate = new Date(ageInMs);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);

  result.innerHTML = `Your age is ${age} years`;
});
