/**
 * @description 找出数组中最小的k个数。以任意顺序返回这k个数均可
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var smallestK = function(arr, k) {
  return arr.sort((a, b) => a-b).slice(0, k)
};