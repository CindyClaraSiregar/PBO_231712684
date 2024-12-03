class Produk extends IHitungDiskon(IHitungPPN(Object)) {
    constructor(nama, hargaPokok) {
        super();
        this.nama = nama;
        this.hargaPokok = hargaPokok;
    }

infoProduk() {
    const diskon = this.hitungDiskon();
    const ppn = this.hitungPPN();
    const hargaSetelahDiskon = this.hargaPokok - diskon;
    const hargaJual = hargaSetelahDiskon + ppn;

    console.log(`Nama Produk: ${this.nama}`);
    console.log(`Harga Pokok: Rp$ {this.hargaPokok}`);
    console.log(`Diskon: Rp${diskon}`);
    console.log(`Harga Setelah Diskon: Rp${hargasetelahDiskon}`);
    console.log(`PPN" Rp${ppn}`);
    console.log(`Harga Jual Akhir: Rp${hargajual}`);
    console.log("=============================")
}
}
    const produk1 = new Produk("Laptop", 15000000);
    const Produk2 = new Produk("Smartphone", 5000000);

    produk1.infoProduk();
    Produk2.infoProduk();