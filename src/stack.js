const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class StackNode{
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.pivot = null;
  }

  push(value) {
    let newStack = new StackNode(value);
    if (this.pivot)
      newStack.next = this.pivot;
    this.pivot = newStack;
  }

  pop() {
    if (!this.pivot)
      return undefined;
    if (this.pivot.next){
      let temp = this.pivot;
      this.pivot = this.pivot.next;
      return temp.value;
    }
    if (this.pivot){
      let i = this.pivot.value;
      this.pivot=null;
      return i;
    }
  }

  peek() {
    return this.pivot.value;
  }

  
}

module.exports = {
  Stack
};
