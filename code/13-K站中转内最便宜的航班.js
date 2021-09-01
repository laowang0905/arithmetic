/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, K) {
  // 初始化 dp 数组，所有花费填充为 Infinity
  let dp = [];
  for (let i = 0; i < n; i++) {
    dp[i] = new Array( n ).fill( Infinity );
  }
  
  // 填充 src 可直达的点
  for (let i = 0; i < flights.length; i++) {
    if (flights[i][0] === src) {
      dp[flights[i][1]][0] = flights[i][2];
    }
  }
  
  // 填充 dp[src][k] 都为 0
  // 不管通过几步到达初始点 src 花费都为0
  for (let i = 0; i < K; i++) {
    dp[src][i] = 0;
  }
  
  // 遍历填充可达的航班 
  for (let k = 1; k <= K; k++) {
    for (let flight of flights) {
      if (flight[0] !== Infinity) {
        dp[flight[1]][k] = Math.min(dp[flight[1]][k], dp[flight[0]][k - 1] + flight[2]);
      }
    }
  }
  
  return dp[dst][K] === Infinity ? -1 : dp[dst][K];
}
console.log(findCheapestPrice(3, [[0,1,100],[1,2,100],[0,2,500]], 0, 2, 1));