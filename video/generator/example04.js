'use strict'

function sum (){
    return a + b;
}
function * fn(){

    let result = sum (yield 1,yield 3); //直接做参数的话，不用括起来
    console.log('my qq :'+ (yield qq));//表达式中必须用（）括起来
}
fn();