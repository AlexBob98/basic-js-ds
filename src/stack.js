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


// помогло видео с ютуб -> https://www.youtube.com/watch?v=1d8tQpZ6KAQ
class Stack {

constructor() {
  this.items = []

}

  push(item) {
     this.items.push(item)
     }

  pop() { 
    return this.items.pop()
     
  }

  peek() {
    return this.items[this.items.length - 1]  
   
  }
}

module.exports = {
  Stack
};
