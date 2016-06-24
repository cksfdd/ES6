'use strict';

function * fn(){
    let qq;
    try{
        qq = yield 'ff'; // yield 默认情况下返回undefined值, 不会抛出异常.

    }catch(e){
        console.log('error1')
    }
    console.log(qq);

}

let g = fn();

g.next();
g.next('qq 1405491181');
//try{
//    g.throw('error!');
//}catch(e){
//    console.log(' error 2!');
//}
