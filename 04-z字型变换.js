/**
 * 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。
   比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：

   P   A   H   N
   A P L S I I G
   Y   I   R
  之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。
 */
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  let newS = "", res = ''
  if (numRows == 1 || s.length <= numRows) {
    return s
  }
  for (let i = 0; i < s.length; i += 2 * numRows - 2) {
    let tem = s.slice(i + numRows, i + 2 * numRows - 2).split("").reverse()
    numRows - 2 > tem.length && (tem.unshift(...new Array(numRows - 2 - tem.length).fill(" ")))
    newS += s.slice(i, i + numRows) + ' ' + tem.join('') + ' '
  }
  console.log(newS);
  for (let j = 0; j < numRows; j++) {
    for (let k = 0; k < newS.length / numRows; k++) {
      if (newS[j + k * numRows] != undefined && newS[j + k * numRows] != " ") {
        res += newS[j + k * numRows]
      }
    }
  }
  return res
};
console.log(convert("PAYPALISHIRING", 4)=="PINALSIGYAHRPI");