/*
const Universe = (function() {
  var instance;
  return function() {
    this.size = 100;
    this.getSize = () => this.size;
    this.setSize = size => {
      this.size = size;
    };
    if (instance) {
      return instance;
    }
    return (instance = this);
  };
})();
*/
class Universe {
  constructor() {
    if (!Universe.instance) {
      this.size = 100;
      Universe.instance = this;
    }
    return Universe.instance;
  }

  getSize() {
    return this.size;
  }

  setSize(size) {
    this.size = size;
  }
}
const a = new Universe();
const b = new Universe();

console.log(a === b); // должны получить true

console.log(a.getSize(), b.getSize()); // 100, 100
a.setSize(200);
console.log(a.getSize(), b.getSize()); // 200, 200
