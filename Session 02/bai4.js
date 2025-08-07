let checkParity = (a) => {
    if(isNaN(a)){
        console.log('a not is number');
    }else if (a % 2 == 0){
        console.log(`${a} is an even number`);
    }else{
        console.log(`${a} is odd`);
    }
}
checkParity(7)
