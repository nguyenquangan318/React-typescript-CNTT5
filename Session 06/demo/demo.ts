interface IHuman {
    id: number;
    name: string;
    walk(): void;
}

abstract class Human {
    id: number;
    name: string;
    walk() {
        console.log("Bước 1 bước");

    }
    abstract makeSound(): void;
}