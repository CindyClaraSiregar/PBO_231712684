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

class CreditCardPayment extends Payment_2684 {
    prosesPembayaran(amount) {
        console.log(`Pembayaran sebesar ${amount} menggunakan Kartu Kredit berhasil diproses.`);
    }
}

class EWalletPayment extends Payment_2684 {
    prosesPembayaran(amount) {
        console.log(`Pembayaran sebesar ${amount} menggunakan E-Wallet berhasil diproses.`);
    }
}

class EmailNotification extends Notifikasi_2684 {
    kirimNotifikasi(pesan) {
        console.log(`Notifikasi via Email: ${pesan}`);
    }
}

class SMSNotification extends Notifikasi_2684 {
    kirimNotifikasi(pesan) {
        console.log(`Notifikasi via SMS: ${pesan}`);
    }
}

function main() {
    const pembayaran = new CreditCardPayment();
    const notifikasi = new EmailNotification();

    const jumlah = 500000;
    pembayaran.prosesPembayaran(jumlah);

    notifikasi.kirimNotifikasi("Pembayaran Anda telah berhasil.");
}

main();
