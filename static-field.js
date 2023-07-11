class Configuration {
  static name = "Belajar JavaScript OOP";
  static version = 1.0;
  static author = "ALfian";
}

const config = new Configuration(); // ini tidak akan memanggil static field
console.log(config);

// cara benar
Configuration.author = "Budi"; // mengubah static field
console.log(Configuration.name);
console.log(Configuration.version);
console.log(Configuration.author);
