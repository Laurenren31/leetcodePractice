// Input: strs = ["dog","racecar","car"]
// Output: ""

const longestCommonPrefix = (strs) => {
  let results = [];
  if (strs.length === 1) {
    return strs[0];
  }
  strs = strs.sort((a, b) => {
    return a.length - b.length;
  });
  for (let j = 1; j < strs.length; j++) {
    let result = "";
    for (let i = 0; i < strs[0].length; i++) {
      if (strs[0][i] === strs[j][i]) {
        result += strs[0][i];
      }
      if (strs[0][i] !== strs[j][i]) {
        break;
      }
    }
    results.push(result);
  }
  results = results.sort((a, b) => {
    return a.length - b.length;
  });
  if (results[0]) {
    return results[0];
  }
  if (!results[0]) {
    return "";
  }
};
