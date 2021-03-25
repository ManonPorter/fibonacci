'use strict';
function fib(n){
    if(n === 0){
        return 0;
    } //n=0なら０を返す　
    else if (n === 1){
        return 1;
    } //n=1なら1を返す
    return fib(n-1) + fib(n-2); //それ以外ならnの一つ前と2つ前の数を足し合わせた値を返す
}

const length = 40;
for (let i = 0; i<= length; i++){
    console.log(fib(i));
}
