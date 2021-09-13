/**
 * @description 给定平面上 n 对 互不相同 的点 points ，其中 points[i] = [xi, yi] 。
 * 回旋镖 是由点 (i, j, k) 表示的元组 ，其中 i 和 j 之间的距离和 i 和 k 之间的距离相
 * 等（需要考虑元组的顺序）。
 * @param {number[][]} points
 * @return {number}
 */
function des([x1, y1], [x2, y2]) {
  return (y2 - y1) ** 2 + (x2 - x1) ** 2;
}
var numberOfBoomerangs = function (points) {
  if (points.length < 3) return 0;
  const map = {}
  let res = 0
  points.forEach(i => {
    map[i] = {}
    points.forEach(j => {
      if (i !== j) {
        // 计算距离
        let d = des(i, j)
        map[i][d] = (map[i][d] || 0) + 1
      }
    })
    for (let d in map[i]) {
      if (map[i][d] >= 2) {
        res += map[i][d] * (map[i][d] - 1)
      }
    }
  });
  return res
};
console.log(numberOfBoomerangs([[0, 0], [1, 0], [2, 0]]));