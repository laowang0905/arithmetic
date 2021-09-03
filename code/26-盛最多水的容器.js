/**
 * @description 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。
 *   在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。找出其中的两条线，
 *   使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * 
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let start = 0, end = height.length - 1, s = 0
  while (start < end) {
    let tem
    if (height[start] < height[end]) {
      tem = height[start] * (end - start)
      start++
    } else {
      tem = height[end] * (end - start)
      end--
    }
    if (tem > s) {
      s = tem
    }
  }
  return s
};
console.log(maxArea([1,8,6,2,5,4,8,3,7]));