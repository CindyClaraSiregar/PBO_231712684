class Kendaraan {
    constructor(merk, model) {
      this.merk = merk;
      this.model = model;
    }
  
    getDeskripsi() {
      throw new Error("Method 'getDeskripsi()' harus diimplementasikan di subclass.");
    }
  }
  
  class Mobil extends Kendaraan {
    constructor(merk, model, jumlahPintu) {
      super(merk, model); 
      this.jumlahPintu = jumlahPintu;
    }
  
    getDeskripsi() {
      return `Mobil ${this.merk} ${this.model} dengan ${this.jumlahPintu} pintu.`;
    }
  }
  
  class Motor extends Kendaraan {
    constructor(merk, model, tipe) {
      super(merk, model); 
      this.tipe = tipe;
    }
  
    getDeskripsi() {
      return `Motor ${this.merk} ${this.model} tipe ${this.tipe}.`;
    }
  }
  
  function deskripsikanKendaraan(kendaraan) {
    console.log(kendaraan.getDeskripsi());
  }
  
  const mobil_yourName = new Mobil("Toyota", "Cindy", 2684);
  const motor_yourName = new Motor("Yamaha", "R15", "Sport");
  
  deskripsikanKendaraan(mobil_yourName); // Output: Mobil Toyota Camry dengan 4 pintu.
  deskripsikanKendaraan(motor_yourName); // Output: Motor Yamaha R15 tipe Sport.
  