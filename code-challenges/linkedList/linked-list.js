'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    return this;
  }

  insert(value) {
    let node = new Node(value);
    let current = this.head;
    node.next = current;
    this.head = node;
    return this;
  }

  includes(searchVal) {
    let current = this.head;
    while (current.next) {
      if (current.value === searchVal) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  toString() {
    let current = this.head;
    let string = '';
    while (current.next) {
      string = `${string} { ${current.value} } ->`;
      current = current.next;
    }
    string = `${string} ${null}`;
    console.log(string);
    return this;
  }

  insertBefore(value, newVal) {
    let current = this.head;
    let previous;
    while (current.next) {
      if (current.value === value) {
        let node = new Node(newVal);
        node.next = current;
        previous.next = node;
        return this;
      }
      previous = current;
      current = current.next;
    }
    console.error('target value is not within the list');
    return this;
  }

  insertAfter(value, newVal) {
    let current = this.head;
    while (current.next) {
      if (current.value === value) {
        let node = new Node(newVal);
        let nextNode = current.next;
        current.next = node;
        node.next = nextNode;
        return this;
      }
      current = current.next;
    }
    console.error('target value is not within the list');
  }

  kthFromEnd(k) {}
}


module.exports = LinkedList;

/*
class LinkedList {
  constructor() {
    this.head = null;
  }
  insert(addVal) {
    let node = new Node(addVal);
    node.next = this.head;
    this.head = node;
    return this.head;
  }
  includes(searchVal) {
    let current = this.head;
    let result = searchVal;
    while (current !== null) {
      if (current.value === searchVal) {
        console.log(result, ‘IS in your list’);
        return true;
      }
      current = current.next;
    }
    console.log(result, ‘IS NOT in your list’);
    return false;
  }
  toString() {
    let current = this.head;
    let string = ‘’;
    while (current) {
      if (current !== null) {
        string = `${string} { ${current.value} } ->`;
        current = current.next;
      }
      if (current === null) {
        string = `${string} ${null}`;
      }
    }
    console.log(string);
  }
}
*/


