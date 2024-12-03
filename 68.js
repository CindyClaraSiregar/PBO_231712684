
class Memori {
    constructor(jenis, kapasitas) {
        this.jenis = jenis;
        this.kapasitas = kapasitas;
    }
}

class Komputer {
    constructor(merk, jenisMemori, kapasitasMemori) {
        this.merk = merk;
        this.memori = new Memori(jenisMemori, kapasitasMemori); 
    }

    tampilkanSpesifikasi() {
        console.log(`Komputer Merk: ${this.merk}`);
        console.log(`Jenis Memori: ${this.memori.jenis}, Kapasitas: ${this.memori.kapasitas}`);
    }
}

const komputer1 = new Komputer("Dell", "DDR4", "16GB");
komputer1.tampilkanSpesifikasi();

