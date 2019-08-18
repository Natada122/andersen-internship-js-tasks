Array.prototype.duplicate = function() {
  return [...this, ...this];
};
console.log([1, 2, 3, 4].duplicate()); // [1, 2, 3, 4, 1, 2, 3, 4]