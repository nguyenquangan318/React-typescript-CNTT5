var Vehicle = /** @class */ (function () {
    function Vehicle(speed) {
        this.speed = speed;
    }
    Vehicle.prototype.speedUp = function () {
        this.speed += 10;
    };
    Vehicle.prototype.slowDown = function () {
        this.speed -= 10;
    };
    Vehicle.prototype.stop = function () {
        this.speed == 0;
    };
    Vehicle.prototype.getSpeed = function () {
        return this.speed;
    };
    return Vehicle;
}());
var vehicle = new Vehicle(20);
console.log("Toc do hien tai ".concat(vehicle.getSpeed()));
vehicle.slowDown();
console.log("Toc do hien tai ".concat(vehicle.getSpeed()));
vehicle.speedUp();
vehicle.speedUp();
console.log("Toc do hien tai ".concat(vehicle.getSpeed()));
vehicle.stop();
console.log("Toc do hien tai ".concat(vehicle.getSpeed()));
