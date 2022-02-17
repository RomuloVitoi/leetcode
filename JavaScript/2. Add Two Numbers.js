/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let list = new ListNode();
  let head = list;
  let carry = false;

  while (l1 || l2 || carry) {
    sum = (l1?.val || 0) + (l2?.val || 0) + (carry ? 1 : 0)
    carry = sum > 9;

    head.next = new ListNode(sum % 10);
    head = head.next;

    l1 = l1?.next;
    l2 = l2?.next;
  }

  return list.next;
};
