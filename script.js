function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

function Man(name, facialHair) {
  Person.call(this, name);
  this.facialHair = facialHair;
}

Man.prototype.getName = () => `Name: ${Person.prototype.getName.call(this)}`;
Man.prototype.getFacialHair = () => this.facialHair;
Man.prototype = Object.create(Person.prototype);
Man.prototype.constuctor = Man;

const person = new Person('somebody');
console.log(person.getName()); // somebody

const man = new Man('Viktor', true);
console.log(man);
console.log(man.getName()); // Name: Viktor
console.log(man.getFacialHair()); // true
