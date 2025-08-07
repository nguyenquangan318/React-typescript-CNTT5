// function sumArr(...arr){
//     let result=[];
//     for(let i = 0; i < arr.length; i++){
//         let sum=0;
//         for(let j = 0; j < arr[i].length; j++){
//             sum+= arr[i][j];
//         }
//         result[i] = sum;

//     }
//     return result;
// }

function sumArr(...arrs) {
    return arrs.map((element) => element.reduce((accumulative, value) => accumulative + value, 0))
}

let result = sumArr([1, 2], [6, 7, 8], [12, 9]);
console.log(result);


