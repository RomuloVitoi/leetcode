/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let val = undefined;

  const count = (node, offset) => {
    if (!node) return 0;

    const left = count(node.left, offset);
    if (left + offset + 1 === k) {
      val = node.val;
      return;
    }

    const right = count(node.right, offset + left + 1);
    return left + right + 1;
  };

  count(root, 0)

  return val;
};
