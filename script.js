function Person(name) {
  this.name = name;
  this.getName = function () {
    return this.name;
  };
}
function Man(name, facialHair) {
  Person.call(this, name);
  this.facialHair = facialHair;
  this.getFacialHair = function () {
    return this.facialHair;
  };
  const parentGetName = this.getName;
  this.getName = function () {
    return `Name: ${parentGetName.call(this)}`;
  };
}

const person = new Person('somebody');
console.log(person.getName()); // somebody

const man = new Man('Viktor', true);
console.log(man.getName()); // Name: Viktor
console.log(man.getFacialHair()); // true
