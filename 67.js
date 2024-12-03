
class MataPelajaran {
    constructor(nama) {
        this.nama = nama;
    }
}

class Guru {
    constructor(namaGuru) {
        this.namaGuru = namaGuru;
        this.mataPelajaran = [];
    }

    tambahMataPelajaran(mataPelajaran) {
        this.mataPelajaran.push(mataPelajaran);
    }

    tampilkanInfo() {
        console.log(`Guru: ${this.namaGuru}`);
        console.log('Mata Pelajaran yang diajarkan:');
        this.mataPelajaran.forEach(mp => console.log(`- ${mp.nama}`));
    }
}

class Sekolah {
    constructor(namaSekolah) {
        this.namaSekolah = namaSekolah;
        this.daftarGuru = [];
    }

    tambahGuru(guru) {
        this.daftarGuru.push(guru);
    }

    tampilkanDaftarGuru() {
        console.log(`Sekolah: ${this.namaSekolah}`);
        this.daftarGuru.forEach(guru => guru.tampilkanInfo());
    }
}

const sekolah1 = new Sekolah("SMA Negeri 1 Yogyakarta");

const guru1 = new Guru("Pak Budi");
const guru2 = new Guru("Bu Siti");

const matpel1 = new MataPelajaran("Matematika");
const matpel2 = new MataPelajaran("Fisika");
const matpel3 = new MataPelajaran("Biologi");
const matpel4 = new MataPelajaran("Kimia");

guru1.tambahMataPelajaran(matpel1);
guru1.tambahMataPelajaran(matpel2);

guru2.tambahMataPelajaran(matpel3);
guru2.tambahMataPelajaran(matpel4);

sekolah1.tambahGuru(guru1);
sekolah1.tambahGuru(guru2);

sekolah1.tampilkanDaftarGuru();
