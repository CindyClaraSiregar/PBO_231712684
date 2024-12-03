// Cindy
// 2684
class OrderFactory {
    createOrder(orderType, orderId, details) {
      if (orderType === "DineIn") {
        return new DineInOrder(orderId, details);
      } else if (orderType === "TakeAway") {
        return new TakeAwayOrder(orderId, details);
      } else {
        throw new Error("Invalid order type");
      }
    }
  }
  
  class Order {
    constructor(orderId, details) {
      this.orderId = orderId;
      this.details = details;
    }
  }

  class DineInOrder extends Order {
    constructor(orderId, details) {
      super(orderId, details);
      this.type = "DineIn";
    }
  }
  
  class TakeAwayOrder extends Order {
    constructor(orderId, details) {
      super(orderId, details);
      this.type = "TakeAway";
    }
  }
 
  class OrderObserver {
    update(order) {
      throw new Error("This method should be implemented by subclasses");
    }
  }
  
  class Chef extends OrderObserver {
    constructor(name) {
      super();
      this.name = name;
    }
  
    update(order) {
      console.log(`${this.name} is preparing order: ${order.orderId} (${order.type})`);
    }
  }
  
  class Cashier extends OrderObserver {
    constructor(name) {
      super();
      this.name = name;
    }
  
    update(order) {
      console.log(`${this.name} has processed payment for order: ${order.orderId} (${order.type})`);
    }
  }

  class OrderManager {
    constructor() {
      this.orders = [];
      this.observers = [];
    }
  
    addObserver(observer) {
      this.observers.push(observer);
    }
  
    notifyObservers(order) {
      for (const observer of this.observers) {
        observer.update(order);
      }
    }
  
    createOrder(order) {
      this.orders.push(order);
      this.notifyObservers(order);
    }
  
    getOrders() {
      return this.orders;
    }
  }

  const factory = new OrderFactory();
  const manager = new OrderManager();
  
  const chef = new Chef("Chef   Cindy");
  const cashier = new Cashier("Cashier Lisa");
  
  manager.addObserver(chef);
  manager.addObserver(cashier);

  const order1 = factory.createOrder("DineIn", "001", {
    table: 5,
    items: ["Pasta", "Salad"],
  });
  
  const order2 = factory.createOrder("TakeAway", "002", {
    customerName: "John",
    items: ["Burger"],
  });

  manager.createOrder(order1);
  manager.createOrder(order2);

  const orders = manager.getOrders();
  console.log("All Orders:", orders);