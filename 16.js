class CreditCardPayment {
    processPayment(amount) {
      console.log("Processing credit card payment of $" + amount);
    }
  }
  
  class EmailNotification {
    sendNotification(message) {
      console.log("Sending email notification: " + message);
    }
  }
  
  class PaymentProcessor_2614 {
    constructor(paymentMethod, notificationMethod) {
      this.paymentMethod = paymentMethod;
      this.notificationMethod = notificationMethod;
    }
  
    process(amount) {
      this.paymentMethod.processPayment(amount);
      this.notificationMethod.sendNotification("Your payment of $" + amount + " was successful.");
    }
  }
  
  const creditCardPayment = new CreditCardPayment();
  const emailNotification = new EmailNotification();
  const processor1 = new PaymentProcessor_2614(creditCardPayment, emailNotification);
  processor1.process(100);