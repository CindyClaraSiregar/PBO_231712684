class Kendaraan {
    bergerak() {
        console.log("Kendaraan sedang bergerak.");
    }

    berhenti() {
        console.log("Kendaraan telah berhenti.");
    }
}

class Mobil extends Kendaraan {
    bergerak() {
        console.log("Mobil sedang melaju di jalan.");
    }

    hidupkanMesin() {
        console.log("Mesin mobil telah dihidupkan.");
    }
}

class Sepeda extends Kendaraan {
    bergerak() {
        console.log("Sepeda sedang dikayuh.");
    }

    gantiGear() {
        console.log("Gear sepeda telah diganti.");
    }
}


const kendaraan = new Kendaraan();
const mobil = new Mobil();
const sepeda = new Sepeda();

kendaraan.bergerak();   
kendaraan.berhenti();   

console.log("==============================");

mobil.bergerak();       
mobil.hidupkanMesin();  
mobil.berhenti();       

console.log("==============================");

sepeda.bergerak();      
sepeda.gantiGear();     
sepeda.berhenti();     
