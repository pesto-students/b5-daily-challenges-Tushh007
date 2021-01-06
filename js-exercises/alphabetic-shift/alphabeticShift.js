const alphabeticShift = input => {
  let result = '';
  for (const letter of input) {
    result += String.fromCharCode(letter.charCodeAt() + 1)
  }

  return result;
};

export { alphabeticShift };
