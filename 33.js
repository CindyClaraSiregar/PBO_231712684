const IHitungLuas = (Base) => 
    class extends Base {
        luas() {
            throw new Error(
                "Metode 'luas()' harus diimplementasikan di kelas turunan."
            );
    }
};

const IHitungKeliling = (Base) => 
    class extends Base {
        keliling() {
            throw new Error(
                "Metode 'keliling()' harus diimplementasikan di kelas turunan."
            );
    }
};

class Persegi extends IHitungKeliling(IHitungLuas(Object)) {
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
console.log("Luas Persegi:", persegi.luas());
console.log("Keliling Persegi:", persegi.keliling());