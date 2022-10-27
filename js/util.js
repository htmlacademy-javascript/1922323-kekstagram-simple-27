function getRandomNumber (min, max) {
  let randomResult;
  if (min >= 0 && max >= 0) {
    randomResult = Math.random() * (max - min + 1) + min;
  } else {
    return NaN;
  }
  return Math.round(randomResult);
}

getRandomNumber(1, 5);

function checkStringLength (string, length) {
  return string.length <= length;
}

checkStringLength('Кекс', 20);

export {getRandomNumber};
