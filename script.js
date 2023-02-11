'use strict';

//--------------------1-----------------------------
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
  return +values[0] + +values[2];
}
function subtract(values) {
  return +values[0] - +values[2];
}
function multiply(values) {
  return +values[0] * +values[2];
}
function divide(values) {
  //   //--------------------2-----------------------------
  if (+values[2] === 0) {
    throw new Error('Error: Can`t devide by 0');
  }
  return +values[0] / +values[2];
}

try {
  count('5/0');
} catch (err) {
  console.log(err.message);
  //--------------------2.1-----------------------------
  console.log(0);
}

//--------------------3-----------------------------
function count1(expression) {
  function getValues(expression) {
    let values = [...expression];
    return values;
  }
  let values;
  try {
    let data = getValues(expression);
    values = data;
  } catch (err) {
    if (typeof expression !== 'string') {
      alert('string, please');
    }
    if (err.message === 'expression is not iterable') {
      alert('expression is not iterable');
      return;
    }
    if (values === undefined) {
      alert('values is not defined');
    }
    console.log(err.name + ': ' + err.message);
    values = [0, '+', 0];
  }

  switch (values[1]) {
    case '+':
      return showResult(sum1(values));
    case '-':
      return showResult(subtract1(values));
    case '*':
      return showResult(multiply1(values));
    case '/':
      return showResult(divide1(values));
  }
  function showResult(value) {
    return value;
  }
}

function sum1(values) {
  return +values[0] + +values[2];
}
function subtract1(values) {
  return +values[0] - +values[2];
}
function multiply1(values) {
  return +values[0] * +values[2];
}
function divide1(values) {
  return +values[0] / +values[2];
}

console.log(count1('5+2'));

//--------------------4-----------------------------

function MakeUsers(name, age) {
  this.name = name;
  this.age = age;
}

const user = new MakeUsers('Mike');
function showMovie(user) {
  try {
    if (user.age === undefined) {
      throw new Error();
    }
  } catch (error) {
    user.age = prompt('your age please');
    console.log(user.age);
  }
  if (user.age >= 18) {
    console.log('You can watch this movie');
  } else if (user.age > 0) {
    console.log('Sorry, you are too young');
  }
}

showMovie(user);
