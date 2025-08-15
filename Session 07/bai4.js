var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.calculateArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    Circle.prototype.calculatePerimeter = function () {
        return Math.PI * 2 * this.radius;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.height = height;
        this.width = width;
    }
    Rectangle.prototype.calculateArea = function () {
        return this.height * this.width;
    };
    Rectangle.prototype.calculatePerimeter = function () {
        return (this.height + this.width) * 2;
    };
    return Rectangle;
}());
var circle = new Circle(2);
console.log(circle.calculateArea());
console.log(circle.calculatePerimeter());
var hcn = new Rectangle(3, 4);
console.log(hcn.calculateArea());
console.log(hcn.calculatePerimeter());
