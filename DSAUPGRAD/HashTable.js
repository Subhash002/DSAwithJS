`In this exercise, we will see we can union together two lists of values. A union is when we combine all of the elements from two lists,
 such that we have a list that contains a single instance of all elements in both lists. For example for the lists [1,2,4] and [1,3,5], 
 the union is [1,2,3,4,5]. To complete a union, we need to ensure no duplicate values are added to the resulting list. This can be done
  using a hash table, which can verify no element that already exists gets added again. The code below demonstrates this.`;
const map1 = new Map();

var union = [];
const arr1 = [1, 3, 5, 7, 9];
const arr2 = [1, 2, 4, 6, 8, 10];
for (let i = 0; i < arr1.length; i++) {
  if (!map1.has(arr1[i])) {
    map1.set(arr1[i], arr1[i]);
    union.push(arr1);
  }
}
for (let i = 0; i < arr2.length; i++) {
  if (!map1.has(arr2[i])) {
    map1.set(arr2[i], arr2[i]);
    union.push(arr2);
  }
}
console.log(
  map1
) //console.log(union)
`In this exercise, we will see how hashing can help us count the number of occurrences of a value in a list.
The process of doing this is straightforward. We iterate the list, adding values into the hash table. If the value does not already exist in the table,
it is assigned a value of 1, indicating one instance of it. If the value exists in the table, its value is incremented to count the number of occurrences. 
We will use the map object in Javascript, which is a fully implemented hash table, to demonstrate this process. The code below shows how the counting is completed.`;
// const map1 = new Map();

const arr = [1, 4, 3, 2, 5, 1, 4, 2, 3, 1, 5, 1, 3, 2];
for (let i = 0; i < arr.length; i++) {
  if (map1.has(arr[i])) {
    map1.set(arr[i], map1.get(arr[i]) + 1);
  } else {
    map1.set(arr[i], 1);
  }
}
console.log(map1);

`Implementating Hash Table`;

class HashTable {
  constructor(size) {
    this.size = size;
    this.table = {};
  }

  calculateHash(value) {
    return value % this.size;
  }

  add(value) {
    let hash = this.calculateHash(value);
    if (this.table[hash] === undefined) {
      table[hash] = value;
    } else {
      let count = 0;
      while (this.table[hash] !== undefined && count < this.size) {
        hash += 1;
        hash = hash % this.size;
        count += 1;
      }
      if (count > this.size) {
        throw "IndexOutOfRange";
      } else {
        this.table[hash] = value;
      }
    }
  }
  contains(value) {
    let hash = this.calculateHash(value);
    if (this.table[hash] === value) return true;
    else {
      let iters = 0;
      while (this.table[hash] != value && iters <= this.size) {
        hash += 1;
        hash = hash % this.size;
        iters += 1;
      }
      if (this.table[hash] == value) {
        return true;
      } else {
        return false;
      }
    }
  }
}

`In this exercise, we will see how we can detect if one set is a subset of another. A set A is a subset of a set B 
if every element in A is also in B. For example, [1,2,3] is a subset of [1,2,3,4,5], since 1,2, and 3 are contained in [1,2,3,4,5].
 To do this, we start by iterating our larger array to add all of its values into the hash table. Once this is done, we iterate the second array,
  checking if all values are in the hash table. If any are not, it is not a subset. Otherwise, it is a subset. The code for this is shown below.`;
// const map1 = new Map();

// const arr1 = [1, 3, 5, 7, 9];
// const arr2 = [1, 3, 5];

for (const i of arr1) {
  if (!map1.has(i)) map1.set(c, c);
}

let isSubset = true;
let i = 0;

while (i < arr2.length) {
  if (!map1.has(arr2[i])) {
    isSubset = false;
  }
  i++;
}
console.log(isSubset);

`Removing duplicates using HashTable`;
function removeDuplicatesHash(arr) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], arr[i]);
    }
  }
  return Array.from(map.values());
}

`Intercept of array`;
let results = [];
for (let i = 0; i < arr.length; i++) {
  if (!map1.has(arr[i])) map1.set(i, arr[i]);
}
for (let i = 0; i < arr.length; i++) {
  if (map1.has(arr2[i])) results.push(arr2[i]);
}

`two sum problem`;
// var arr = [1, 2, 3, 3, 4, 4, 5];
// var h = new HashTable(251);
// var retArr = [];

// for (var i = 0; i < arr.length; i++) {
//   var v = arr[i];

//   if (!h.contains(v)) {
//     retArr.push(v);
//     h.add(v);
//   }
// }

// console.log(retArr);

// var arr = [1, 2, 3, 3, 4, 4, 5];
// var arr2 = [1, 6, 2, 7, 9];

// var h = new HashTable(251);
// var intercept = [];

// for (var i = 0; i < arr.length; i++) {
//   var v = arr[i];
//   if (!h.contains(v)) {
//     h.add(v);
//   }
// }

// for (var i = 0; i < arr2.length; i++) {
//   var v = arr2[i];
//   if (h.contains(v)) {
//     intercept.push(v);
//   }
// }

// console.log(intercept);
`In this exercise, we will learn an efficent solution to the two sum problem.
 The two sum problem is a classic algorithms problem where we want to find two values
 
 in an array that add to a specific value. For example, suppose we have the array [1,2,2,7] and 
 a target value of 9. We would look for values that add up to 9, trying each value. So 1+2 = 3 is not
  a solution, 2+2 = 4 is not a solution, but 2+7 = 9 is a solution. Therefore the solution is (2,7).

To solve this efficently, we slightly change the way the problem is stated. Rather than looking for 
numbers that sum to a specific value, we determine the value required to reach the sum for a given value.
 For example, for the value 1, we would need to add 8 to get to 9. For 2, we would need to add 7 to get to 9.
  We then determine if the value to make the sum work exists in the array. We can efficently implement this 
  with a hash table, as shown below.`;
const map1 = new Map();

const arr1 = [1, 3, 5, 7, 9];
const arr2 = [1, 3, 5];
const arr = [1, 2, 2, 7];
let target = 9;
let solution = [];
let i = 0;
let foundPair = false;
while (i < arr.length) {
  map1.set(arr[i], i);
  i++;
}

i = 0;
while (i < arr.length && !foundPair) {
  let compliment = target - arr[i];
  if (map1.has(compliment)) {
    if (i != map1.get(compliment)) {
      solution.push(arr[i]);
      solution.push(arr[map1.get(compliment)]);
      foundPair = true;
    }
  }
  i++;
}
console.log(solution);
