/**
 * @description 给你一个长度为 n 且下标从 0 开始的整数数组 chalk 和一个整数 k 。
 * 一开始粉笔盒里总共有 k 支粉笔。当编号为 i 的学生回答问题时，他会消耗 chalk[i] 支粉笔。
 * 如果剩余粉笔数量 严格小于 chalk[i] ，那么学生 i 需要 补充 粉笔。
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
// var chalkReplacer = function (chalk, k) {
//   let sum = 0, i = 0, len = chalk.length
//   while (sum + chalk[i % len] <= k) {
//     sum += chalk[i % len]
//     i++
//   }
//   return i % len
// };

var chalkReplacer = function (chalk, k) {
  const total = chalk.reduce((a, b) => a + b)
  let mod = k % total
  for (let i = 0; i < chalk.length; i++) {
    if (mod < chalk[i]) {
      mod = i
      break
    }
    mod -= chalk[i]
  }
  return mod
};
console.log(chalkReplacer([5, 1, 5], 22) == 0);
console.log(chalkReplacer([3, 4, 1, 2], 25) == 1);
