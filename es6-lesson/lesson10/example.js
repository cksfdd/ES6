/**
 创建时间 15/11/3
 公众号: forjs_org
 QQ: 1405491181  Email: 1405491181@qq.com
 site: www.forjs.org
 版权所有: 曾亮



 Int8Array：8位有符号整数，长度1个字节。
 Uint8Array：8位无符号整数，长度1个字节。

 Int16Array：16位有符号整数，长度2个字节。
 Uint16Array：16位无符号整数，长度2个字节。

 Int32Array：32位有符号整数，长度4个字节。
 Uint32Array：32位无符号整数，长度4个字节。

 Float32Array：32位浮点数，长度4个字节。
 Float64Array：64位浮点数，长度8个字节。

 */

var buffer = new ArrayBuffer(12);
//var tarr = new Int16Array(buffer);

//var tarr = new Int16Array(10);
//console.log(tarr.length,tarr.byteLength);

//var tarr = new Int16Array(buffer,2,5);
//console.log(tarr.length);

//var tarr = new Int16Array([12,3,5]);
//console.log(tarr.buffer.byteLength);
//console.log(tarr.length,tarr.byteLength);

var tarr = new Int16Array([12,3,5]);
var tarr2 = new Int8Array(tarr);
console.log(tarr2.length,tarr2);