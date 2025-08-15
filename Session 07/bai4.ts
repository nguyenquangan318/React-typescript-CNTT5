interface Geometry {
    calculateArea(): number;
    calculatePerimeter(): number;
}

class Circle implements Geometry {
    private radius: number;
    constructor(radius: number) {
        this.radius = radius;
    }
    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
    calculatePerimeter(): number {
        return Math.PI * 2 * this.radius;
    }
}

class Rectangle implements Geometry {
    private width: number;
    private height: number;
    constructor(width: number, height: number) {
        this.height = height;
        this.width = width;
    }
    calculateArea(): number {
        return this.height * this.width;
    }
    calculatePerimeter(): number {
        return (this.height + this.width) * 2;
    }
}

let circle = new Circle(2);
console.log(circle.calculateArea());
console.log(circle.calculatePerimeter());

let hcn = new Rectangle(3, 4);
console.log(hcn.calculateArea());
console.log(hcn.calculatePerimeter());


