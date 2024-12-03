class Kendaraan {
    showKecepatan() {
        return "kendaraan bergerak dengan sangat cepat";
    }
}

class Mobil extends Kendaraan {
    showKecepatan() {
        return "mobil bergerak kecepatan maksimal 360 km/h";
    }
}

class Motor extends Kendaraan {
    showKecepatan() {
        return "motor memang hanya dapat melaju 100 km/h, namun bisa meliuk";
    }
}

class Pesawat extends Kendaraan {
    showKecepatan() {
        return "pesawatlah yang tercepat, dapat melaju hingga 500 km/h";
    }
}

function ujiKecepatan(kendaraan) {
    console.log(kendaraan.showKecepatan());
}

const mobil = new Mobil();
const motor = new Motor();
const pesawat = new Pesawat();
const kendaraan = new Kendaraan();

ujiKecepatan(mobil);      // Output: mobil bergerak kecepatan maksimal adalah 360 km/jam
ujiKecepatan(motor);      // Output: motor memang hanya dapat melaju 100, namun bisa meluk km/jam
ujiKecepatan(pesawat);    // Output: pesawatlah yang tercepat, dapat melaju hingga 500 km/jam
ujiKecepatan(kendaraan);  // Output: kendaraan bergerak dengan sangat cepat
