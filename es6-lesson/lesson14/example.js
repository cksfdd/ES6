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

var tarr = new Int16Array([1,2,3,4,5,6]);
var tarr2 = tarr.subarray(1,3);
console.log(tarr2);
console.log(tarr.buffer === tarr2.buffer);

