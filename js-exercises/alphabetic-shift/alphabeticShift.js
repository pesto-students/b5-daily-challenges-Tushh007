const alphabeticShift = (input, shiftBy) => {
  // Error Validation
  if (typeof input !== 'string' || typeof shiftBy !== 'number')
    throw Error(
      `${input} ${shiftBy} - invalid input parameters passed to the function. Please pass an input string and a number shift count`
    );

  // initializing final resultant string
  let result = '';

  // parsing through the string and using ASCII values for incrimenting letters
  for (const letter of input) {
    if (letter === 'z') result += 'a';
    else if (letter === 'Z') result += 'A';
    else result += String.fromCharCode(letter.charCodeAt() + shiftBy);
  }

  // return shifted string as result
  return result;
};

export { alphabeticShift };
