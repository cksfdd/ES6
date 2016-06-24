/**
 创建时间 15/11/13
 公众号: forjs_org
 QQ: 1405491181  Email: 1405491181@qq.com
 site: www.forjs.org
 版权所有: 曾亮
 */
'use strict';

function tag(strArr,arg1,arg2){
   console.log(strArr);
   console.log(arg1);
   console.log(arg2);
}

let name = 'leo';
let age = 30;

var result = tag`${name}${age}`;
