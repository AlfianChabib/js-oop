// constructor inheritance
function Employee(firstName) {
  this.firstName = firstName;
  this.sayHello = function (name) {
    console.info(`Hello ${name}, my name is ${this.firstName}`);
  };
}

function Manager(firstName, lastName) {
  Employee.call(this, firstName);
  // berhubung kita hanya memanggil firstname, maka kita hanya memasukkan parameter firstName nya saja
  // karena kita memanggil Employee.call kita juga mendapatkan function sayHello
  this.lastName = lastName;
}

const eko = new Manager("eko", "Khanedy");
eko.sayHello("Joko");
console.info(eko);

// misal kita mau ngecopy dari Employee kedalam manager, kita tidak perlu coppy paste, karena tiap kita merubah Employee kita juga harus merubah Manager juga
// maka kita menggunakan constructor inheritance / pewarisan
