'use strict';

function fn(){
    yield 'liang'; // yield 语句只能存在于 generate 函数体内.
    return 'leo';
}

fn();