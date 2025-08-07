let numbers = [1, 2, 3, 4];

function print(...numbers) {
    console.log(numbers);
}

print(1, 2, 3, 4, 5, 6, 7);
let [first, ...rest] = numbers;

