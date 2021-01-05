function addBigIntegers(intString) {
  let sum = 0;
  for (let number of intString.split('\n')) {
    sum += parseFloat(number);
  }

  return sum.toString();
}

export { addBigIntegers };
