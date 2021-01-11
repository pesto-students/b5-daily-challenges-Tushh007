function addBigIntegers(numericStrings) {
  let sum = 0;

  for (const numericString of numericStrings.split('\n')) {
    sum = addNumericString(numericString, sum);
  }

  return sum;
}

const toDecimal = (el) => parseInt(el, 10);

function addNumericString(numericString1, numericString2) {
  const maxLength = Math.max(numericString1.length, numericString2.length);
  const operand1 = numericString1.padStart(maxLength, '0');
  const operand2 = numericString2.padStart(maxLength, '0');

  const operands = zip(operand1, operand2)
    .reverse()
    .map((pair) => {
      const [el, otherEl] = pair;
      return [toDecimal(el), toDecimal(otherEl)];
    });

  let result = [];
  let carry = 0;
  for (const [el, otherEl] of operands) {
    const localSum = el + otherEl + carry;
    if (localSum >= 10) {
      const unitsDigit = localSum - 10;
      carry = 1;
      result.unshift(unitsDigit);
    } else {
      carry = 0;
      result.unshift(localSum);
    }
  }

  if (carry) {
    result.unshift(1);
  }

  return result.join('');
}

function zip(el1, el2, { defaultValue = 1 } = {}) {
  let result = [];
  const [longer, shorter] = el1.length > el2.length ? [el1, el2] : [el2, el1];

  for (let i = 0; i < longer.length; i++) {
    const el = longer[i];
    const otherEl = shorter[i] || 1;
    result.push([el, otherEl]);
  }

  return result;
}

export { addBigIntegers };
