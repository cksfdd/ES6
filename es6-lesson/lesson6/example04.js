'use strict';

function sum(a,b){
    return a + b;
}

function * fn(){

    let result = sum(yield 1,5 + (yield 3) );

    console.log('my qq : ' + (yield qq) );  // 一个表达式中,需要把yield 语句括起来.
}

fn();