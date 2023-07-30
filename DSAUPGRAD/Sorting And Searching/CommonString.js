const longestCommonPrefix = (strs) => {
  let commonStr = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(commonStr) !== 0) {
      commonStr = commonStr.substring(0, commonStr.length - 1);
    }
  }
  return commonStr;
};
