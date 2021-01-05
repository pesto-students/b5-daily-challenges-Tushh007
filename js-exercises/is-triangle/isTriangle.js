function isTriangle(sideOne, sideTwo, sideThree) {
  return !(
    sideOne + sideTwo <= sideThree ||
    sideOne + sideThree <= sideTwo ||
    sideTwo + sideThree <= sideTwo
  );
}

export { isTriangle };
