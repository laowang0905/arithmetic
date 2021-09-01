/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let str = x + '', front = 0, end = str.length-1
  if (str.length == 1) {
      return true
  }
  while (str[front] == str[end]) {
    if (front >= end) {
      return true
    }
    front++
    end--
  }
  return false
};
console.log(isPalindrome(10));
console.log(isPalindrome(121));
console.log(isPalindrome(-121));