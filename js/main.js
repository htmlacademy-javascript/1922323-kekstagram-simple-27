function randomNumber (min, max) {
  let randomResult;
  if (min >= 0 && max >= 0) {
    randomResult = Math.random() * (max - min + 1);
  }
  return Math.round(randomResult);
}

randomNumber(1, 5);
