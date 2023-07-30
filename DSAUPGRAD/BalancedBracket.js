var bracketStack = [];
var testString = "(1+2)";
var valid = true;
var i = 0;

while (i < testString.length && valid) {
  var charVal = testString.charAt(i);

  if (charVal === "(") {
    bracketStack.push(charVal);
  } else if (charVal == ")") {
    if (!bracketStack.length === 0) {
      bracketStack.pop();
    } else {
      valid = false;
    }
  }
  i++;
}

if (!bracketStack.length > 0) {
  valid = false;
}

console.log(valid);
