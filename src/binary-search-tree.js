const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.mainRoot = null;
  }

  root() {
    return this.mainRoot;
  }

  add(data) {
    let current = this.mainRoot;
    if (this.mainRoot === null) {
      this.mainRoot = new Node(data);
    }
    else {
      while (true){
        if (data < current.data) {
          if (current.left === null){
            current.left = new Node(data);
            return;
          }
          else
            current = current.left;
        }
        else if (data > current.data) {
          if (current.right === null){
            current.right = new Node(data);
            return;
          }
          else
            current = current.right;
        }
      }
    }
  }

  has(data) {
    let current = this.mainRoot;
    if (current === null) 
      return false;
    else {
      while (true){
        if (data < current.data) {
          if (current.left === null)
            return false;
          else
            current = current.left;
        }
        else if (data > current.data) {
          if (current.right === null)
            return false;
          else
            current = current.right;
        }
        else return true;
      }
    }
  }

  find(data) {
    let current = this.mainRoot;
    if (current === null) 
      return null;
    else {
      while (true){
        if (data < current.data) {
          if (current.left === null)
            return null;
          else
            current = current.left;
        }
        else if (data > current.data) {
          if (current.right === null)
            return null;
          else
            current = current.right;
        }
        else return current;
      }
    }
  }

  minNode(node) {
    if (node.left === null)
        return node;
    else
        return this.minNode(node.left);
  }

  remove(data) {
    this.mainRoot = this.removeNode(this.mainRoot, data); 
  }

  removeNode(node, data) {
    if (node === null) {
        return null;
    } else if (data < node.data) {
        node.left = this.removeNode(node.left, data);
        return node;
    } else if (data > node.data) {
        node.right = this.removeNode(node.right, data);
        return node;
    } else {
        if (node.left === null && node.right === null) {
            node = null;
            return node;
        }
        if (node.left === null) {
            node = node.right;
            return node;
        } else if(node.right === null) {
            node = node.left;
            return node;
        }
        let newNode = this.minNode(node.right);
        node.data = newNode.data;
        node.right = this.removeNode(node.right, newNode.data);
        return node;
    }
  }

  min() {
    let current = this.mainRoot;
    if (current === null) 
      return null;
    else {
      while (true){
        if (current.left === null)
          return current.data;
        else
          current = current.left;
      }
    }
  }

  max() {
    let current = this.mainRoot;
    if (current === null) 
      return null;
    else {
      while (true){
        if (current.right === null)
          return current.data;
        else
          current = current.right;
      }
    }
  }
}

module.exports = {
  BinarySearchTree
};