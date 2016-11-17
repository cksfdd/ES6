'use strict'
function * fn(){
    yield 'liang'; //yield语句只能在generate函数体内；
    return 'leo';
}
fn();