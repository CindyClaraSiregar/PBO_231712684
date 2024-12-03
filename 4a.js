class Hewan {
    suara() {
      throw new Error("Method 'suara()' harus diimplementasikan di subclass.");
    }
  
    lari() {
      throw new Error("Method 'lari()' harus diimplementasikan di subclass.");
    }
  }
  
  class Anjing extends Hewan {
    suara() {
      console.log("Anjing menggonggong: Woof woof!");
    }
  
    lari() {
      console.log("Hewan ini berlari dengan kecepatan 20 km/jam");
    }
  }
  
  class Kucing extends Hewan {
    suara() {
      console.log("Kucing mengeong: Meow meow!");
    }
  
    lari() {
      console.log("Hewan ini berlari dengan kecepatan 15 km/jam");
    }
  } 
  class Burung extends Hewan {
    suara() {
      console.log("Burung berkicau: Tweet tweet!");
    }
  
    lari() {
      console.log("Hewan ini sedang terbang dengan kecepatan 100 km/jam");
    }
  }

  function tampilkanInfoHewan(hewan) {
    hewan.suara();
    hewan.lari();
  }
  const anjing_2684 = new Anjing();
  const kucing_2684 = new Kucing();
  const burung_2684 = new Burung();
  
  tampilkanInfoHewan(anjing_2684); // Output: Anjing menggonggong: Woof woof! Hewan ini berlari dengan kecepatan 20 km/jam
  tampilkanInfoHewan(kucing_2684); // Output: Kucing mengiau: Meow meow! Hewan ini berlari dengan kecepatan 15 km/jam
  tampilkanInfoHewan(burung_2684); // Output: Burung berkicau: Tweet tweet! Hewan ini sedang terbang dengan kecepatan 100 km/jam
  