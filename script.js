// Bind, Call, Apply.
/*
Function.prototype.myBindByCall = function (context, ...argx) {
  return () => this.call(context, ...argx);
};
Function.prototype.myCall= function (context, ...argx) {
  return this.apply(context, argx);
}
Function.prototype.myApply = function (context, argx) {
  return this.call(context, ...argx);
}
const obj1 = {
  a: 20,
  foo(...numbers) {
    return this.a + numbers.reduce((prev, curr) => prev + curr);
  },
};

const obj2 = {
  a: 30,
};

console.log(obj1.foo.myApply(obj2, [5, 5])); // 40
console.log(obj1.foo.myApply(obj2, [5, 5, 10])); // 50
console.log(obj1.foo.myCall(obj2, 5, 5, 20)); // 60
console.log(obj1.foo.myCall(obj2, 5, 5, 10, 20)); // 70

const f1 = obj1.foo.myBindByCall(obj2, 5, 5);
console.log(f1()); // 40
const f2 = obj1.foo.myBindByCall(obj2, 5, 5, 10);
console.log(f2()); // 50
*/
// =============================================
// Object.create()
/*
function objectCreate(proto, desc) {
  function Temp() {}
  Temp.prototype = proto;
  const obj = new Temp();
  Object.defineProperties(obj, desc);
  return obj;
}
const obj = {
  a: 1,
};

const obj2 = objectCreate(obj, {
  p: {
    value: 20,
  },
  k: {
    value: 30,
  },
});

console.log(obj2); // { p: 20, k: 30, __proto__: { a: 1 } }
*/
// ============================================
function myNew(fn) {
  const newObj = {};
  newObj.__proto__ = fn.prototype;
  fn.call(newObj);
  return newObj;
}
function F() {
  this.a = 10;
}

F.prototype.foo = function() {
  return this.a;
};

const a = myNew(F);
console.log(a); // { a: 10, __proto__: { foo, constructor } }
console.log(a.foo()); // 10
