/**
 创建时间 15/11/5
 公众号: forjs_org
 QQ: 1405491181  Email: 1405491181@qq.com
 site: www.forjs.org
 版权所有: 曾亮
 */

/**

 类型化数组 API 文档
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/subarray

 javascript 数组 API 文档
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

 */

var arr = new Int8Array([1,2,3]);
var arr2 = new Int16Array(6);

arr2.set(arr,2);

console.log(arr2);