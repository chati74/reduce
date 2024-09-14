const numbers = [4, 2, 3, 6];

function reduce1(){
    let res=0;
    for(let i = 0; i < numbers.length; i++){
        res += numbers[i];
    }
    return res;
}

console.log(reduce1());