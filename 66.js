
class Dokter {
    constructor(nama, spesialisasi) {
        this.nama = nama;
        this.spesialisasi = spesialisasi;
    }
}

class Pasien {
    constructor(nama, usia) {
        this.nama = nama;
        this.usia = usia;
    }
}

class JadwalKonsultasi {
    constructor(dokter, pasien, waktuKonsultasi) {
        this.dokter = dokter;
        this.pasien = pasien;
        this.waktuKonsultasi = waktuKonsultasi;
    }

    tampilInformasi() {
        console.log(`Dokter: ${this.dokter.nama}`);
        console.log(`Spesialisasi: ${this.dokter.spesialisasi}`);
        console.log(`Pasien: ${this.pasien.nama}`);
        console.log(`Usia: ${this.pasien.usia}`);
        console.log(`Waktu Konsultasi: ${this.waktuKonsultasi}`);
    }
}

const dokter1 = new Dokter("Dr. Budi", "Kardiologi");
const pasien1 = new Pasien("Andi", 45);
const konsultasi1 = new JadwalKonsultasi(dokter1, pasien1, "10:00 Pagi, 5 Juni 2024");

konsultasi1.tampilInformasi();
