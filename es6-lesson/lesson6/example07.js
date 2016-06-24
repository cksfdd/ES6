/**
 创建时间 15/11/26
 QQ: 1405491181
 个人网站: forjs.org
 版权所有: 曾亮 <1405491181@qq.com>
 说明: 未经许可,此视频和资料不可用于商业用途,违者必究.
 奖励: 购买到盗版的学员,可与作者联系,有奖励.
 */
'use strict';
var co = require('co');

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

function * fn(name){

    if((yield sum(2,5)) > 6){
        console.log(yield asyncF(name));
    }else{
        console.log('error ');
    }
}

var fnx = co.wrap(fn);
fnx('leo');

//https://github.com/tj/co
// <node.js 4.x 入门实战>