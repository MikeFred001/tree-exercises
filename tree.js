"use strict";

/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }

  /** sumValues(): add up all values of invoking node and its descendants.
   * Returns sum as an integer. */

  sumValues() {
    let sum = 0;
    let stack = [this];

    while (stack.length) {
      let current = stack.pop();

      sum += current.val;

      for (let child of current.children) {
        stack.push(child);
      }
    }

    return sum;
  }

  /** countEvens(): starting from the invoking node and moving through its
   * children, count how many nodes have even values. Returns that count as
   * an integer. */
  countEvens() {
    let evens = 0;
    let stack = [this];

    while (stack.length) {
      let current = stack.pop();

      evens += current.val % 2 === 0 ? 1 : 0;

      for (let child of current.children) {
        stack.push(child);
      }
    }

    return evens;
  }

  /** numGreater(lowerBound): starting from the invoking node and moving through
   * its children, return a count of the number of nodes whose value is greater
   * than lowerBound. */
  numGreater(lowerBound){
    let count = 0;
    let stack = [this];

    while (stack.length) {
      let current = stack.pop();

      console.log("LOWER BOUND", lowerBound);
      console.log("CURRENT VAL", current.val);
      if (current.val > lowerBound) {
        count++;
      };

      for (let child of current.children) {
        stack.push(child);
      }
    }
    return count;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all values in the tree. */
  sumValues() {
    if (!this.root) return 0;
    return this.root.sumValues();
  }

  /** countEvens(): count all nodes in the tree that have even values. */
  countEvens() {
    if (!this.root) return 0;
    return this.root.countEvens();
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */
  numGreater(lowerBound) {
    if (!this.root) return 0;
    return this.root.numGreater(lowerBound);
  }
}

module.exports = { Tree, TreeNode };
