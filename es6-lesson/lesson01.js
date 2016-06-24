'use strict';

//{
//    var a = 12;
//    let b = 15;
//    {
//        console.log(a,b);
//    }
//}

//  泄密
//for(let i=0;i<5;i++){
//
//}
//console.log(i);

//  提升
//function f(){
//    console.log(a);
//    let a = 12;
//}
//
//f();

//var a = 12;
//function f(){
//    console.log(a);
//    let a;
//}
//
//f();

//{
//    let a;
//    var a;
//}


//// 代替立即执行匿名函数
//var config = (function(){
//    var config = [];
//    config.push(1);
//    config.push(2);
//    config.push(5);
//    return config;
//})();
//
//let config;
//{
//    config = [];
//    config.push(1);
//    config.push(2);
//    config.push(5);
//}


//// 函数不被提升
//function a(){ console.log(1);}
//function f(){
//    a();
//    if(false){
//        function a(){console.log(2)}
//    }
//}
//f();
//


//// 实际的例子
//
//var arr = [];
//
//function f(){
//    for(var i=0;i<5;i++){
//        arr.push((function(i){
//            return function(){
//                console.log(i);
//            }
//        })(i));
//    }
//}
//
//f();
//
//arr[3]();
//


// const 使用 , 对物理内存地址不可更改.
const a = {
    name:'leo'
};

a.name = 'zeng liang';
a.email= '1405491181@qq.com';

Object.freeze(a);

//a.name = 'leo';

console.log(a);





