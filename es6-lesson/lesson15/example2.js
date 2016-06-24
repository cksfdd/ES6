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

var buffer = new ArrayBuffer(10);

var dataview = new DataView(buffer);

// 0 0 0 0 0 0 0 0 0 0

dataview.setFloat32(2,18.9,true);
dataview.setInt32(6,2000,true);
dataview.setInt16(0,90,true);


var value = dataview.getFloat32(2,true);
console.log(value);
var value2 = dataview.getInt32(6);
console.log(value2);


