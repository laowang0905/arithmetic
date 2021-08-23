/**
 * @description 给定一个字符串 s 和一个整数 k，从字符串开头算起，每 2k 个字符反转前 k 个字符。
    如果剩余字符少于 k 个，则将剩余字符全部反转。
    如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let arr = [], i = k
  for ( i; i < s.length; i = i + k) {
    arr.push(s.slice(i-k, i))
  }
  arr.push(s.slice(i - k))
  arr = arr.map((item, index) => {
    if (index % 2 == 0) {
      return item.split('').reverse().join('')
    }
  })
  return arr.join('')
};
reverseStr('abcdefg', 2)
let arr = [{age: 12}, {age: 12}, {age: 12}]

console.log(arr.map(item => {
  item
}));