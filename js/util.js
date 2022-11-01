function getRandomNumber (min, max) {
  let randomResult;
  if (min >= 0 && max >= 0) {
    randomResult = Math.random() * (max - min + 1) + min;
  } else {
    return NaN;
  }
  return Math.round(randomResult);
}

function checkStringLength (string, length) {
  return string.length <= length;
}

export {checkStringLength};

export {getRandomNumber};
