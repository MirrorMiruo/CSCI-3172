//CSCI 3172 Lab2
//Zhongwen Pan B00920298 zh579385@dal.ca

//In JavaScript, the scope of a const variable is block-level.
//This means that a const variable is only accessible within the block of
//code where it was declared.
//const and let keywords were added in 2015

//Question a:

const radius = 6;
function calculateArea(radius) {
  return radius ** 2 * Math.PI;
}

console.log(calculateArea(radius));
//Output: 113.09733552923255

//Question b:

function arithmetic_operation(num1, num2) {
  const add = num1 + num2;
  const subtract = num1 - num2;
  const multiply = num1 * num2;
  const divide = num2 = 0? num1 / num2 : "Cannot be divided by 0!";

  return `Add: ${add}, Subtract: ${subtract}, Multiply: ${multiply}, Divide: ${divide}`;
}

console.log(arithmetic_operation(6, 3));
//Output: Add: 9, Subtract: 3, Multiply: 18, Divide: 2

//Question c:
function calculateRectangleArea(length, width) {
  return length * width;
}

console.log(calculateRectangleArea(20, 15));
//Output: 300
