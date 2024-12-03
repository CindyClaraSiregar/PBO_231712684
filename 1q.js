class Hewan {
    suara() {
        console.log("Hewan ini sedang bersuara.");
    }
    berjalan() {
        console.log("Hewan ini berjalan.");
    }
}

class Burung extends Hewan {
    suara() {
        console.log("Burung sedang bersuara: Cuit Cuit!");
    }
    terbang() {
        console.log("Burung ini terbang!")
    }
}

const hewan = new Hewan();
const burung = new Burung();

hewan.suara();
hewan.berjalan();
console.log("=================================");
burung.suara();
burung.berjalan();
burung.terbang();
