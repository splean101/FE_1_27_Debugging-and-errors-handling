'use strict';

//1.
function count(expression) {
  function getValues(expression) {
    let values = [...expression];
    return values;
  }
  let values = getValues(expression);
  switch (values[1]) {
    case '+':
      return showResult(sum(values));
    case '-':
      return showResult(subtract(values));
    case '*':
      return showResult(multiply(values));
    case '/':
      return showResult(divide(values));
  }
  function showResult(value) {
    return value;
  }
}

function sum(values) {
  return values[1] + values[2];
}
function subtract(values) {
  return values[1] - values[2];
}
function multiply(values) {
  return values[1] * values[2];
}
function divide(values) {
  return values[1] / values[2];
}

console.log(count('5-2'));

//2.

//3.

//4.
