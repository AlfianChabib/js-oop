class Shape {
  paint() {
    console.info("Paint shape");
  }
}

class Circle extends Shape {
  paint() {
    // jika kita ingin memanggil paint di Shape, maka kita menggunakan super.paint()
    super.paint();
    console.info("Paint circle");
  }
}

const circle = new Circle();
circle.paint();
