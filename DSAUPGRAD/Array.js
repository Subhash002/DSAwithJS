"use strict";

const arr1 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

const removeDup = [];
for (let i = 0; i < arr1.length; i++) {
  if (i < arr1.length - 1) {
    {
      if (arr1[i] !== arr1[i + 1]) {
        removeDup.push(arr1[i]);
      }
    }
  } else {
    removeDup.push(arr1[i]);
  }
}
console.log(arr1);
console.log(removeDup);

let val = 1;
let count = 0;
let reduceLength = false;
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] !== val) {
    arr1[count++] = arr1[i];
  } else {
    reduceLength = true;
  }
}
if (reduceLength) {
  arr1.length -= 1;
}
console.log(arr1);

var evenCount = 0;

var oddCount = 0;

for (const vals of arr1) {
  if (vals % 2 === 0) {
    evenCount += 1;
  } else {
    oddCount += 1;
  }
}

console.log(oddCount);

console.log(evenCount);
const employees = ["John", "Jane", "Mark", "Sarah"];
console.log(employees.toString());


//
var arr1 = [[1,2],[3,4]]
for (let i = 0; i < arr1.length; i++) {
    for (let k = 0; k < i; k++) {
        [arr1[i][k],arr1[k][i]]=[arr1[k][i],arr1[i][k]]
        
    }
}
console.log(arr1);