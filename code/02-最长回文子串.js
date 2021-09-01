/**
 * @param {string} s
 * @return {string}
 * @description 中心扩散法
 */
var longestPalindrome = function (s) {
  let res = ''
  for (let i = 0; i < s.length; i++) {
    helper(i, i)
    helper(i, i+1)
  }
  function helper(left, right) {
    while (left >= 0 && right < s.length && s[left] == s[right]) {
      left--
      right++
    }
    res = right-left-1>res.length?s.slice(left+1, right):res
  }
  return res
};
console.log(longestPalindrome('asda'));