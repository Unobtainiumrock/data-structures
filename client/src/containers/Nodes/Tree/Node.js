
class Node {
  constructor(value) {
    this.value = value;
    this.numberOfOccurrences = 1;
    this.parentNode = null;
    this.children = [];
    this.position = null;
  }
}

export default Node;
