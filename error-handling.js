class MathUtil {
  static sum(...numbers) {
    if (numbers.length === 0) {
      throw new Error("Total parameter harus lebih dari 0");
    }
    let total = 0;
    let sum = 0;
    for (const number of numbers) {
      total += number;
    }
    return total;
  }
}

try {
  console.log(MathUtil.sum()); // jika tidak dimasukkan parameter maka akan error
  console.log("Alfian");
} catch (error) {
  console.log(`terjadi error : ${error.message}`); // message adalah property dari error
} finally {
  console.log("Program selesai");
}
console.log("Chabib"); // karena kita menggunakan try catch maka ini masih tetap di jalankan

class Counter {
  #counter = 0;
  next() {
    try {
      return this.#counter;
    } finally {
      this.#counter++;
    }
  }
}

const counter = new Counter();
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
