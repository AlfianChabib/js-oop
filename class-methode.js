class Person {
  constructor(name) {
    this.name = name;
  }
  // menambahkan method di class (cara rekomendasi)
  sayHello(name) {
    console.info(`Hello ${name}, my name is ${this.name}`);
  }
}

const alfian = new Person("Alfian");
console.info(alfian);
alfian.sayHello("Joko");
