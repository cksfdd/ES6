function asyncFun(a, b, time) {

    return new Promise(function (resolve, reject) {

        if (typeof a !== 'number' || typeof b !== 'number') {
            reject(new Error('no number'));
        }

        setTimeout(function () {
            resolve(a + b);
        }, time);
    });

}
/**
 * 方法一:(繁琐)
 * */
var resultList = [];
asyncFun(1, 2)
   .then(function (result) {
       resultList.push(result);
       return asyncFun(2, 3);
   })
   .then(function (result) {
       resultList.push(result);
   });

/**
 * Promise.all
 * [descript]   返回一个执行结果的数组, 但是只要有错误就不会返回结果, 会抛出异常
 * */
var promise = Promise.all([asyncFun(1, 2), asyncFun(11, 22), asyncFun(12, 12)]);
promise
    .then(function (result) {
        console.log(result);
    }, function (err) {
        console.log(err);
    });

/**
 * Promise.race
 * [descript]   返回最先执行完的结果(等所有的执行完以后),但是只要有错误就不会返回结果,会抛出异常
 * */
var promise2 = Promise.race([asyncFun(1, 22, 200), asyncFun(11, 22, 20), asyncFun(1, 2, 330)]);
promise2
    .then(function (result) {
        console.log(result);
    })
    .catch(function (err) {
        console.log(err);
    });

/**
 * Promise.resolve
 * [descript]
 * */
var promise3=Promise.resolve('hello');
promise3.then(function(resolve){
    console.log(resolve);
});

/**
 * Promise.reject
 * [desript]
 * */
var promise4=Promise.reject('no way');
promise4.then(function(){},function(err){
    console.log(err);
});
