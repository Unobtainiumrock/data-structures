//////////////////////////////////////////////////////////////////////////////////// 
// IN PROGRESS IN PROGRESS IN PROGRESS IN PROGRESS IN PROGRESS IN PROGRESS IN PROGRESS
////////////////////////////////////////////////////////////////////////////////////

class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

/**
 * This is our Tree data structure.
 */
class Tree {
  constructor(node = null) {
    this.base = node;
  }

  /**
   * 
   * 
   * @param  {int} nodeVaue is a numerical value of the node we wish to find and delete.
   */
  deleteNode_DFS(nodeVaue) {
    
  }

  /**
   * @param  {int} nodeVaue is a numerical value of the node we wish to find and delete.
   */
  deleteNode_BFS(nodeValue) {
    
  }

  /**
   * This function adds a new node as a child node to a provided target node's value in a
   * breadth first search manner.
   * 
   * @param  {int} nodeValue is the numerical value of the node to be added.
   * @param  {int} locationValue is the numerical value of the node that we will add our new to
   *               a child to.
   * @returns Tree this: We return this instance of the tree, so that we can easily chain methods.
   */
  addNodeToLocation_BFS(nodeValue, locationValue) {
    const node = new Node(nodeValue);
    const targetMatch = this._BFS(locationValue);
    if (!targetMatch) console.log("Could not append the node.");
    targetMatch.children.push(node);
    return this;
  }

  /**
   * This function adds a new node as a child node to a provided target node's value in a
   * depth first search manner.
   * 
   * @param  {int} nodeValue is the numerical value of the node to be added.
   * @param  {int} locationValue is the numerical value of the node that we will add our new to
   *               a child to.
   * @returns Tree this: We return this instance of the tree, so that we can easily chain methods.
   */
  addNodeToLocation_DFS(nodeValue, locationValue) {
    const node = new Node(nodeValue);
    const targetMatch = this._DFSsearch(locationValue);
    if (!targetMatch) console.log("Could not append the node.");
    targetMatch.children.push(node);
    return this;
  }

  /**
   * This is a internally used search function for finding where to add nodes to.
   * It searches for a target node using a depth-first-search.
   * 
   * @param  {int} nodeValue is the numerical value of the node we are searching for.
   * @returns Node current: We return the current node, so that we can access its value, or push new
   *                        child nodes.
   */
  _BFSsearch(nodeValue) {
    let current = this.base;
    let queue = [];
    while (current.value !== nodeValue) {
      queue.concat(current.children);
      if (queue.length) {
        current = queue.shift();
      } else {
        current = null;
        console.log("No match was found!");
        break;
      }
    }
    return current;
  }


  /**
   * This is a internally used search function for finding where to add nodes to.
   * It searches for a target node using a breadth-first-search.
   * 
   * @param  {int} nodeValue is the numerical value of the node we are searching for.
   * @returns Node current: We return the current node, so that we can access its value, or push new
   *                        child nodes.
   */
  _DFSsearch(nodeValue) {
    let current = this.base;
    let stack = [];
    while (current.value !== nodeValue) {
      for (let i = children.length - 1; i > 0; i--) {
        stack.push(children[i]);
      }

      if (stack.length) {
        current = stack.pop();
      } else {
        current = null;
        console.log("No match was found!");
        break;
      }

    }
    return current;
  }

}




