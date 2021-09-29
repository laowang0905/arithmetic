/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums = nums.sort((a, b) => a - b)
  let len = nums.length, ans = Infinity
  for (let i = 0; i < len - 2; i++) {
    let n1 = nums[i], l = i + 1, r = len - 1
    while (l < r) {
      let n2 = nums[l], n3 = nums[r]
      let sum = n1 + n2 + n3
      if (sum > target) {
        r--
      } else if (sum < target) {
        l++
      } else {
        return target
      }
      if (Math.abs(sum - target) < Math.abs(ans - target)) {
        ans = sum
      }
    }
  }
  return ans
}
console.log(threeSumClosest([-1, 2, 1, -4], 1));