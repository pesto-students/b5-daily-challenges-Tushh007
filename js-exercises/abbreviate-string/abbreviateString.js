import { isString } from 'util';

function abbreviateString(str) {
  const wordsInString = str.split(' ');
  return wordsInString[0] + ' ' + wordsInString[wordsInString.length - 1][0].toUpperCase() + '.';
}

export { abbreviateString };
