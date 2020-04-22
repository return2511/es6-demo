/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
    this.helpStack = []
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x)
    const helpLen = this.helpStack.length;
    if (helpLen === 0 || x <= this.helpStack[helpLen - 1]) this.helpStack.push(x)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const top = this.stack.pop()
    const helpLen = this.helpStack.length;
    if (top === this.helpStack[helpLen - 1]) this.helpStack.pop()
    return top
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    const len = this.stack.length;
    return len > 0 ? this.stack[len - 1] : null
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    const helpLen = this.helpStack.length;
    return this.helpStack[helpLen - 1]
};

// Your MinStack object will be instantiated and called as such:
var obj = new MinStack()
var minStack = new MinStack();
minStack.push(-2);
console.log('minStack', minStack)
minStack.push(0);
console.log('minStack', minStack)
minStack.push(-3);
console.log('minStack', minStack)
minStack.getMin();
console.log('minStack.getMin()', minStack.getMin())
minStack.pop();
console.log('minStack', minStack)
minStack.top();
console.log('minStack.top();', minStack.top())
minStack.getMin();
console.log('minStack.getMin()', minStack.getMin())