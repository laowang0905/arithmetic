/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length == 1) {
    return strs.toString()
  }
  let minLen = strs.reduce((acc, item) => Math.min(item.length, acc), strs[0].length)
  for (let i = 0; i <= minLen; i++) {
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] != strs[0][i]) {
        return strs[0].slice(0, i)
      }
    }
  }
  return strs[0]
};

console.log(longestCommonPrefix(["ab", "a"]));
console.log(longestCommonPrefix(["flower", "flow", "flight"]))
console.log(longestCommonPrefix(["flower", "flower", "flower", "flower"]))
console.log(longestCommonPrefix(["", ""]));
