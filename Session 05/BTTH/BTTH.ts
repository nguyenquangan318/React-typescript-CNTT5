//B1: Thiết kế các lớp
class Animal {
    private name: string;
    protected age: number;
    species: string;
    constructor(name: string, age: number, species: string) {
        this.name = name;
        this.age = age;
        this.species = species;
    }
    speak(): void {
        console.log("random noise");
    }
    getName(): string {
        return this.name;
    }
    setName(name: string): void {
        this.name = name;
    }
    getAge(): number {
        return this.age;
    }
    setAge(age: number): void {
        this.age = age;
    }
}
class Dog extends Animal {
    breed: string;
    constructor(name: string, age: number, species: string, breed: string) {
        super(name, age, species)
        this.breed = breed;
    }
    speak() {
        console.log("Woof!!");
    }
}
class Cat extends Animal {
    breed: string;
    constructor(name: string, age: number, species: string, breed: string) {
        super(name, age, species)
        this.breed = breed;
    }
    speak() {
        console.log("Meow!!");
    }
}
class Rabbit extends Animal {
    breed: string;
    constructor(name: string, age: number, species: string, breed: string) {
        super(name, age, species)
        this.breed = breed;
    }
    speak() {
        console.log("Squeak!!");
    }
}

let myDog = new Dog("John", 10, "mamal", "pug");
console.log(myDog.getName());
console.log(myDog.getAge());
console.log(myDog.species);
console.log(myDog.breed);
myDog.speak();
let myCat = new Cat("John", 10, "mamal", "pug")
myCat.speak();


