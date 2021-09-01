/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * @description 二分法
 */
var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1] //确保nums1 是较短的数组
  }
  let len1 = nums1.length, len2 = nums2.length, front = 0, end = len1
  while (front <= end) {
    let i = Math.floor((front + end) / 2)
    let j = Math.floor((len1 + len2+1) / 2 - i)
    let nums1Left = i == 0 ? -Infinity : nums1[i - 1]
    let nums1Right = i == len1 ? Infinity : nums1[i]
    let nums2Left = j == 0 ? -Infinity : nums2[j - 1]
    let nums2Right = j == len2 ? Infinity : nums2[j]
    if (nums1Left <= nums2Right && nums2Left <= nums1Right) {
      return (len1 + len2) % 2 == 1 ? Math.max(nums1Left, nums2Left)
        : (Math.max(nums1Left, nums2Left) + Math.min(nums1Right, nums2Right)) / 2
    } else if (nums1Left > nums2Right) {
      end = i - 1
    } else {
      front = i + 1
    }
  }
};
console.log(findMedianSortedArrays([1,3], [2]));