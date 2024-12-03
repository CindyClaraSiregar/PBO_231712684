class Payment {
    prosesPembayaran(amount) {
        throw new Error("Method 'prosesPembayaran()' harus diimplementasikan");
    }
}

class Notifikasi {
    kirimNotifikasi(pesan) {
        throw new Error("Method 'kirimNotifikasi()' harus diimplementasikan");
    }
}

class KartuKredit extends Payment {
    prosesPembayaran(amount) {
        console.log(`Proses pembayaran via Kartu Kredit sebesar $${amount}`);
    }
}

class Ewallet extends Payment {
    prosesPembayaran(amount) {
        console.log(`Proses pembayaran via Ewallet sebesar $${amount}`);
    }
}

class TransferBank extends Payment {
    prosesPembayaran(amount) {
        console.log(`Proses pembayaran via Transfer Bank sebesar $${amount}`);
    }
}

class NotifEmail extends Notifikasi {
    kirimNotifikasi(pesan) {
        console.log(`Mengirim notifikasi email: ${pesan}`);
    }
}

class NotifSMS extends Notifikasi {
    kirimNotifikasi(pesan) {
        console.log(`Mengirim notifikasi SMS: ${pesan}`);
    }
}

class PaymentProcessor_2684 {
    constructor(paymentMethod, notificationMethod) {
        this.paymentMethod = paymentMethod;
        this.notificationMethod = notificationMethod;
    }

    proses(amount) {
        this.paymentMethod.prosesPembayaran(amount);
        this.notificationMethod.kirimNotifikasi(`Pembayaran sebesar $${amount} telah berhasil diproses.`);
    }
}

const kartuKredit = new KartuKredit();
const ewallet = new Ewallet();
const transferBank = new TransferBank();

const notifEmail = new NotifEmail();
const notifSMS = new NotifSMS();

const processor1 = new PaymentProcessor_2684(kartuKredit, notifEmail);
processor1.proses(150);

const processor2 = new PaymentProcessor_2684(ewallet, notifSMS);
processor2.proses(75);

const processor3 = new PaymentProcessor_2684(transferBank, notifEmail);
processor3.proses(300);
