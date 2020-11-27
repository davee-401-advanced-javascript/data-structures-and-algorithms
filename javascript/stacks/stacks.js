'use strict';

const Node = require('../linkedList/node.js');

// Last in First Out
class Stacks {

  constructor () {
    this.top = null;
  }

  push(value) {
    let node = new Node(value);
    if(!this.top) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
      return this.top;
    }
  }

  pop() {
    if(!this.top) {
      console.error('ERROR: THERE IS NOTHING TO POP');
    } else {
      let poppedItem = this.top;
      this.top = this.top.next;
      return poppedItem;
    }
  }

  peek(){
    if(!this.top) {
      console.error('ERROR: STACK IS EMPTY');
    } else {
      return this.top;
    }
  }

  isEmpty() {
    return this.top === null;
  }
}



module.exports = Stacks;
