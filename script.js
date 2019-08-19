function Person(name) {
  const that = {};
  that.name = name;
  that.getName = function () {
    return that.name;
  };
  return that;
}
function Man(name, facialHair) {
  const that = Person(name);
  that.facialHair = facialHair;
  that.getFacialHair = function () {
    return this.facialHair;
  };
  const parentGetName = that.getName;
  that.getName = function () {
    return `Name: ${parentGetName.call(this)}`;
  };
  return that;
}

const person = Person('somebody');
console.log(person.getName()); // somebody

const man = Man('Viktor', true);
console.log(man.getName()); // Name: Viktor
console.log(man.getFacialHair()); // true
