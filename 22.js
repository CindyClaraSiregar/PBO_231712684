class IBangunDatar {
    luas() {
        throw new Error("Metode luas() harus di implementasikan.");
    }
    keliling() {
        throw new Error("Metode keliling() harus diimplementasikan.")
    }
}

class Persegi extends IBangunDatar {
    constructor(sisi) {
        super();
        this.sisi = sisi; 
    }

    
    luas() {
        return this.sisi * this.sisi; 
    }

    keliling() {
        return 4 * this.sisi; 
    }
}

const persegi = new Persegi(5); 

console.log("Luas persegi:", persegi.luas()); 
console.log("Keliling persegi:", persegi.keliling()); 

const persegi1 = new Persegi(5);
console.log("Luas Persegi:", persegi1.luas());
console.log("Keliling Persegi:", persegi1.keliling());

class Lingkaran extends IBangunDatar {
    constructor(jariJari) {
        super();
        this.jariJari = jariJari; 
    }

    luas() {
        return Math.PI * this.jariJari * this.jariJari; 
    }

    
    keliling() {
        return 2 * Math.PI * this.jariJari;
    }
}

const lingkaran = new Lingkaran(2684,2684); 
console.log("Luas lingkaran:", lingkaran.luas().toFixed(2)); 
console.log("Keliling lingkaran:", lingkaran.keliling().toFixed(2)); 

