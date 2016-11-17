'use strict'
//用同步的编程方式写异步的逻辑
function asyncF(name){
    return new Promise(function(resolve){
        setTimeout(function(){
         resolve('my name is '+ name);
        }, 500)
    });
}

function * fn(){
    console.log(yield asyncF('leo'));
}

let gf = fn();//等到的是一个js的指针对象；
function exec(gf,value){
    let result =gf.next(value);
    if(!result.done){
        if(result.value instanceof Promise){
            result.value.then(function(v){
                exec(gf,v);
            });
        }else{
            exec(gf,result.value);
        }
    }
}
exec(gf);
