function reverse(array) {
  for (let index = array.length - 1; index >= 0; index--) {
    console.log(array[index]);
  }
}

//DSA
// Pattern Printing
function pattern1(n) {
  let i = 1;
  let line = "";
  while (i <= n) {
    let j = 1;
    while (j <= n) {
      line += "*";
      j++;
    }
    line += "\n";
    i++;
  }
  console.log(line);
}
console.log(pattern1(3));

// ***
// ***
// ***

function pattern2(n) {
  let i = 1;
  let line = "";
  while (i <= n) {
    let j = 1;
    while (j <= n) {
      line += `${i}`;
      j++;
    }
    line += "\n";
    i++;
  }
  console.log(line);
}
console.log(pattern2(3));
// 111
// 222
// 333
function pattern3(n) {
  let i = 1;
  let line = "";
  while (i <= n) {
    let j = 1;
    while (j <= n) {
      line += `${j}`;
      j++;
    }
    line += "\n";
    i++;
  }
  console.log(line);
}
console.log(pattern3(3));
// 123
// 123
// 123
function pattern4(n) {
  let i = 1;
  let line = "";
  while (i <= n) {
    let j = 1;
    while (j <= n) {
      line += `${n - j + 1}`;
      j++;
    }
    line += "\n";
    i++;
  }
  console.log(line);
}
console.log(pattern4(3));

// 321;
// 321;
// 321;

function pattern5(n) {
  let i = 1;
  let line = "";
  let counter = 1;
  while (i <= n) {
    let j = 1;
    while (j <= n) {
      line += `${counter}`;
      j++;
      counter++;
    }
    line += "\n";
    i++;
  }
  return line;
}
console.log(pattern5(3));
// 123
// 456
// 789
function pattern6(n) {
  let i = 1;
  let line = "";
  while (i <= n) {
    let j = 1;
    while (j <= i) {
      line += "*";
      j++;
    }
    line += "\n";
    i++;
  }
  console.log(line);
}
console.log(pattern6(4));
// *
// **
// ***
// ****
function pattern7(n) {
  let i = 1;
  let line = "";
  while (i <= n) {
    let j = 1;
    while (j <= i) {
      line += `${i}`;
      j++;
    }
    line += "\n";
    i++;
  }
  console.log(line);
}
console.log(pattern7(4));
// 1
// 22
// 333
// 4444
function pattern8(n) {
  let i = 1;
  let line = "";
  let counter = 1;
  while (i <= n) {
    let j = 1;
    while (j <= i) {
      line += `${counter}`;
      counter++;
      j++;
    }
    line += "\n";
    i++;
  }
  return line;
}
console.log(pattern8(4));
// 1
// 23
// 456
// 78910
function pattern9(n) {
  let i = 1;
  let line = "";
  while (i <= n) {
    let j = 1;
    let ref = i;
    while (j <= i) {
      line += `${ref}`;
      ref++;
      j++;
    }
    line += "\n";
    i++;
  }
  return line;
}
console.log(pattern9(10));
// 1
// 23
// 345
// 4567
// 56789
// 67891011
// 78910111213
// 89101112131415
// 91011121314151617
// 10111213141516171819
function pattern10(n) {
  let i = 1;
  let line = "";
  while (i <= n) {
    let j = 1;

    while (j <= i) {
      line += `${i - j}`;

      j++;
    }
    line += "\n";
    i++;
  }
  return line;
}
console.log(pattern10(10));
// 0
// 10
// 210
// 3210
// 43210
// 543210
// 6543210
// 76543210
// 876543210
// 9876543210
function pattern11(n) {
  let i = 1;
  let line = "";
  while (i <= n) {
    let j = 1;

    while (j <= i) {
      line += `${i - j + 1}`;

      j++;
    }
    line += "\n";
    i++;
  }
  return line;
}
console.log(pattern11(10));

const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function pattern12(n) {
  let i = 0;
  let line = "";
  while (i <= n) {
    let j = 1;
    while (j <= n) {
      line += alphabet[i];

      j++;
    }
    line += "\n";
    i++;
  }
  console.log(line);
}
console.log(pattern12(3));
// AAAA
// BBBB
// CCCC
function pattern13(n) {
  let i = 1;
  let line = "";
  while (i <= n) {
    let j = 1;
    while (j <= n) {
      line += alphabet[j - 1];

      j++;
    }
    line += "\n";
    i++;
  }
  console.log(line);
}
console.log(pattern13(3));

function pattern14(n) {
  let i = 1;
  let line = "";
  while (i <= n) {
    let j = 1;
    let counter = i;
    while (j <= n) {
      line += alphabet[counter - 1];
      counter++;
      j++;
    }
    line += "\n";
    i++;
  }
  console.log(line);
}
console.log(pattern14(3));
console.log("This is from 15");

function pattern15(n) {
  let i = 0;
  let line = "";
  while (i <= n) {
    let j = 0;
    while (j < i) {
      line += alphabet[j];
      j++;
    }
    line += "\n";
    i++;
  }
  console.log(line);
}
console.log(pattern15(3));
// A
// AB
// ABC

function pattern16(n) {
  let i = 0;
  let line = "";
  while (i <= n) {
    let j = 0;
    let counter = i;
    while (j < i) {
      line += alphabet[counter - 1];
      j++;
      counter++;
    }
    line += "\n";
    i++;
  }
  console.log(line);
}
console.log(pattern16(5));
// A
// BC
// CDE
// DEFG
// EFGHI

function pattern17(n) {
  let i = 0;
  let line = "";
  while (i <= n) {
    let j = 0;
    let counter = i;
    while (j < i) {
      line += alphabet[counter - 1];
      j++;
      counter++;
    }
    line += "\n";
    i++;
  }
  console.log(line);
}
console.log(pattern17(5));

function pattern18(n) {
  let i = 1;
  let line = "";
  while (i <= n) {
    let j = n;
    while (j >= i) {
      line += "*";
      j--;
    }
    line += "\n";
    i++;
  }
  console.log(line);
}
console.log(pattern18(4));
// ****
// ***
// **
// *
function pattern19(n) {
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "*".repeat(i));
  }
}
console.log(pattern19(4));
//    *
//   **
//  ***
// ****

function pattern20(n) {
  for (let i = 0; i <= n; i++) {
    console.log(" ".repeat(i) + "*".repeat(n - i + 1) + "*".repeat(n - i));
  }
}
console.log(pattern20(4));
// *********
//  *******
//   *****
//    ***
//     *

console.log("This is from 21th pattern");
function pattern21(max) {
  for (let index = 0; index <= max; index++) {
    console.log(" ".repeat(max - index) + "*".repeat(index + 1));
  }
}
console.log(pattern21(4));
