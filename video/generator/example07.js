'use strict'
//用同步的编程方式写异步的逻辑
function asyncF(name){
    return new Promise(function(resolve){
        setTimeout(function(){
         resolve('my name is '+ name);
        })
    });
}

function sum(a,b){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(a+b);
        });
    });
}

function * fn(name){
    if((yield sum (3,5))>6){
        console.log(yield asyncF(name));
    }else{
        console.log('error');
    }
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