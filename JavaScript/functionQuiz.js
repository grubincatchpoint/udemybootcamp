function isEven(num) {
  return num % 2 === 0;
}

function factorial(num) {
  var answer = 1;
  if (num == 0) {
    return answer;
  } else {
    while (num > 0) {
      answer = answer * num;
      num--;
    }
    return answer;
  }
}

function kebabToSnake(str) {
  var newStr = str.replace(/-/g, "_");
  return newStr;
}
