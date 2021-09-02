/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
  let cur = head, x = head
  while (cur != null) {
    if (k > 0) {
      cur = cur.next
      k--
    } else {
      x = x.next
      cur = cur.next
    }
  }
  return x
};
let list = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null
        }
      }
    }
  }
}
getKthFromEnd(list, 2)