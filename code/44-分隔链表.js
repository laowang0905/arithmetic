/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (head, k) {
  let len = 0
  tem = head
  while (tem) {
    len++
    tem = tem.next
  }
  let mod = len % k, avg = parseInt(len / k), cur = head
  const ans = new Array(k).fill(null)

  for (let i = 0; i < k && cur != null; i++) {
    ans[i] = cur
    let curLen = avg + (i < mod ? 1 : 0)
    for (let j = 1; j < curLen; j++) {
      cur = cur.next
    }
    const next = cur.next
    cur.next = null
    cur = next
  }
  return ans
};
splitListToParts('as', 5)