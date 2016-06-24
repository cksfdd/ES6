'use strict'
//抛出异常处理
function * fn(){
    let qq;
    try{
        qq = yield ; //yield默认情况下不会返回undefined值，不会抛出异常；
    }catch(e){
        console.log('error1');
    }
    console.log(qq);
}
let g = fn();
g.next();
g.next('qq 123456');
//如果里面做了异常处理，外面就不会处理
try{
    g.throw('error!');
}catch(e){
    console.log('error 2!');
}
