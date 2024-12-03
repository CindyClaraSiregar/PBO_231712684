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

class Buaya extends Hewan {
    suara() {
        console.log("katak sedang bersuara: krok krok!")
    }
    berenang() {
        console.log("katak sedang berenang")
    }
} 

const hewan = new Hewan();
const burung = new Burung();
const buaya = new Buaya();

hewan.suara();
hewan.berjalan();
console.log("=================================");
burung.suara();
burung.berjalan();
burung.terbang();
console.log("=================================");
buaya.suara();
buaya.berenang();