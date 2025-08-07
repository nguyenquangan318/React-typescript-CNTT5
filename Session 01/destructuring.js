let numbers = [1, 2, 3, 4, 5];
// let a = numbers[0];
let [a, b, c] = numbers;

function testfunction() {
    let student = {
        id: 1,
        fullName: "test",
        email: "test@gmail.com"
    }
    return student;
}

let { id } = testfunction();
