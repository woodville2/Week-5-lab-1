"use strict";
function convertCelsiusFahrenheit(c) {
  let f = (c * 9) / 5 + 32;
  alert(c + "degrees in celsius converted to fahrenheit is" + f);
}
let userInput = prompt("What is the temp in Celsius?");
convertCelsiusFahrenheit(userInput);

// start of age verification

function determineAgeBracket(age) {
  if (age < 18) {
    alert("minor");
  } else if (age >= 18 && age <= 54) {
    alert("adult");
  } else if (age >= 55) {
    alert("senior");
  }
}
userInput = prompt("What is your age?");
determineAgeBracket(userInput);

// start simple calculator

function simpleCalculator(num1, num2, operator) {
  if (operator === "addition") {
    alert(Number(num1) + Number(num2));
  } else if (operator === "subtraction") {
    alert(num1 - num2);
  } else if (operator === "division") {
    alert(num1 / num2);
  }
}
let num1 = Number(prompt("first number"));
let num2 = Number(prompt("second number"));
let operator = prompt(
  "perform which operation? addition, subtraction, multiplication, division"
);
simpleCalculator(num1, num2, operator);
