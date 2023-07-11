class Employee {
  constructor(firstName) {
    this.firstName = firstName;
  }
  sayHello(name) {
    console.info(`Hello ${name}, my name is Employee ${this.firstName}`);
  }
}

class Manager extends Employee {
  constructor(firstName, lastName) {
    super(firstName); // memanggil super hanya boleh di dalam constructor
    this.lastName = lastName;
  }
  sayHello(name) {
    console.info(
      `Hello ${name}, my name is Manager ${this.firstName} ${this.lastName}`
    );
  }
}

const budi = new Employee("Budi");
budi.sayHello("Joko");
console.info(budi);

const alfian = new Manager("Alfian", "Chabib");
alfian.sayHello("Joko");
console.info(alfian);
