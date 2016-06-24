/**
 创建时间 15/11/16
 QQ: 1405491181
 个人网站: forjs.org
 版权所有: 曾亮 <1405491181@qq.com>
 说明: 未经许可,此视频和资料不可用于商业用途,违者必究.
 */
'use strict';
// ./node_modules/.bin/babel-node --presets es2015 example.js

//var {name} = {name:'leo',age:33};
//console.log(name);

//// example 2 模式与变量的区别
//let obj = {
//    a: {
//        b: {
//            c: 123
//        }
//    }
//};
//
//let {a:{b:{c}}} = obj;
//console.log(c);

// example 3 默认值
//let [x=15,y] = [null,12];
//console.log(x,y);

//var obj = {
//    name:'leo',
//    age:22
//};
//
//var {name,id='007',age} = obj;
//console.log(name,id,age);

//var obj = {
//    name:'leo',
//    age:22
//};
//
//var {name,id:uid='007',age} = obj;
//console.log(name,uid,age);

// example 4 错误异常 x = undefined, undefined.y;
//let {x:{y}} = {name:{y:12}};

//var name;
//var {name} = {name:'leo'};

// example 5 字符串
var [a,b,c] = 'hello';
console.log(a,b,c);
