/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length == 0) return []
  
  let map = { 2: 'abc', 3: 'def', 4: "ghi", 5: "jkl", 6: "mno", 7: "pqrs", 8: "tuv", 9: "wxyz" }
  let ans = []
  
  helper('', digits)
  return ans

  function helper(str, digit) {
    if (digit.length == 0) {
      ans.push(str)
    } else {
      let value = map[digit[0]]
      for (let i = 0; i < value.length; i++) {
        str += value[i]
        helper(str, digit.slice(1))
        str = str.slice(0, -1)
      }
    }
  }
}
console.log(letterCombinations('23'));