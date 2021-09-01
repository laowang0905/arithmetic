var Solution = function (w) {
  const n = w.length;
  this.n = n;
  this.prefix = w.slice();
  for (let i = 0, pre = 0; i < n; i++) {
    this.prefix[i] += pre;
    pre = this.prefix[i]
  }
  this.max = this.prefix[n - 1];//所有元素相加之和
};

Solution.prototype.pickIndex = function () {
  // [1, this.max]
  const tar = Math.ceil(Math.random() * this.max);
  let l = 0, r = this.n - 1; //创建两个指针
  while (l < r) {
    const mid = (r + l) >> 1
    if (tar <= this.prefix[mid]) r = mid;
    else l = mid + 1;
  }
  return l;
}
  
/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
