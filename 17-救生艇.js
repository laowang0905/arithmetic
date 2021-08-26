/**@description 贪心算法
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
  let res = 0, front = 0, end = people.length - 1
  people.sort((a, b) => a - b)
  while (front <= end) {
    if (people[front] + people[end] <= limit) {
      front++
    }
    end--
    res++

  }
  return res
};
console.log(numRescueBoats([3, 2, 2, 1], 3));