const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor(){
    this.pivot = null;
  }

  getUnderlyingList() {
    return this.pivot;
  }

  enqueue(value) {
    let newList = new ListNode(value);
    let k = this.pivot;
    if (k){
      while(k.next)
      {
        k = k.next;
      }
      k.next = newList;
    }
    else{
      this.pivot = newList;
    }
    
  }

  dequeue() {
    let k = this.pivot;
    if (this.pivot){
      this.pivot = this.pivot.next;
    }
    return k.value;
  }
}

module.exports = {
  Queue
};
