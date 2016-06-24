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

function  fn(name){
    sum(1,5).then(function(num){
        if(num >6){
            asyncF(name).then(function(v){
                console.log(v);
            });
        }else{
            console.log('error');
        }
    });
}
fn('leo');

