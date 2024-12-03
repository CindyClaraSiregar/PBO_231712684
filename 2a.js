class Ayah {
    bekerja() {
        console.log("Ayah sedang bekerja di Kantor.");
    }
}

class Ibu {
    bekerja() {
        console.log("Ibu sedang menjahit.");
    }
    
    memasak() {
        console.log("Ibu sedang memasak spaghetti Aglio e Olio.");
    }
}
function doTugas(objek) {
    if (typeof objek.bekerja === "function") {
        objek.bekerja();
    } 
    if (typeof objek.memasak === "function") {
        objek.memasak();
    } 
    if (typeof objek.bekerja !== "function" && typeof objek.memasak !== "function") {
        console.log("Perilaku tidak dikenali.");
    }
}

const ayah = new Ayah();
const ibu = new Ibu();

doTugas(ayah);  // Output: Ayah sedang bekerja di Kantor.
doTugas(ibu);   // Output: Ibu sedang menjahit. Ibu sedang memasak spaghetti Aglio e Olio.
