/**
 创建时间 15/11/4
 公众号: forjs_org
 QQ: 1405491181  Email: 1405491181@qq.com
 site: www.forjs.org
 版权所有: 曾亮
 */

var arr = [  22,33,44,55 ];

var value = arr.findIndex(function(value,index,arr){
   return value > 33;
});

console.log(value);

var arr2 = [22,NaN];

console.log(arr2.findIndex(function(v){
   return Object.is(NaN,v);
}));