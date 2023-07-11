class Customer {
  // field = se level dengan constructor dan method
  firstName;
  lastName;
  balance = 0;

  // constructor
  constructor(firstName, lastName, balance) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.balance = balance;
  }

  // method
  sayHello(nama) {
    console.info(`Hello ${nama}, my name is ${this.firstName}`);
  }
}

const alfian = new Customer("alfian", "chabib", 10);
alfian.sayHello("joko");
console.log(alfian);
