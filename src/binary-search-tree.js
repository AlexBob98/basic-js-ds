const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

// За видео спасибо Антону Белому!!)
class BinarySearchTree {
  constructor() {
    this.roots = null;
  }

  root() {
    return this.roots;
  }

  add(value) {
    this.roots = addWithIn(this.roots, value);

    function addWithIn(node, value) {
      if (!node) {
        return new Node(value);
      }

      if (node.data === value) {
        return node;
      }

      if (value < node.data) {
        node.left = addWithIn(node.left, value);
      } else {
        node.right = addWithIn(node.right, value);
      }

      return node;
    }
  }

  has(value) {
    return searchWithIn(this.roots, value);

    function searchWithIn(node, value) {
      if (!node) {
        return false;
      }

      if (node.data === value) {
        return true;
      }

      return value < node.data
        ? searchWithIn(node.left, value)
        : searchWithIn(node.right, value);
    }
  }

  find(value) {
    return searchWithIn(this.roots, value);

    function searchWithIn(node, value) {
      if (!node) {
        return null;
      }

      if (node.data === value) {
        return node;
      }

      return value < node.data
        ? searchWithIn(node.left, value)
        : searchWithIn(node.right, value);
    }
  }

  remove(value) {
    this.roots = removeNode(this.roots, value);

    function removeNode(node, value) {
      if (!node) {
        return null;
      }

      if (value < node.data) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (node.data < value) {
        node.right = removeNode(node.right, value);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.roots) {
      return null;
    }

    let node = this.roots;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.roots) {
      return null;
    }

    let node = this.roots;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};