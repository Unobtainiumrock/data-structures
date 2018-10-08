class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

// Description
  // A doubly linked list is much like a singly linked list, except we also have each node pointing to
  // a previous value within the list.
  
// Trade-offs vs an Array and the common ground.
  // Just like a normal linked list, the biggest trade-off that occurs vs an array is
    //  --Access vs insertion/deletion--
    // Arrays are stored contiguously in memory and linked lists are not. This means that 
    // whenver we insert or delete an element to an array it will dynamically resize itself and do
    // a bunch of stuff.

// Time Complexity
  // Access and search are O(n), because we don't have a saved reference to where something exists.
  // This means we have to iterate and check each node for whatever we're searching or trying to access.
    // Access: O(n) 
    // Search: O(n)
  // Insertion and deletion are constant time because memory doesn't have to be reallocated when
  // a node is inserted or removed. This is because the nodes are stored in non-contiguous way.
    // Insertion: O(1)
    // Deletion: O(1)
class DoublyLinkedList {

  constructor(node = null) {
    this.head = node;
    this.tail = this.head;
    this.size = node ? 1 : 0;
  }

  /**
   * @param  {integer} nodeValue is the value of the node being added to the head (prepend).
   * @returns {Object} this DoublyLinkedList's instance so that we can chain methods when interfacing with it.
   */
  addTohead(nodeValue) {
    const node = new Node(nodeValue);
    node.next = this.head;
    this.head.previous = node;
    this.head = node;
    this.size++;
    return this;
  }
  
  /**
   * @param  {integer} nodeValue is the value of the node being added to the tail (append).
   * @returns {Object} this DoublyLinkedList's instance so that we can chain methods when interfacing with it.
   */
  addToTail(nodeValue) {
    const node = new Node(nodeValue);
    node.previous = this.tail;
    this.tail.next = node;
    this.tail = node;
    this.size ++;
    return this;
  }

  // Basic remove from head.
  removeFromHead() {
    this.head = this.head.next;
    this.head.previous = null;
    this.size--;
    return this;
  }

  // Basic remove from tail.
  removeFromTail() {
    this.tail = this.tail.previous;
    this.tail.next = null;
    this.size--;
    return this;
  }

  /**
   * This is a function designed to find the first node (starting at the head) which matches a provided value
   * It will be commonly used within other methods.
   * @param  {integer} nodeValue is the value of the node you want to find.
   * @returns {Object} returns the current node's head 
   */
  _findNode(nodeValue) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === nodeValue) {
        break;
      } else {
        currentNode = currentNode.next;
      }
    }
    return currentNode;
  }
  
  /**
   * @param  {integer} nodeValue is the value of the node we want to remove.
   */
  removeNode(nodeValue) {
    let match = this._findNode(nodeValue);
    if (match) {
      // set match's previous node to match's next node
      match.previous.next = match.next;
      // set match's next node to match's previous node
      match.next.previous = match.previous;
      console.log('Node with value of: ' + nodeValue + ' successfully removed');
    } else {
      console.log('This node does not exist on the doubly linekd list.');
    }
    return this;
  }
  
  /**
   * @param  {} nodeValue
   * @param  {} targetLocation
   */
  addNode(nodeValue,targetLocation) {
    
  }

}

const listOne = new DoublyLinkedList();
