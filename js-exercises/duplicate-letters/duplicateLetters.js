function duplicateLetters(...args) {
  // declaring and initializing a frequency counter for letters
  let frequencyCounter = {};

  // declaring and initializing duplicate counters
  let max = Number.NEGATIVE_INFINITY;
  let second_max = Number.NEGATIVE_INFINITY;

  // counting frequency of each letter
  for (const letter of args[0]) {
    frequencyCounter[letter] = (frequencyCounter[letter] || 0) + 1;
  }

  // finding max and second maximum repeated letter
  for (const value in frequencyCounter) {
    if (frequencyCounter[value] > max) {
      max = frequencyCounter[value];
      second_max = max;
    }
  }

  // if no duplicates are found - max will be 1 - hence as per requiremnts got to return false
  if (max === 1) return false;

  // if duplicates are found, the lengh of the letter repeated second to maximum is returned
  return second_max;
}

export { duplicateLetters };
