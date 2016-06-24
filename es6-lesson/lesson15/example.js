/**
 创建时间 15/11/5
 公众号: forjs_org
 QQ: 1405491181  Email: 1405491181@qq.com
 site: www.forjs.org
 版权所有: 曾亮
 */

/**

 DataView API
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/getFloat32

 */


var buffer = new ArrayBuffer(8);
var int16Arr = new Int16Array(buffer);
int16Arr[0] = 300;
var int8Arr = new Int8Array(buffer);

console.log(int8Arr);

var buffer2 = new ArrayBuffer(8);
var dataview = new DataView(buffer2);
dataview.setInt16(0,300);
var int8Arr2 = new Int8Array(buffer2);
console.log(int8Arr2);




