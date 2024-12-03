// cindy 
//2684
class Food {
    constructor(name) {
      this.name = name; 
    }
  
    serve() {
      console.log(`Menyajikan ${this.name}.`);
    }
  }
  
  class Pizza extends Food {
    constructor() {
      super("Pizza"); 
    }
  
    serve() {
      console.log("Pizza disajikan dengan saus tomat.");
    }
  }
  
  class Burger extends Food {
    constructor() {
      super("Burger"); 
    }
  
    serve() {
      console.log("Burger disajikan dengan kentang goreng.");
    }
  }
  
  class FoodFactory {
    createFood(type) {
      if (type === "pizza") {
        return new Pizza();
      } else if (type === "burger") {
        return new Burger();
      }
    }
  }
  
  const factory = new FoodFactory();
  const pizza = factory.createFood("pizza");
  const burger = factory.createFood("burger");
  
  if (pizza) pizza.serve(); 
  if (burger) burger.serve(); 
  