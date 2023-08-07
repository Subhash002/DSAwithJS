// Given three arrays sorted in increasing order.
//  Find the elements that are common in all three arrays.

class Intersection {
  commonElements(arr1, arr2, arr3, n1, n2, n3) {
    let setA = new Set(arr1);
    let setB = new Set(arr2);
    let setC = new Set(arr3);
    let result = [];
    for (const i of setA) {
      if (setC.has(i) && setB.has(i)) {
        result.push(i);
      }
    }
    return result.join(" ");
  }
}
const intersection = new Intersection();
const arr1 = [1, 5, 10, 20, 40, 80];
const arr2 = [6, 7, 20, 80, 100];
const arr3 = [3, 4, 15, 20, 30, 70, 80, 120];

console.log(
  intersection.commonElements(
    arr1,
    arr2,
    arr3,
    arr1.length,
    arr2.length,
    arr3.length
  )
);
