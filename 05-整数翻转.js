/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let flag = false, front, end, tem
  if (x < 0) {
    flag = true
  }
  x = (Math.abs(x) + "").split('')
  front = 0
  end = x.length-1
  while (front < end) {
    tem = x[front]
    x[front] = x[end]
    x[end] = tem
    front++
    end--
  }
  x = Number(flag?-x.join(''):x.join(''))
  if (x <= -Math.pow(2, 31) || x >= Math.pow(2, 31) - 1) {
    return 0
  }
  return x
};
console.log(reverse(1534236469));