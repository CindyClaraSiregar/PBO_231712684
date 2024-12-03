class Shape {
    calculateArea() {
        throw new Error("Method 'calculateArea' must be implemented");
    }

    hitungKeliling_2684() {
        throw new Error("Method 'hitungKeliling_2684' must be implemented");
    }
}

class Rectangle_2684 extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }

    hitungKeliling_2684 () {
        return 2 * (this.width + this.height);
    }
}

class Square_2684  extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }

    calculateArea() {
        return this.side * this.side;
    }

    hitungKeliling_2684 () {
        return 4 * this.side;
    }
}

class Circle_2684  extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }

    hitungKeliling_2684 () {
        return 2 * Math.PI * this.radius;
    }
}

function printDetails(shape) {
    console.log("Area:", shape.calculateArea());
    console.log("Perimeter:", shape.hitungKeliling_2684());
}

const rectangle = new Rectangle_2684 (5, 10);
const square = new Square_2684 (5);
const circle = new Circle_2684 (7);

printDetails(rectangle);
printDetails(square);    
printDetails(circle);