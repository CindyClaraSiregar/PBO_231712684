class Karyawan {
    constructor(nama, gajiPokok, jabatan) {
        this.nama = nama;
        this.gajiPokok = gajiPokok;
        this.jabatan = jabatan;
    }

    infoKaryawan() {
        console.log(`Nama: ${this.nama}`);
        console.log(`Jabatan: ${this.jabatan}`);
        console.log(`Pendapatan: Rp ${this.hitungPendapatan()}`);
    }

    hitungPendapatan() {
        throw new Error(
            "Metode 'hitungPendapatan()' harus diimplementasikan di kelas turunan."
        );
    }
}

class Staff extends Karyawan {
    constructor(nama, gajiPokok) {
        super(nama, gajiPokok, "Staff");
    }

    hitungPendapatan() {
        return this.gajiPokok * 30 + 500000; 
    }
}

class Manager extends Karyawan {
    constructor(nama, gajiPokok) {
        super(nama, gajiPokok, "Manager");
    }

    hitungPendapatan() {
        return this.gajiPokok * 30 + 1000000; 
    }
}

const manager = new Manager("Cindy 3000000",);
const staff = new Staff("Stevi", 2000000);

console.log("\n==============================");
console.log("\tInformasi Karyawan");
manager.infoKaryawan();
console.log("================================")

console.log("================================")
console.log("\tInformasi Karyawan");
staff.infoKaryawan();
console.log("=================================")