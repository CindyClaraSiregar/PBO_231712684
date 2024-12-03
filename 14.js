class Payment_2684 {
    prosesPembayaran(amount) {
        throw new Error("Method 'prosesPembayaran(amount)' harus diimplementasikan.");
    }
}

class Notifikasi_2684 {
    kirimNotifikasi(pesan) {
        throw new Error("Method 'kirimNotifikasi(pesan)' harus diimplementasikan.");
    }
}

class KartuKredit extends Payment_2684 {
    prosesPembayaran(amount) {
        console.log(`Pembayaran sebesar ${amount} menggunakan Kartu Kredit berhasil diproses.`);
    }
}

class Ewallet extends Payment_2684 {
    prosesPembayaran(amount) {
        console.log(`Pembayaran sebesar ${amount} menggunakan E-Wallet berhasil diproses.`);
    }
}

class TransferBank extends Payment_2684 {
    prosesPembayaran(amount) {
        console.log(`Pembayaran sebesar ${amount} menggunakan Transfer Bank berhasil diproses.`);
    }
}

class Notifikasi_2684 {
    kirimNotifikasi(pesan) {
        console.log(`Notifikasi via Email: ${pesan}`);
    }
}

class NotifSMS extends Notifikasi_2684 {
    kirimNotifikasi(pesan) {
        console.log(`Pembayaran sebesar Rp${pesan}`);
    }
}

function main() {
    
    const metodePembayaran = new KartuKredit();
    const notifikasi = new NotifEmail();

    const jumlah = 100000;
    metodePembayaran.prosesPembayaran(jumlah);

    notifikasi.kirimNotifikasi("Pembayaran Anda telah berhasil diverifikasi oleh sistem.");
}

main();
