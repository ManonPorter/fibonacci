'use strict';
const memo = new Map(); //memoという名のMapを新規作成
memo.set(0, 0)//(値が０な０という名のキーを設定＝0番目用)
memo.set(1,1)//(値が1の1という名のキーを設定＝１番目用)
function fib(n){
        if (memo.has(n)){
		return memo.get(n); //もしmemoにすでにnのキーがあったらその値をそのまま返す
	const value = fib(n-1) + fib(n-2);
	memo.set(n, value);
	return value;
}
}
const length = 40;
for (let i = 0; i<= length; i++){
	console.log(fib(i))
}
