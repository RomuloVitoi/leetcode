/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  const reverse = (current, previous) => {
    if (!current) {
      return previous;
    }
    const next = current.next;
    current.next = previous;
    return reverse(next, current);
  };

  return reverse(head, null);
};
