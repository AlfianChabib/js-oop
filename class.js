// cara membuat class
class Person {
  // cara menambahkan constructor di class
  constructor(name) {
    // code apapun
    console.info(`Membuat Person ${name}`);
    this.name = name; // Property di class
  }
}

const alfian = new Person("Alfian");
console.info(alfian);
console.info(alfian.name);
