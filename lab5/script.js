let inputField = document.querySelector(".textInput");
let resultsDiv = document.getElementById("results");

const btn = document.querySelector("button");
let arr = [];

let prime = 0;
let composite = 0;
let neither = 0;

const test = (num) => {
  if (num === 0) return;

  if (num === 1) {
    neither++;
    return;
  }

  if (num === 2) {
    prime++;
    return;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      composite++;
      return;
    }
  }

  prime++;
  return;
};

btn.addEventListener("click", () => {
  let inputFieldValue = inputField.value;
  arr = inputFieldValue.split(",");

  //map
  let newArr = arr.map((val) => (val = Number(val)));

  //for
  for (let i = 0; i < newArr.length; i++) {
    console.log(newArr[i] + ": " + typeof newArr[i]);
  }

  //for each
  for (let num of newArr) {
    test(num);
  }

  let p = document.createElement("p");
  p.textContent = `Prime: ${prime} Composite: ${composite} Neither: ${neither}`;
  resultsDiv.appendChild(p);

  prime = 0;
  composite = 0;
  neither = 0;
});
