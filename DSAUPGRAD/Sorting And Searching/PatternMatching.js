const strStr = function (str, ptn) {
  let i = 0;
  let j = 0;
  while (i <= str.length - ptn.length) {
    if (str[i + j] === ptn[j]) {
      if (j === ptn.length - 1) return i;
      j++;
    } else {
      i++;
      j = 0;
    }
  }
  return -1;
};

let haystack = "sadbutsad",
  needle = "sad";
console.log(strStr(haystack, needle));
const strStrR = function (str, ptn) {
  let i = 0;
  let j = 0;
  while (i <= str.length - ptn.length) {
    if (str[i + j] === ptn[j]) {
      if (j === ptn.length - 1) return i;
      j++;
      i++;
    } else {
      i++;
      j = 0;
    }
  }
  return -1;
};