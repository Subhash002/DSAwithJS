function checkStack(reverseStringA, testStringA) {
  const reverseString = reverseStringA.split();
  const testString = testStringA.split();
  for (const c of reverseString) {
    if (c === testString.pop()) {
      return true;
    }
  }
  return false;
}

function checkStackN(testStringA) {
  const testString = testStringA.split();
  for (let c = testString.length - 1; c > 0; c--) {
    if (testString[c] === testString.pop()) {
      console.log(testString[c]);
      console.log(testString[c]);
      return true;
    }
  }
  return false;
}

console.log(checkStackN("racec"));
