class MathUtil {
  static sum(...numbers) {
    if (numbers.length === 0) {
      throw new Error("Tidak ada number yang di input");
    }
    let total = 0;
    let sum = 0;
    for (const number of numbers) {
      total += number;
    }
    return total;
  }
}

console.log(MathUtil.sum());
const result = MathUtil.sum(1, 2, 3, 4);
console.log(result); // ini tidak dijalankan karena terjadi error sebelumnya
