/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let start = 0, end = nums.length-1
  while (start <= end) {
    let pos = (end + start) >> 1
    const cur = nums[pos]
    if (cur > target) {
      end = pos - 1
    } else if (cur < target) {
      start = pos + 1
    } else {
      return pos
    }
  }
  return -1
};
search([-1, 0, 3, 5, 9, 12], 9);
search([-1, 0, 3, 5, 9, 12], 13);
search([-1, 0, 3, 5, 9, 12], 2);