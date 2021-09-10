/**
 * @description 这里有 n 个航班，它们分别从 1 到 n 进行编号。
    有一份航班预订表 bookings ，表中第 i 条预订记录 bookings[i] = [firsti, lasti, seatsi] 
    意味着在从 firsti 到 lasti （包含 firsti 和 lasti ）的 每个航班 上预订了 seatsi 个座位。
    请你返回一个长度为 n 的数组 answer，其中 answer[i] 是航班 i 上预订的座位总数。
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */

 /**
  * 差分数组对应的概念是前缀和数组，对于数组 [1,2,2,4]，其差分数组为 [1,1,0,2]，
  * 差分数组的第 i 个数即为原数组的第 i-1 个元素和第 i 个元素的差值，也就是说我们对差分数组求前缀和
  * 即可得到原数组。
  */
var corpFlightBookings = function(bookings, n) {
  let arr = new Array(n).fill(0)
  for (let booking of bookings) {
    arr[booking[0] - 1] += booking[2]
    if (booking[1] < n) {
      arr[booking[1]] -=booking[2]
    }
  }
  for (let i = 1; i < n; i++) {
    arr[i] += arr[i-1]
  }
  return arr
};
console.log(corpFlightBookings([[1,2,10],[2,3,20],[2,5,25]], 5));