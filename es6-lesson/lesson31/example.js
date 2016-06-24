/**
 创建时间 15/11/19
 QQ: 1405491181
 个人网站: forjs.org
 版权所有: 曾亮 <1405491181@qq.com>
 说明: 未经许可,此视频和资料不可用于商业用途,违者必究.
 */

'use strict';

function test([x=12,y=22]=[],{name='leo',qq='1405491181'}={}){
   return {x,y,name,qq};
}

let {y,name,qq,x} = test();
console.log(x);

let map = new Map();
map.set('k1','v1');
map.set('k2','v2');
map.set('k3','v3');
map.set('k4','v4');

for(let [key,value] of map){
  console.log(key,value);
}