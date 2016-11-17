'use strict'

function sum (a,b){
    return a + b;
}
function * fn(qq){

    let result = sum (yield 1,yield 3); //直接做参数的话，不用括起来
    console.log('my qq :'+ (yield qq));//表达式中必须用（）括起来
}
var obj=fn(4);
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next('asdf'));

