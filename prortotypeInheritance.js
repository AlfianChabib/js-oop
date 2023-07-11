function Employee(name) {
  this.name = name;
}
function Manager(name) {
  this.name = name;
}

Manager.prototype = Employee.prototype; // cara salah
Manager.prototype = Object.create(Employee.prototype); // cara benar

Manager.prototype.sayHello = function (name) {
  console.info(`Hello ${name}, my name is Manager ${this.name}`);
};
Employee.prototype.sayHello = function (name) {
  console.info(`Hello ${name}, my name is Employee ${this.name}`);
};

const employee = new Employee("Afian");
employee.sayHello("Joko");
const manager = new Manager("Joko");
manager.sayHello("Joko");

console.info(employee);
console.info(manager);
