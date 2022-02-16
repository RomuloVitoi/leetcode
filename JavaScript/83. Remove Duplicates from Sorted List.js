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
var deleteDuplicates = function (head) {
  if (!head) return head;

  let pivot = head;
  while (pivot.next) {
    if (pivot.val === pivot.next.val) {
      pivot.next = pivot.next.next;
    } else {
      pivot = pivot.next;
    }
  }

  return head;
};
