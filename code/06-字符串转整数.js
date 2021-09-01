/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  s = parseInt(s)
  if (isNaN(s)) {
    return 0
  }
  if (s <= - Math.pow(2, 31) || s >= Math.pow(2, 31)-1) {
    s = s<0?(- Math.pow(2, 31)):(Math.pow(2, 31)-1)
  }
  return s
};
console.log(myAtoi('42'));
console.log(myAtoi("     -42"));
console.log(myAtoi('words and 98'));
