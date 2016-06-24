'use strict';

function asyncF(name){
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve('my name is ' + name);
        });
    });
}

function sum(a,b){
    return new Promise(function (resolve) {
        setTimeout(function () {
           resolve(a + b);
        });
    });
}
//
//function * fn(name){
//
//    if((yield sum(1,5)) > 6){
//        console.log(yield asyncF(name));
//    }else{
//        console.log('error ');
//    }
//}


//https://github.com/tj/co

function fn(name){

    sum(1,5).then(function(num){
        if(num > 6){
            asyncF(name).then(function (v) {
                console.log( v );
            });
        }else{
            console.log('error ');

        }
    });

}

let gf = fn('zengliang');

function exec(gf,value){

    let result = gf.next(value);
    if(!result.done){
        if(result.value instanceof Promise){
            result.value.then(function (v) {
                exec(gf,v);
            });
        }else{
            exec(gf,result.value);
        }
    }
}

exec(gf);
