function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.sayHello = function (name) {
    console.info(`Hello ${name}, my name is ${this.firstName}`);
  };
}

// ini akan menambahkan ke prototype nya, bukan ke instance object nya
Person.prototype.sayBye = function () {
  console.info("Good Bye");
};
Person.prototype.run = function () {
  console.info(`${this.firstName} is running`);
};

const alfian = new Person("Alfian", "Chabib");
const budi = new Person("Budi", "Nugraha");

console.log(alfian);
console.log(budi);

alfian.sayBye();
alfian.run();
