// class Employee {}

// class Manager {}

// const alfian = new Employee();
// const budi = new Manager();

// // typeof tidak digunakan untuk mengecek dia dari instance class nya
// console.log(typeof alfian);
// console.log(typeof budi);

// // cara benar menggunakan instanceof
// console.log(alfian instanceof Employee); // true
// console.log(alfian instanceof Manager); // false
// console.log(budi instanceof Employee); // false
// console.log(budi instanceof Manager); // true

// menggunakan class inheritance
class Employee {}

class Manager extends Employee {}

const chabib = new Employee();
const agus = new Manager();

// typeof tidak digunakan untuk mengecek dia dari instance class nya
console.log(typeof chabib);
console.log(typeof agus);

// cara benar menggunakan instanceof
console.log(chabib instanceof Employee); // true
console.log(chabib instanceof Manager); // false
console.log(agus instanceof Employee); // true = karena Manager extends Employee
console.log(agus instanceof Manager); // true
