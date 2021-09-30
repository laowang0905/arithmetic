/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums = nums.sort((a, b) => a - b)
  let len = nums.length, ans = []
  for (let i = 0; i < len - 3; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue
    // 如果最小的四个数相加大于target说明后面任意四个数相加都要大于target
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break
    
    // 如果当前i的值和最大的三个数相加小于target说明和其他任意三个数相加都要小于target
    if (nums[i] + nums[len - 1] + nums[len - 2] + nums[len - 3] < target) continue
    
    for (let j = i + 1; j < len - 2; j++) {
      if (j>i+1&&nums[j] == nums[j - 1]) continue
      if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) break
      if (nums[i] + nums[j] + nums[len - 1] + nums[len - 2] < target) continue
      let l = j + 1, r = len - 1
      while (l < r) {
        let sum = nums[i] + nums[j] + nums[l] + nums[r]
        if (sum == target) {
          ans.push([nums[i], nums[j], nums[l], nums[r]])
          while (l < r && nums[l] == nums[l + 1]) {
            l++
          }
          l++
          while (l < r && nums[r] == nums[r - 1]) {
            r--
          }
          r--
        } else if (sum < target) {
          l++
        } else {
          r--
        }
      }
    }
  }
  return ans
};
console.log(fourSum([2,2,2,2,2], 8));