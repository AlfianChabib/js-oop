class Employee {
  sayHello(name) {
    console.info(`Hello ${name}, my name is Employee ${this.name}`);
  }
}

class Manager extends Employee {
  sayHello(name) {
    console.info(`Hello ${name}, my name is Manager ${this.name}`);
  }
}

const budi = new Employee();
budi.name = "Budi";
budi.sayHello("Joko");
console.info(budi);

const alfian = new Manager();
alfian.name = "Alfian";
alfian.sayHello("Joko");
console.info(alfian);
