/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  if (!node) return node;

  const newNodes = new Map();

  const clone = (n) => {
    if (!newNodes.has(n.val)) {
      newNodes.set(n.val, new Node(n.val));
      newNodes.get(n.val).neighbors = n.neighbors.map(clone);
    }
    return newNodes.get(n.val);
  }

  return clone(node);
};
