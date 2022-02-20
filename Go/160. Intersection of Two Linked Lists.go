/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func getIntersectionNode(headA, headB *ListNode) *ListNode {
	set := map[*ListNode]bool{}
	pA := headA
	pB := headB

	for pA != nil || pB != nil {
		if pA != nil {
			if set[pA] {
				return pA;
			}
			set[pA] = true;
			pA = pA.Next;
		}
		if pB != nil {
			if set[pB] {
				return pB;
			}
			set[pB] = true;
			pB = pB.Next;
		}
	}

	return nil;
}
