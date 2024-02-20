let input = document.getElementById("inputField");
let output = document.getElementById("outputField");
let btn = document.getElementById("submit-btn");

btn.addEventListener("click", () => {
  let value = input.value.trim();
  if (isNaN(value) || value.length != 4) {
    output.textContent = "The value you entered is Invalid!";
  } else if (value > 1900 && value <= 1927) {
    output.textContent = "THiS is GI";
  } else if (value > 1927 && value <= 1945) {
    output.textContent = "THiS is The silent Generation";
  } else if (value > 1945 && value <= 1964) {
    output.textContent = "THiS is Baby Boomers";
  } else if (value > 1964 && value <= 1980) {
    output.textContent = "THiS is Gen X";
  } else if (value > 1980 && value <= 1996) {
    output.textContent = "THiS is millenials or GEN Y ";
  } else if (value > 1996 && value <= 2012) {
    output.textContent = "this is GEN Z";
  } else if (value > 2012 && value <= 2025) {
    output.textContent = "THiS is the Gen Alpha!";
  } else {
    output.textContent = "The value you entered is Invalid!";
  }
});
