'use strict';

function * fn(){
    yield 1;
    yield 2;
    yield 3;
    return 4;
}
/**
 * 不会执行里面的函数,返回的是一个iterator对象
 * */
let it = fn();
/**
 * 调用next方法可以执行函数体
 * */
//console.log(it.next());
//console.log(it.next());
//console.log(it.next());
//console.log(it.next());

for(let v of it){
    console.log(v);
}
