/**
 * @description 给你一个整数 n 。按下述规则生成一个长度为 n + 1 的数组 nums ：
    nums[0] = 0
    nums[1] = 1
    当 2 <= 2 * i <= n 时，nums[2 * i] = nums[i]
    当 2 <= 2 * i + 1 <= n 时，nums[2 * i + 1] = nums[i] + nums[i + 1]
    返回生成数组 nums 中的 最大 值。
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function(n) {
  let max = 0
  var dp = function(n){
      // 1.确定dp状态 
      if(n<=1) return n;
      if(n%2===0) return dp(n/2);
      // 2.确定dp转移方程
      return dp((n-1)/2)+dp((n+1)/2);
  }
  let i = 0;
  while(i<=n){
      max = Math.max(dp(i),max)
      i++
  }
  return max
};

console.log(getMaximumGenerated(7));