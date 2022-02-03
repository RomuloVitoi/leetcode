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
var middleNode = function (head) {
  let end = head;
  let middle = head;

  while (end && end.next) {
    middle = middle.next;
    end = end.next.next;
  }

  return middle;
};
