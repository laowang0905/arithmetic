/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
  let i = s[0], start = 1, tem = 1, res = 0
  while(start<s.length) {
    if (s[start] !== i) {
      tem--
      start++
    } else {
      tem++
      start++
    }
    if (tem === 0) {
      res++
    }
  }
  return res
};
console.log(balancedStringSplit('RLLLLRRRLR'));