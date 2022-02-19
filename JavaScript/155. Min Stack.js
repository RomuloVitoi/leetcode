class MinStack {
  constructor() {
    this.stack = [];
  }

  push(val) {
    this.stack.push({
      val,
      min: this.stack.length === 0 ? val : Math.min(val, this.getMin())
    });
  }

  pop() {
    this.stack.pop();
  }

  top() {
    return this.stack[this.stack.length - 1].val;
  }

  getMin() {
    return this.stack[this.stack.length - 1].min;
  }
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
