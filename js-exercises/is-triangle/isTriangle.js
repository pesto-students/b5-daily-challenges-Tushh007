function isTriangle(sideOne, sideTwo, sideThree) {
  if (
    sideOne + sideTwo <= sideThree ||
    sideOne + sideThree <= sideTwo ||
    sideTwo + sideThree <= sideTwo
  )
    return false;
  return true;
}

export { isTriangle };
