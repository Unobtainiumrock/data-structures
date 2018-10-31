# Nodes About

  This directory will contain all Node classes for each individual data structure. The reason why there are multiple nodes is because there's different requirements depending on which data structure the Node will reside within. I might change this later, so that these unique properties existing between different nodes will be moved to exist on each data structure as a special method which attaches them to a generic node. My reason for this current setup is that it makes it much simpler to unit test the behavior of each node in an isolated manner.

## Contents

* **Doubly Linked List Node**

This is your basic node which contains a `value`, `next`, and `previous` pointer. It will be used by the DoublyLinked class.
  
```JavaScript
  class Node {
    constructor(value) {
     this.value = value;
     this.next = null;
     this.previous = null;
    }
  }
```
* **Tree Node**

This is node will contain a few different properties. It will have a pointer to its parent node as well as its own children nodes stored in an array. There's also something you might not be used to seeing - position. The position property will be an integer for each node to be self-aware of where they're positioned within the children array of a parent. This is useful for when we use the `delete` operator to remove a
```JavaScript
class Node {
  constructor(value) {
    this.value = value;
    this.numberOfOccurrences = 1;
    this.parentNode = null;
    this.children = [];
    this.position = null;
  }
}
```