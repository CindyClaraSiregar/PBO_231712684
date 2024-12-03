class Shape3D {
    calculateVolume() {
        throw new Error("Metode calculateVolume() harus diimplementasikan dalam subclass");
    }
}

class Sphere extends Shape3D {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calculateVolume() {
        return (4 / 3) * Math.PI * Math.pow(this.radius, 3);
    }
}
class Cube extends Shape3D {
    constructor(side) {
        super();
        this.side = side;
    }

    calculateVolume() {
        return Math.pow(this.side, 3);
    }
}
class Cone extends Shape3D {
    constructor(radius, height) {
        super();
        this.radius = radius;
        this.height = height;
    }

    calculateVolume() {
        return (Math.PI * Math.pow(this.radius, 2) * this.height) / 3;
    }
}
class Cylinder extends Shape3D {
    constructor(radius, height) {
        super();
        this.radius = radius;
        this.height = height;
    }

    calculateVolume() {
        return Math.PI * Math.pow(this.radius, 2) * this.height;
    }
}
const threeDimensionalShapes = [
    new Sphere(5),    
    new Cube(4),    
    new Cone(3, 7),   
    new Cylinder(3, 10) 
];
console.log('OCP1_C_12684');
threeDimensionalShapes.forEach(shape => console.log(`Volume: ${shape.calculateVolume()}`));