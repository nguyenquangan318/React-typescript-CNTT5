let numbers = [1,2,3,4,5];
let numbersClone = [...numbers];
numbersClone[0]= 11;

function print(a,b,c,d,e){
    console.log(a, b, c);
}

print(numbers[0], numbers[1], numbers[2]);
print(...numbers);