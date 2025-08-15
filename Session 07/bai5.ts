interface changeSpeed{
    speedUp():void;
    slowDown():void;
    stop():void;
}
class Vehicle implements changeSpeed{
    private speed:number;
    constructor(speed:number){
        this.speed=speed;
    }
    speedUp() {
        this.speed+=10;
    }
    slowDown() {
        this.speed-=10;
    }
    stop() {
        this.speed=0;
    }
    getSpeed():number{
        return this.speed;
    }
}
let vehicle=new Vehicle(20);
console.log(`Toc do hien tai ${vehicle.getSpeed()}`);
vehicle.slowDown();
console.log(`Toc do hien tai ${vehicle.getSpeed()}`);
vehicle.speedUp();
vehicle.speedUp();
console.log(`Toc do hien tai ${vehicle.getSpeed()}`);
vehicle.stop();
console.log(`Toc do hien tai ${vehicle.getSpeed()}`);
