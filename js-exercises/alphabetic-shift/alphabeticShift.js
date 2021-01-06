const alphabeticShift = (input) => {
  // initializing final resultant string
  let result = '';

  // parsing through the string and using ASCII values for incrimenting letters
  for (const letter of input)
    result += String.fromCharCode(letter.charCodeAt() + 1);

  return result;
};

export { alphabeticShift };
