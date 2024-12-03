// 1. Kelas Order
class Order {
    constructor(id, customerName, items) {
        this.id = id;
        this.customerName = customerName;
        this.items = items;
        this.status = 'Pending'; 
    }

    calculateTotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }
}
class OrderOperation {
    perform(order) {
        throw new Error("Metode perform() harus diimplementasikan");
    }
}
class PrintBill extends OrderOperation {
    perform(order) {
        console.log("");
        console.log(`ID Pesanan: ${order.id}`);
        console.log(`Customer: ${order.customerName}`);
        order.items.forEach(item => {
            console.log(`${item.item} - Jumlah: ${item.quantity} - Harga: ${item.price}`);
        });
        const total = order.calculateTotal();
        const tax = total * 0.10; // PPn 10%
        console.log(`Total Harga setelah Ppn: Rp. ${total + tax}`);
        console.log("");
    }
}
class ProcessOrder extends OrderOperation {
    perform(order) {
        if (order.status === 'Pending') {
            order.status = 'Processed';
            console.log(`Memproses Pesanan dengan ID: ${order.id}`);
        } else {
            console.log(`Pesanan dengan ID ${order.id} sudah diproses.`);
        }
        console.log("");
    }
}
class TrackOrder extends OrderOperation {
    perform(order) {
        console.log(`Status ID Pesanan ${order.id} sekarang adalah ${order.status}`);
        console.log("");
    }
}
const order1 = new Order(12684, "cind", [
    { item: "Kopi Susu", quantity: 2, price: 10000 },
    { item: "Kue Lapis", quantity: 1, price: 4000 }
]);
const printBill = new PrintBill();
const processOrder = new ProcessOrder();
const trackOrder = new TrackOrder();
printBill.perform(order1);
trackOrder.perform(order1); 
processOrder.perform(order1); 
trackOrder.perform(order1);