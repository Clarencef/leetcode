/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// method 1：
var maxDepth = function(root) {
  
  return find(root); 
  
  function find(node) {
     var nodeLeftSize = 1;
     var nodeRightSize = 1;
    
     // 若沒有節點return 0
     if(node === null) {
       return 0;
     }
    
     // 若有左邊子節點繼續遍歷下去
     if(node.left !== null) {
        nodeLeftSize += find(node.left);
     }
    
     // 若有右邊子節點繼續遍歷下去
     if(node.right !== null) {
       nodeRightSize += find(node.right);
     }
    
     //比較左右節點深度較深者回傳該值
     return nodeLeftSize > nodeRightSize ? nodeLeftSize : nodeRightSize;
  }
};

// method 2：
var maxDepth2 = function(root) {
  if(root === null) {
      return 0;
  }    
  return Math.max(maxDepth2(root.left),maxDepth2(root.right)) + 1;
};