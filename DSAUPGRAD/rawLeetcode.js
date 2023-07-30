function commonSubstring(str1, str2) {
  let results = new Map();
  for (let index = 0; index < str1.length; index++) {
    for (let j = index; j < str2.length; j++) {
      if (str1[index] === str2[j]) {
        str1 = str1.slice(index, str1.length);
        results.set(index, str2[j]);
      }
    }
  }
  return results.size > 0 ? results.size : 0;
}
// text1 = "abcde", text2 = "ace"
console.log(commonSubstring("abcde", "ace"));
