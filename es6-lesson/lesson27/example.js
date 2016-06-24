/**
 创建时间 15/11/16
 QQ: 1405491181
 个人网站: forjs.org
 版权所有: 曾亮 <1405491181@qq.com>
 说明: 未经许可,此视频和资料不可用于商业用途,违者必究.
 */
'use strict';
// ./node_modules/.bin/babel-node --presets es2015 example.js

// 例1 入门
//var arr = [1,2,3];
////var a = arr[0];
////var b = arr[1];
////var c = arr[2];
//
//var [a,b,c] = arr;
//console.log(a,b,c);

// 例2 多维数组结构解析赋值
//let arr = [22,[5,8],11];
//let [a,[b,c],d] = arr;
//console.log(a,b,c,d);


// 例3 变量的交换
//let x = 11;
//let y = 22;
//
//[y,x] = [x,y];
//console.log(x,y);
//

// 例4 不完全解析
//let arr = [22,[5,8],11];
//let [a,[,c],d] = arr;
//console.log(a,c,d);

// 例5 , 不能被数组解析的值.
//let [x,y] = NaN; // undefined , null , {}

//// 例6 , Set解析赋值
//let [x,y] = new Set([22,33]);
//console.log(x,y);

// 例7 , 所有实现了 Iterator 的数据结构都能被数组解析
//class Group {
//    constructor() {
//
//    }
//
//    next() {
//        return {value: 'leo', done: false};
//    }
//
//[Symbol.iterator]() {
//    return this;
//}
//}
//
//let group = new Group();
//let [x,y] = group;
//console.log(x,y);

// ... 运算符 转换成数组
var [x,w,...y] = [1,2,3,4,5,6];
console.log(x,y,w);
