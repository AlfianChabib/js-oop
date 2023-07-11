// const alfian = {
//   firstName: "Alfian",
//   lastName: "Chabib",
// };

// const budi = {
//   firstName: "Budi",
//   lastName: "Nugraha",
// };
// biasanya dalam OOP kita tidak membuat objectnya seperti ini, tapi kita membuat classnya dulu

// ============================

// // Concstructor Function
// function Person() {
//   // ini classnya
//   this.firstName = ""; // property
//   this.lastName = ""; // property
// }

// // ini objectnya
// const alfian = new Person();
// alfian.firstName = "Alfian";
// alfian.lastName = "Chabib";
// const budi = new Person();
// budi.firstName = "Budi";
// budi.lastName = "Nugraha";

// console.log(alfian);
// console.log(budi);

// ===========================
// method di constructor function
// function Person() {
//   this.firstName = "";
//   this.lastName = "";
//   this.sayHello = function (name) {
//     console.info(`Hello ${name}, my name is ${this.firstName}`);
//   };
// }

// const alfian = new Person();
// alfian.firstName = "Alfian";
// alfian.lastName = "Chabib";
// alfian.sayHello("Joko");

// const budi = new Person();
// budi.firstName = "Budi";
// budi.lastName = "Nugraha";
// budi.sayHello("Joko");

// console.log(alfian);
// console.log(budi);

// parameter di constructor function
// cara mudah kirim data menggunakan parameter
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.sayHello = function (name) {
    console.info(`Hello ${name}, my name is ${this.firstName}`);
  };
}

// kita bisa langsung isi parameter namanya
const alfian = new Person("Alfian", "Chabib");
alfian.sayHello("Joko");

const budi = new Person("Budi", "Nugraha");
budi.sayHello("Joko");

console.log(alfian);
console.log(budi);
