/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  let v1 = 0, v2 = 0, v1_len = version1.length, v2_len = version2.length
  while (v1 < v1_len || v2 < v2_len) {
    let x = 0, y = 0
    for (; v1 < v1_len && version1[v1] !== "."; v1++) {
      x = x * 10 + parseInt(version1[v1])
    }
    v1++
    for (; v2 < v2_len && version2[v2] !== "."; v2++) {
      y = y * 10 + parseInt(version2[v2])
    }
    v2++
    if (x !== y) {
      return x>y?1:-1
    }
  }
  return 0
};
console.log(compareVersion('1.01', '1.001'));