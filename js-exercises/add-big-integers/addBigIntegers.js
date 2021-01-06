function addBigIntegers(numericStrings) {
  let sum = 0;

  for (const numericString of numericStrings.split('\n')) {
    sum = addNumericString(numericString, sum)
  }

  return sum;
}

// function addNumericString(numericString, sum) {
  
// }

export { addBigIntegers };
