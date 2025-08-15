abstract class Shape {
    name: string;
    getName(): string {
        return this.name;
    };
    abstract getSize(): void;
}
class Rectangle extends Shape {
    width: number;
    height: number;
    getSize(): void {
        console.log(`${this.width},${this.height}`);
    }
}
let rect = new Rectangle()
rect.width = 5;
rect.height = 10;
rect.getSize()

