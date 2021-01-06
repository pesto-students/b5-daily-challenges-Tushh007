const alphabeticShift = (input, shiftBy) => {
  // initializing final resultant string
  let result = '';

  // parsing through the string and using ASCII values for incrimenting letters
  for (const letter of input) {
    if (letter === 'z') result += 'a';
    else if (letter === 'Z') result += 'A';
    else result += String.fromCharCode(letter.charCodeAt() + shiftBy);
  }

  return result;
};

export { alphabeticShift };
