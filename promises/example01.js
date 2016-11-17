
/**
 ** ES5
 * */
/*function asyncFun(a,b,cb){
    setTimeout(function(){
        return cb(a+b);
    },200);
}

asyncFun(1,2,function(result){
    if(result>2){
        asyncFun(result,2,function(result){
            if(result>4){
                console.log('ok1');
            }
        });
    }
});*/


/**
 *  ES6
 * */
function asyncFun(a,b){
    //返回promise对象,resolve是状态变为resolved以后执行,reject是状态变为rejected以后执行的
    return new Promise(function(resolve,reject){
       setTimeout(function(){
           resolve(a+b);
       },200);
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject('err');
        }
    });

}
asyncFun('a',2)
    .then(function(result){
        if(result>2){
            return asyncFun(result,2);
        }
    },function(err){        //  then的第二个参数捕获错误信息,那么后面的就不会捕获错误信息
            console.log('first - ',err);
    })
    //  前面的then的return返回的结果交给后面的then处理,依此类推,如果前面返回的是promise对象那么就有then方法,
    //  如果前面返回的不是promise对象,那么它内部会自动用promise.resovle()包装,并返回
    .then(function(result){
         if(result>4){
             console.log('ok2');
         }
    })
    .catch(function(error){     //  用来捕获错误信息,前面的如果已经捕获了错误信息这里就不会再捕获
        console.log('second - ', error);
        //如果这里抛出错误,后面的catch和下一个then的第二个参数(本身不可以)可以继续处理
        throw new Error('first error');
});
