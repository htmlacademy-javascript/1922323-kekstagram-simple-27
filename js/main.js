function randomNumber (min, max) {
  let randomResult;
  if (min >= 0 && max >= 0) {
    randomResult = Math.random() * (max - min + 1) + min;
  } else {
    return NaN;
  }
  return Math.round(randomResult);
}

randomNumber(1, 5);

function checkStringLength (string, length) {
  return string.length <= length;
}

checkStringLength(2, 20);
