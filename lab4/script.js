const monday = document.getElementById("monday");
const tuesday = document.getElementById("tuesday");
const wednesday = document.getElementById("wednesday");
const thursday = document.getElementById("thursday");
const friday = document.getElementById("friday");
const saturday = document.getElementById("saturday");
const sunday = document.getElementById("sunday");
const selectDate = document.getElementById("selectDate");
const container = document.getElementById("container");
const form = document.getElementById("form");
const number = document.getElementById("input");
const submit = document.getElementById("submit");
const message = document.getElementById("message");

selectDate.addEventListener("change", function () {
  switch (selectDate.value) {
    case "monday":
      container.style.backgroundColor = "white";
      break;

    case "tuesday":
      container.style.backgroundColor = "yellow";
      break;

    case "wednesday":
      container.style.backgroundColor = "blue";
      break;

    case "thursday":
      container.style.backgroundColor = "gray";
      break;

    case "friday":
      container.style.backgroundColor = "green";
      break;

    case "saturday":
      container.style.backgroundColor = "orange";
      break;

    case "sunday":
      container.style.backgroundColor = "pink";
      break;
  }
});

submit.addEventListener("click", function () {
  const numberValue = Number(number.value);
  const checkOdd = numberValue % 2 === 1 ? "an odd" : "an even";

  let checkPrime = "prime";
  let range = "";

  if (numberValue === 1) checkPrime = "";
  else if (numberValue === 2 || numberValue === 3) checkPrime = "prime";
  else {
    for (let i = 2; i <= Math.sqrt(numberValue); i++) {
      if (numberValue % i === 0) {
        checkPrime = "composite";
        break;
      }
    }
  }

  if (numberValue >= 1 && numberValue <= 50) range = "less than or equal to 50";
  else if (numberValue > 50 && numberValue <= 75)
    range = "greater than 50 and Less than or equal to 75";
  else if (numberValue > 75 && numberValue <= 100)
    range = "greater than 75 and less than or equal to 100";
  else if (numberValue > 100) range = "greater than 100";

  alert(
    `The number entered is ${checkOdd} ${checkPrime} number and it is ${range}!`
  );
});
