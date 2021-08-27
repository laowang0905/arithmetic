  /**
   * initialize your data structure here.
   */
  var MedianFinder = function () {
    this.arr = []
  };

  /** 
  * @param {number} num
  * @return {void}
  */
  MedianFinder.prototype.addNum = function (num) {
    if (this.arr.length == 0) {
      this.arr.push(num)
    } else if (this.arr.length == 1) {
      num > this.arr[0] ? this.arr.push(num) : this.arr.unshift(num)
    } else {
      let front = 0, end = this.arr.length -1 
      while (front <= end) {
        pos = Math.floor((end + front) / 2)
        if (this.arr[pos] < num) {
          front = pos + 1
        } else if(this.arr[pos] > num){
          end = pos -1
        } else {
          front = pos
          break
        }
      }
      this.arr.splice(front, 0, num)
    }
  };

  /**
  * @return {number}
  */
  MedianFinder.prototype.findMedian = function () {
    let len = this.arr.length
    return len % 2 == 0 ? (this.arr[Math.floor(len / 2) - 1] + this.arr[Math.floor(len / 2)]) / 2 : this.arr[Math.floor(len / 2)]
  };


var obj = new MedianFinder()
obj.addNum(6)
// console.log(obj.findMedian());
obj.addNum(10)
// console.log(obj.findMedian());
obj.addNum(2)
// console.log(obj.findMedian());
obj.addNum(6)
// console.log(obj.findMedian());
obj.addNum(5)
// console.log(obj.findMedian());
obj.addNum(0)
// console.log(obj.findMedian());
obj.addNum(6)
// console.log(obj.findMedian());
obj.addNum(3)
// console.log(obj.findMedian());
obj.addNum(1)
// console.log(obj.findMedian());
obj.addNum(0)
obj.addNum(0)

console.log(obj.findMedian());
