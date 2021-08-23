/**
 * 
 * @param {*} s 
 * @param {*} p 
 */
function isMatch(s, p) {
  this.dp = function (s, i, p, j) {
      const m = s.length;
      const n = p.length;
      // base case1 模式串p匹配完了，要看文本串s是否被匹配完，匹配完则说明匹配成功
      if (j === n) {
          return i === m;
      }

      // base case2 当s匹配完了，不能直接根据p是否匹配完判断是否成功，
      // 而是要看p[j..]能够匹配空串，能则算完成匹配，如s = "a", p = "ab*c*"，当i走到s末尾的时候，j并没有走到p的末尾，但是p依然可以匹配s
      if (i === m) {
          // p剩下的个数不是成对出现，肯定不能匹配成功
          if ((n - j) % 2 == 1) {
              return false;
          }

          // 检查是否为 x*y*z* 这种形式，是则能匹配成功，不是则不能匹配成功
          for (j; j + 1 < n; j += 2) {
              if (p[j + 1] != '*') {
                  return false;
              }
          }
          return true;
      }

      // 当s[i]等于p[j]时
      if (s[i] === p[j] || p[j] === '.') {
          // 此时当p[j+1]为*
          if (j < n - 1 && p[j + 1] === '*') {
              // 星号通配符匹配前面的字符0次 或 多次(s跳过一个字符，p不变继续匹配即可) 0次时j+2 多次时i+1
              return this.dp(s, i, p, j + 2) || this.dp(s, i + 1, p, j); 
          } else {
              // p[j+1]不为星号，则i和j同时移动
              return this.dp(s, i + 1, p, j + 1);
          }
      } else {
          // 当s[i]不等于p[j]时，当p[j+1]为*，此时*匹配0次，则i不变，j跳过两位（跳过当前值和*）
          if (j < p.length - 1 && p[j + 1] === '*') {
              return this.dp(s, i, p, j + 2); 
          } else {
              // s[i]不等于p[j]，且p[j+1]不是星号，则一定不匹配
              return false;
          }
      }
  }
  
  // i、j指针分别从0开始移动
  return dp(s, 0, p, 0);
}   