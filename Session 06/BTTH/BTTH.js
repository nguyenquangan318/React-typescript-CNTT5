var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name, age, category, foodType) {
        this.age = age;
        this.category = category;
        this.foodType = foodType;
        this.name = name;
    }
    Animal.prototype.sound = function () {
        return "Âm thanh của động vật";
    };
    Animal.prototype.getDetails = function () {
        return "name: ".concat(this.name, ", age: ").concat(this.age, ", category: ").concat(this.category, ", food type: ").concat(this.foodType);
    };
    Animal.prototype.feed = function () {
        console.log("Ăn");
    };
    return Animal;
}());
var Mamal = /** @class */ (function (_super) {
    __extends(Mamal, _super);
    function Mamal(name, age, category, foodType, furColor) {
        var _this = _super.call(this, name, age, category, foodType) || this;
        _this.furColor = furColor;
        return _this;
    }
    Mamal.prototype.move = function () {
        console.log("Chạy");
    };
    return Mamal;
}(Animal));
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bird.prototype.move = function () {
        console.log("Bay");
    };
    return Bird;
}(Animal));
var Reptile = /** @class */ (function (_super) {
    __extends(Reptile, _super);
    function Reptile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Reptile.prototype.move = function () {
        console.log("Bò");
    };
    return Reptile;
}(Animal));
var dog = new Mamal("John", 10, "Pet", "Meat", "Brown");
