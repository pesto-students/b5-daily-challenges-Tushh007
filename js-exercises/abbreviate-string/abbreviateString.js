function abbreviateString(str) {
  if (typeof str !== 'string')
    throw Error(`${str} - invalid parameters passed to the function.`);

  // splitting string into words
  const wordsInString = str.split(' ');

  // initializing first word
  const firstWord = wordsInString[0];

  // initializing last ward and uppercasing it
  const abbreviatedLastWord =
    wordsInString[wordsInString.length - 1][0].toUpperCase() + '.';

  // returning concatinated the words for final abbriviated string
  return `${firstWord} ${abbreviatedLastWord}`;
}

export { abbreviateString };
