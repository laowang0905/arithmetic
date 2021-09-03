/**
 * @param {sring} roman
 * @return {num}
 */
var romanToInt = function (roman) {
  const ref = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
  let i = 0, res = 0
  while (i < roman.length) {
    if (ref[roman[i]] < ref[roman[i + 1]]) {
      res -= ref[roman[i]]
    } else {
      res += ref[roman[i]]
    }
    ++i
  }
  return res
};
console.log(romanToInt('LVIII'));