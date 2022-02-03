/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let end = head;
  let previous = head;

  for (let i = 0; i < n; i++) {
    end = end.next;
  }

  while(end && end.next) {
    end = end.next;
    previous = previous.next;
  }

  if (end) {
    previous.next = previous.next.next;
  } else {
    head = head.next;
  }

  return head;
};
